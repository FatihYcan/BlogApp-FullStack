import {
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";
import { useEffect, useState } from "react";
import BlogCard from "../components/blog/BlogCard";
import PopularCard from "../components/blog/PopularCard";
import { Link } from "react-router-dom";

export function Search() {
  return (
    <FormControl sx={{ width: { xs: "100%", md: "100%" } }} variant="outlined">
      <OutlinedInput
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
  const { blogs, categories, viewBlogs, detail } = useSelector(
    (state) => state.blog
  );
  const { getBlogs, getCategories, getBlogsView } = useBlogCalls();
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [allSelected, setAllSelected] = useState(true);

  useEffect(() => {
    if (selectedCategory) {
      getBlogs(
        `blogs?filter[categoryId]=${selectedCategory}&page=${page}&limit=3`
      );
    } else {
      getBlogs(`blogs?page=${page}&limit=3`);
    }
    getCategories("categories");
    getBlogsView("blogs?sort[views]=desc&limit=2");
  }, [page, selectedCategory]);

  const handleAllClick = () => {
    setPage(1);
    setSelectedCategory("");
    setAllSelected(true);
    getBlogs(`blogs?page=${page}&limit=3`);
  };

  const handleClick = (id) => {
    setSelectedCategory(id);
    setPage(1);
    setAllSelected(false);
    getBlogs(`blogs?filter[categoryId]=${id}&page=${page}&limit=3`);
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
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
        <Search />
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
          <Search />
        </Box>
      </Box>
      <Grid container rowSpacing={2} columnSpacing={2} justifyContent="center">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} {...blog} />
        ))}
      </Grid>

      <div>
        {detail.totalRecords > detail.limit && (
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
                count={detail?.pages?.total}
                onChange={handleChange}
                page={page}
                showFirstButton
                showLastButton
              />
            </Stack>
          </Box>
        )}

        <Typography variant="h2" gutterBottom>
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
            <PopularCard key={viewBlog._id} {...viewBlog} />
          ))}
        </Grid>
      </div>
    </Box>
  );
}
