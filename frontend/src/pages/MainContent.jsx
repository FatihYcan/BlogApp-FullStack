import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid2";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import useBlogCalls from "../hooks/useBlogCalls";
import BlogCard from "../components/blog/cards/BlogCard";
import BlogCardSkeleton from "../components/blog/cards/BlogCardSkeleton";
import PopularBlogCard from "../components/blog/cards/PopularBlogCard";

export function Search({ handleSearch, searchBlog }) {
  return (
    <FormControl sx={{ width: { xs: "100%", md: "100%" } }} variant="outlined">
      <OutlinedInput
        onChange={handleSearch}
        value={searchBlog}
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

export default function MainContent() {
  const { blogs, viewBlogs, details, likes, allBlogs } = useSelector(
    (state) => state.blog
  );

  const { getAllBlogs, getBlogs, getBlogsView } = useBlogCalls();

  const [page, setPage] = useState(sessionStorage.getItem("page") || 1);
  const [selectedCategory, setSelectedCategory] = useState(
    sessionStorage.getItem("selectedCategory") || ""
  );
  const [allSelected, setAllSelected] = useState(!selectedCategory);
  const [searchBlog, setSearchBlog] = useState(
    sessionStorage.getItem("searchBlog") || ""
  );
  const [loading, setLoading] = useState(true);

  const uniqueCategories = [
    ...new Set(allBlogs.map((blog) => JSON.stringify(blog.categoryId))),
  ].map((str) => JSON.parse(str));

  const generateBlogsUrl = () => {
    let url = `blogs?page=${page}&limit=6`;

    if (selectedCategory) {
      url += `&filter[categoryId]=${selectedCategory}`;
    }

    if (searchBlog) {
      url += `&search[title]=${searchBlog}`;
    }

    return url;
  };

  const handleAllClick = () => {
    setPage(1);
    setSelectedCategory("");
    setAllSelected(true);
  };

  const handleClick = (id) => {
    setSelectedCategory(id);
    setPage(1);
    setAllSelected(false);
  };

  const handleChange = (e, value) => {
    setPage(value);
  };

  const handleSearch = (e) => {
    setSearchBlog(e.target.value);
    setPage(1);
  };

 
  useEffect(() => {
    if (selectedCategory) {
      sessionStorage.setItem("selectedCategory", selectedCategory);
    } else {
      sessionStorage.removeItem("selectedCategory");
    }

    if (searchBlog) {
      sessionStorage.setItem("searchBlog", searchBlog);
    } else {
      sessionStorage.removeItem("searchBlog");
    }

    if (page) {
      sessionStorage.setItem("page", page);
    } else {
      sessionStorage.removeItem("page");
    }

    sessionStorage.removeItem("searchUser");
    sessionStorage.removeItem("selectedMyCategory");
    sessionStorage.removeItem("searchMyBlog");
    sessionStorage.removeItem("myPage");
    sessionStorage.removeItem("userPage");
  }, [selectedCategory, searchBlog, page]);

  useEffect(() => {
    getAllBlogs("blogs");
    getBlogs(generateBlogsUrl());
    getBlogsView("blogs?sort[viewCount]=desc&limit=4");
  }, [page, selectedCategory, likes, searchBlog]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Grid container rowSpacing={2} columnSpacing={2} justifyContent="center">
        {Array.from({ length: 6 }).map((_, index) => (
          <BlogCardSkeleton key={index} />
        ))}
      </Grid>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        marginTop: "1rem",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Köşe Yazısı - Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          flexDirection: "row",
          gap: 1,
          width: { xs: "100%", md: "fit-content" },
          overflow: "auto",
        }}
      >
        <Search handleSearch={handleSearch} searchBlog={searchBlog} />
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
            width: { xs: "100%", md: "80%" },
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

          {uniqueCategories.map((category) => (
            <button
              key={category._id}
              className={`${
                selectedCategory === category._id
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
          <Search handleSearch={handleSearch} searchBlog={searchBlog} />
        </Box>
      </Box>
      <Grid container rowSpacing={2} columnSpacing={2} justifyContent="center">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} {...blog} />
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
                page={Number(page)}
                showFirstButton
                showLastButton
              />
            </Stack>
          </Box>
        )}

        <Typography variant="h2" gutterBottom sx={{ mt: 4 }}>
          Most Popular
        </Typography>
        <Grid
          container
          rowSpacing={8}
          columnSpacing={12}
          justifyContent="center"
          sx={{ my: 4 }}
        >
          {viewBlogs.map((viewBlog) => (
            <PopularBlogCard key={viewBlog._id} {...viewBlog} />
          ))}
        </Grid>
      </div>
    </Box>
  );
}
