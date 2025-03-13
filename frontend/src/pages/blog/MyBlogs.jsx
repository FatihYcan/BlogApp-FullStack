import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid2";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useSelector } from "react-redux";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useEffect, useState } from "react";
import UserBlogCard from "../../components/blog/cards/UserBlogCard";
import useCategoryCalls from "../../hooks/useCategoryCalls";
import BlogCardSkeleton from "../../components/blog/cards/BlogCardSkeleton";
import { Helmet } from "react-helmet";

export function Search({ handleSearch, searchMyBlog }) {
  return (
    <FormControl sx={{ width: { xs: "100%", md: "100%" } }} variant="outlined">
      <OutlinedInput
        onChange={handleSearch}
        value={searchMyBlog}
        size="small"
        id="search"
        placeholder="Search…"
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: "text.primary" }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          "aria-label": "search",
        }}
      />
    </FormControl>
  );
}

export default function MyBlogs() {
  const { getUserBlog } = useBlogCalls();
  const { getCategories } = useCategoryCalls();

  const { userBlogs, details, likes } = useSelector((state) => state.blog);
  const { categories } = useSelector((state) => state.category);

  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};

  const { _id } = userInfo || {};

  const [page, setPage] = useState(1);
  const [selectedMyCategory, setSelectedMyCategory] = useState(
    sessionStorage.getItem("selectedMyCategory") || ""
  );
  const [allSelected, setAllSelected] = useState(!selectedMyCategory);
  const [searchMyBlog, setSearchMyBlog] = useState(
    sessionStorage.getItem("searchMyBlog") || ""
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (selectedMyCategory) {
      sessionStorage.setItem("selectedMyCategory", selectedMyCategory);
    } else {
      sessionStorage.removeItem("selectedMyCategory");
    }

    if (searchMyBlog) {
      sessionStorage.setItem("searchMyBlog", searchMyBlog);
    } else {
      sessionStorage.removeItem("searchMyBlog");
    }
    sessionStorage.removeItem("selectedCategory");
    sessionStorage.removeItem("searchBlog");
    sessionStorage.removeItem("searchUser");
  }, [selectedMyCategory, searchMyBlog]);

  const generateBlogsUrl = () => {
    let url = `/blogs?page=${page}&limit=3&author=${_id}`;

    if (selectedMyCategory) {
      url += `&filter[categoryId]=${selectedMyCategory}`;
    }

    if (searchMyBlog) {
      url += `&search[title]=${searchMyBlog}&search[content]=${searchMyBlog}`;
    }

    return url;
  };

  useEffect(() => {
    getUserBlog(generateBlogsUrl());
    getCategories("categories");
  }, [page, selectedMyCategory, likes, searchMyBlog]);

  const handleAllClick = () => {
    setPage(1);
    setSelectedMyCategory("");
    setAllSelected(true);
  };

  const handleClick = (id) => {
    setSelectedMyCategory(id);
    setPage(1);
    setAllSelected(false);
  };

  const handleChange = (e, value) => {
    setPage(value);
  };

  const handleSearch = (e) => {
    setSearchMyBlog(e.target.value);
    setPage(1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container
      maxWidth="xl"
      component="main"
      sx={{ display: "flex", flexDirection: "column", mt: 16, mb: 8, gap: 4 }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog App - My Blogs</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          marginTop: "1rem",
        }}
      >
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            flexDirection: "row",
            gap: 1,
            width: { xs: "100%", md: "fit-content" },
            overflow: "auto",
          }}
        >
          <Search handleSearch={handleSearch} searchBlog={searchMyBlog} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            width: "100%",
            justifyContent: "space-between",
            alignItems: { xs: "start", md: "center" },
            gap: 4,
            overflow: "auto",
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              flexDirection: "row",
              gap: 3,
              overflow: "auto",
            }}
          >
            <button
              className={`${
                allSelected
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black"
              } rounded-full px-3 py-2 text-sm font-medium`}
              onClick={handleAllClick}
            >
              All categories
            </button>

            {categories.map((category) => (
              <button
                key={category._id}
                className={`${
                  selectedMyCategory === category._id
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                } rounded-full px-3 py-2 text-sm font-medium`}
                onClick={() => handleClick(category._id)}
              >
                {category.name}
              </button>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "row",
              gap: 1,
              width: { xs: "100%", md: "20%" },
              overflow: "auto",
            }}
          >
            <Search handleSearch={handleSearch} searchBlog={searchMyBlog} />
          </Box>
        </Box>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={2}
          justifyContent="center"
        >
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <BlogCardSkeleton key={index} />
              ))
            : userBlogs.map((userBlog) => (
                <UserBlogCard key={userBlog._id} {...userBlog} page={page} />
              ))}
        </Grid>

        <div>
          {details.totalRecords > details.limit && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                pt: 4,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack spacing={2}>
                <Pagination
                  color="primary"
                  count={details?.pages?.total}
                  onChange={handleChange}
                  page={page}
                  showFirstButton
                  showLastButton
                />
              </Stack>
            </Box>
          )}
        </div>
      </Box>
    </Container>
  );
}
