import {
  Box,
  Chip,
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
import { useEffect } from "react";
import BlogCard from "../components/blog/BlogCard";
import PopularCard from "../components/blog/PopularCard";

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
  const { blogs, categories, viewBlogs } = useSelector((state) => state.blog);
  const { getBlogs, getCategories, getBlogsView } = useBlogCalls();

  useEffect(() => {
    getBlogs("blogs");
    getCategories("categories");
    getBlogsView("blogs?sort[views]=desc");
  }, []);

  const handleAllClick = () => {
    getBlogs("blogs");
  };

  const handleClick = (id) => {
    getBlogs(`blogs?filter[categoryId]=${id}`);
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
          <Chip size="medium" onClick={handleAllClick} label="All categories" />

          {categories.map((category) => (
            <Chip
              onClick={() => handleClick(category._id)}
              key={category._id}
              size="medium"
              label={category.name}
              sx={{
                backgroundColor: "transparent",
                border: "none",
              }}
            />
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
            <Pagination color="primary" count={10} showFirstButton showLastButton />
          </Stack>
        </Box>
      </div>
    </Box>
  );
}
