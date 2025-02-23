import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
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
import UserBlogCard from "../../components/blog/UserBlogCard";

export function Search({ handleSearch }) {
  return (
    <FormControl sx={{ width: { xs: "100%", md: "100%" } }} variant="outlined">
      <OutlinedInput
        onChange={handleSearch}
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
  const { userBlogs, details, categories, likes } = useSelector(
    (state) => state.blog
  );
  const { userId } = useSelector((state) => state.auth);
  const { getUserBlog, getCategories } = useBlogCalls();
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [allSelected, setAllSelected] = useState(true);

  useEffect(() => {
    getUserBlog(`/blogs?page=${page}&limit=3&author=${userId}`);
    getCategories("categories");
  }, [page, selectedCategory, likes]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  //   const handleSearch = (event) => {
  //     setPage(1);
  //     if (event.target.value) {
  //       getUsers(
  //         `users?page=${page}&limit=2&search[username]=${event.target.value}`
  //       );
  //     } else {
  //       getUsers(`users?page=${page}&limit=2`);
  //     }
  //   };

  return (
    <>
      <CssBaseline enableColorScheme />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ display: "flex", flexDirection: "column", mt: 16, mb: 8, gap: 4 }}
      >
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
            <Search
            // handleSearch={handleSearch}
            />
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
                // onClick={handleAllClick}
              >
                All categories
              </button>

              {categories.map((category) => (
                <button
                  key={category._id}
                  className={`${
                    selectedCategory === category._id
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                  } rounded-full px-3 py-2 text-sm font-medium`}
                  //   onClick={() => handleClick(category._id)}
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
              <Search
              // handleSearch={handleSearch}
              />
            </Box>
          </Box>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={2}
            justifyContent="center"
          >
            {userBlogs.map((userBlog) => (
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
    </>
  );
}
