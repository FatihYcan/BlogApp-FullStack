import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid2";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import useBlogCalls from "../../hooks/useBlogCalls";
import BlogCardSkeleton from "../../components/blog/cards/BlogCardSkeleton";
import UserBlogCard from "../../components/blog/cards/UserBlogCard";

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
  const navigate = useNavigate();
  const { getUserBlog, getAllUserBlog } = useBlogCalls();
  const { userBlogs, details, likes, allUserBlogs } = useSelector(
    (state) => state.blog
  );
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
  const { _id } = userInfo || {};

  const [myPage, setMyPage] = useState(sessionStorage.getItem("myPage") || 1);
  const [selectedMyCategory, setSelectedMyCategory] = useState(
    sessionStorage.getItem("selectedMyCategory") || ""
  );
  const [allSelected, setAllSelected] = useState(!selectedMyCategory);
  const [searchMyBlog, setSearchMyBlog] = useState(
    sessionStorage.getItem("searchMyBlog") || ""
  );
  const [loading, setLoading] = useState(true);

  const uniqueCategories = [
    ...new Set(allUserBlogs.map((blog) => JSON.stringify(blog.categoryId))),
  ].map((str) => JSON.parse(str));

  const generateBlogsUrl = () => {
    let url = `/blogs?page=${myPage}&limit=6&author=${_id}`;

    if (selectedMyCategory) {
      url += `&filter[categoryId]=${selectedMyCategory}`;
    }

    if (searchMyBlog) {
      url += `&search[title]=${searchMyBlog}`;
    }

    return url;
  };

  const handleAllClick = () => {
    setMyPage(1);
    setSelectedMyCategory("");
    setAllSelected(true);
  };

  const handleClick = (id) => {
    setSelectedMyCategory(id);
    setMyPage(1);
    setAllSelected(false);
  };

  const handleChange = (e, value) => {
    setMyPage(value);
  };

  const handleSearch = (e) => {
    setSearchMyBlog(e.target.value);
    setMyPage(1);
  };

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

    if (myPage) {
      sessionStorage.setItem("myPage", myPage);
    } else {
      sessionStorage.removeItem("myPage");
    }

    sessionStorage.removeItem("selectedCategory");
    sessionStorage.removeItem("searchBlog");
    sessionStorage.removeItem("searchUser");
    sessionStorage.removeItem("page");
    sessionStorage.removeItem("userPage");
  }, [selectedMyCategory, searchMyBlog, myPage]);

  useEffect(() => {
    const fetchData = async () => {
      await getUserBlog(generateBlogsUrl());
      await getAllUserBlog(`/blogs?author=${_id}`);
      setLoading(false);
    };
    fetchData();
  }, [myPage, selectedMyCategory, likes, searchMyBlog]);

  useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 100);
  
      return () => clearTimeout(timer);
    }, []);

  if (loading) {
    return (
      <Container maxWidth="xl" component="main" sx={{ mt: 16, mb: 8 }}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={2}
          justifyContent="center"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <BlogCardSkeleton key={index} />
          ))}
        </Grid>
      </Container>
    );
  }

  if (userBlogs.length === 0) {
    return (
      <Container maxWidth="xl" component="main" sx={{ mt: 16, mb: 8 }}>
        <Helmet>
          <title>Köşe Yazısı - My Blogs</title>
        </Helmet>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "69vh",
          }}
        >
          <Typography
            variant="h4"
            color="error"
            align="center"
            marginBottom={3}
          >
            You don't have a blog...
          </Typography>
          <button
            onClick={() => navigate("/new-blog")}
            className="bg-green-600 text-white font-medium py-2 px-2 rounded-md mt-4 w-1/3"
          >
            Write Blog
          </button>
        </Box>
      </Container>
    );
  }

  return (
    <Container
      maxWidth="xl"
      component="main"
      sx={{ display: "flex", flexDirection: "column", mt: 16, mb: 8, gap: 4 }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Köşe Yazısı - My Blogs</title>
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
          <Search handleSearch={handleSearch} searchMyBlog={searchMyBlog} />
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

            {uniqueCategories.map((category) => (
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
            <Search handleSearch={handleSearch} searchMyBlog={searchMyBlog} />
          </Box>
        </Box>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={2}
          justifyContent="center"
        >
          {userBlogs.map((userBlog) => (
            <UserBlogCard key={userBlog._id} {...userBlog} />
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
                  page={Number(myPage)}
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
