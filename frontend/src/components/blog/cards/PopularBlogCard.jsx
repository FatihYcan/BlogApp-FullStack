import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import useBlogCalls from "../../../hooks/useBlogCalls";
import BlogLikesModal from "../modals/BlogLikesModal";
import LoginModal from "../modals/LoginModal";
import avatar from "../../../assets/icons/avatar.png";
import "../../../assets/styles/detailStyles.css";

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

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export default function PopularBlogCard({
  _id,
  title,
  contents,
  categoryId,
  likes,
  comments,
  views,
  userId,
  createdAt,
}) {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
  const { username } = userInfo || {};
  const { postBlogLike } = useBlogCalls();

  const [likeOpen, setLikeOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const isLiked = likes.some((like) => like.userId.username === username);

  const handleLike = () => {
    username ? postBlogLike(_id) : setLoginOpen(true);
  };

  const handleDetail = () => {
    navigate(`/blogs/${userId.username}/${_id}`);
  };

  const handleLikeOpen = () => setLikeOpen(true);
  const handleLikeClose = () => setLikeOpen(false);
  const handleCloseLogin = () => setLoginOpen(false);

  return (
    <Grid size={{ xs: 12, sm: 6 }}>
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
          {categoryId.name}
        </Typography>
        <TitleTypography
          gutterBottom
          variant="h6"
          color="error.main"
          onClick={handleDetail}
        >
          {title}
          <NavigateNextRoundedIcon
            className="arrow"
            sx={{ fontSize: "1rem" }}
          />
        </TitleTypography>
        <StyledTypography
          variant="body2"
          className="editor-content"
          gutterBottom
          dangerouslySetInnerHTML={{ __html: contents[0]?.content }}
        ></StyledTypography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            height: "50px",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "50px",
              height: "50px",
            }}
          >
            <FavoriteIcon
              color={isLiked ? "error" : "inherit"}
              sx={{ cursor: "pointer" }}
              onClick={handleLike}
            />
            {likes.length > 0 && (
              <span
                style={{
                  fontSize: "1.2rem",
                  marginLeft: "2px",
                  cursor: "pointer",
                }}
                onClick={handleLikeOpen}
              >
                {likes.length}
              </span>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "default",
              width: "50px",
              height: "50px",
            }}
          >
            <ChatBubbleOutlineIcon />
            {comments.length > 0 && (
              <span style={{ fontSize: "1.2rem", marginLeft: "2px" }}>
                {comments.length}
              </span>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "default",
              width: "50px",
              height: "50px",
            }}
          >
            <VisibilityOutlinedIcon />
            {views.length > 0 && (
              <span style={{ fontSize: "1.2rem", marginLeft: "2px" }}>
                {views.length}
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
                key={userId._id}
                alt={userId.username}
                src={
                  userId.image && userId.image.length > 0
                    ? `http://127.0.0.1:8000${userId.image[0].slice(1)}`
                    : avatar
                }
                sx={{ width: 30, height: 30 }}
              />
            </AvatarGroup>
            <Typography variant="caption">
              {userId.username.charAt(0).toUpperCase() +
                userId.username.slice(1)}
            </Typography>
          </Box>
          <Typography variant="caption">
            {new Date(createdAt).toLocaleDateString("tr-TR")}
          </Typography>
        </Box>
        <BlogLikesModal
          likeOpen={likeOpen}
          handleLikeClose={handleLikeClose}
          likes={likes}
        />
        <LoginModal loginOpen={loginOpen} handleCloseLogin={handleCloseLogin} />
      </Box>
    </Grid>
  );
}
