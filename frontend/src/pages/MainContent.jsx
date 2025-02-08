import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/material/styles";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const SyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",
  backgroundColor: (theme.vars || theme).palette.background.paper,
  "&:hover": {
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
}));

const SyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,
  "&:last-child": {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

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
  const { blogs, categories } = useSelector((state) => state.blog);
  const { getBlogs, getCategories } = useBlogCalls();

  console.log(categories);
  console.log(blogs);

  useEffect(() => {
    getBlogs("blogs");
    getCategories("categories");
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
          <Grid item xs={12} sm={6} md={4} key={blog._id}>
            <SyledCard variant="outlined">
              <CardMedia
                component="img"
                alt={blog.title}
                image={blog.image}
                sx={{
                  aspectRatio: "16 / 9",
                  borderBottom: "1px solid",
                  borderColor: "divider",
                }}
              />
              <SyledCardContent>
                <Typography gutterBottom variant="caption" component="div">
                  {blog.categoryId.name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {blog.title}
                </Typography>
                <StyledTypography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                >
                  {blog.content}
                </StyledTypography>
              </SyledCardContent>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FavoriteIcon sx={{ cursor: "pointer" }} />
                  <span style={{ fontSize: "1.2rem", marginLeft: "2px" }}>
                    {blog.likes.length}
                  </span>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ChatBubbleOutlineIcon sx={{ cursor: "pointer" }} />
                  <span style={{ fontSize: "1.2rem", marginLeft: "2px" }}>
                    {blog.comments.length}
                  </span>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "default",
                  }}
                >
                  <VisibilityOutlinedIcon />
                  <span style={{ fontSize: "1.2rem", marginLeft: "2px" }}>
                    {blog.views.length}
                  </span>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                    alignItems: "center",
                  }}
                >
                  <AvatarGroup>
                    <Avatar
                      key={blog._id}
                      alt={blog.userId.username}
                      src={blog.userId.image}
                      sx={{ width: 24, height: 24 }}
                    />
                  </AvatarGroup>
                  <Typography variant="caption">
                    {blog.userId.username}
                  </Typography>
                </Box>
                <Typography variant="caption">
                  {new Date(blog.createdAt).toLocaleDateString("tr-TR")}
                </Typography>
              </Box>
            </SyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
