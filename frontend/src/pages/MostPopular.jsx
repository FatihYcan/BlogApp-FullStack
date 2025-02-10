import { Avatar, AvatarGroup, Box, Pagination, styled, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";
import { useEffect } from "react";
import Grid from "@mui/material/Grid2";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const TitleTypography = styled(Typography)(({ theme }) => ({
  position: "relative",
  textDecoration: "none",
  "&:hover": { cursor: "pointer" },
  "& .arrow": {
    visibility: "hidden",
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
  },
  "&:hover .arrow": {
    visibility: "visible",
    opacity: 0.7,
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "3px",
    borderRadius: "8px",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    width: 0,
    height: "1px",
    bottom: 0,
    left: 0,
    backgroundColor: (theme.vars || theme).palette.text.primary,
    opacity: 0.3,
    transition: "width 0.3s ease, opacity 0.3s ease",
  },
  "&:hover::before": {
    width: "100%",
  },
}));

export default function MostPopular() {
  const { viewBlogs } = useSelector((state) => state.blog);
  const { getBlogsView } = useBlogCalls();

  useEffect(() => {
    getBlogsView("blogs?sort[views]=desc");
  }, []);

  return (
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
          <Grid key={viewBlog._id} size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 1,
                height: "100%",
              }}
            >
              <Typography gutterBottom variant="caption" component="div">
                {viewBlog.categoryId.name}
              </Typography>
              <TitleTypography gutterBottom variant="h6">
                {viewBlog.title}
                <NavigateNextRoundedIcon
                  className="arrow"
                  sx={{ fontSize: "1rem" }}
                />
              </TitleTypography>

              <StyledTypography
                variant="body2"
                color="text.secondary"
                gutterBottom
              >
                {viewBlog.content}
              </StyledTypography>

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
                  {viewBlog.likes.length > 0 && (
                    <span
                      style={{ fontSize: "1.2rem", marginLeft: "2px" }}
                      // onClick={handleOpen}
                    >
                      {viewBlog.likes.length}
                    </span>
                  )}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ChatBubbleOutlineIcon sx={{ cursor: "pointer" }} />
                  {viewBlog.comments.length > 0 && (
                    <span style={{ fontSize: "1.2rem", marginLeft: "2px" }}>
                      {viewBlog.comments.length}
                    </span>
                  )}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "default",
                  }}
                >
                  <VisibilityOutlinedIcon />
                  {viewBlog.views.length > 0 && (
                    <span style={{ fontSize: "1.2rem", marginLeft: "2px" }}>
                      {viewBlog.views.length}
                    </span>
                  )}
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  alignItems: "center",
                  justifyContent: "space-between",
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
                      key={viewBlog.userId._id}
                      alt={viewBlog.userId.username}
                      src={viewBlog.userId.image}
                      sx={{ width: 24, height: 24 }}
                    />
                  </AvatarGroup>
                  <Typography variant="caption">
                    {viewBlog.userId.username}
                  </Typography>
                </Box>
                <Typography variant="caption">
                  {new Date(viewBlog.createdAt).toLocaleDateString("tr-TR")}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 4 }}>
        <Pagination
          hidePrevButton
          hideNextButton
          count={10}
          boundaryCount={10}
        />
      </Box>
    </div>
  );
}
