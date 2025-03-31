import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import BlogLikesModal from "../modals/BlogLikesModal";
import useBlogCalls from "../../../hooks/useBlogCalls";
import avatar from "../../../assets/icons/avatar.png";
import "../../../assets/styles/detailStyles.css";

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

export default function UserBlogCard({
  _id,
  title,
  contents,
  image,
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

  const isLiked = likes.some((like) => like.userId.username === username);

  const handleLike = () => {
    postBlogLike(_id);
  };

  const handleDetail = () => {
    navigate(`/my-blogs/${username}/${_id}`);
  };

  const handleLikeOpen = () => setLikeOpen(true);
  const handleLikeClose = () => setLikeOpen(false);

  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <SyledCard variant="outlined">
        <CardMedia
          onClick={handleDetail}
          component="img"
          alt={title}
          image={
            image && image.length > 0
              ? `http://127.0.0.1:8000${image[0].slice(1)}`
              : []
          }
          sx={{
            aspectRatio: "16 / 9",
            borderBottom: "1px solid",
            borderColor: "divider",
            objectFit: "initial",
          }}
        />
        <SyledCardContent>
          <Typography gutterBottom variant="caption" component="div">
            {categoryId.name}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            color="error.main"
          >
            {title}
          </Typography>
          <StyledTypography
            variant="body2"
            color="text.secondary"
            className="editor-content"
            gutterBottom
            dangerouslySetInnerHTML={{ __html: contents[0]?.content }}
          />
        </SyledCardContent>

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
                style={{ fontSize: "1.2rem", marginLeft: "2px" }}
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
      </SyledCard>
    </Grid>
  );
}
