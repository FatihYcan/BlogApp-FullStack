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
import LoginModal from "../modals/LoginModal";
import avatar from "../../../assets/icons/avatar.png";
import "../../../assets/styles/darkStyles.css";

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
  padding: 8,
  flexGrow: 1,
});

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export default function BlogCard({
  _id,
  title,
  contentsId,
  image,
  categoryId,
  likesId,
  commentsId,
  viewsId,
  userId,
  createdAt,
  handleLike,
  loginOpen,
  handleCloseLogin,
}) {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
  const { username } = userInfo || {};

  const [likeOpen, setLikeOpen] = useState(false);

  const isLiked = likesId.some((like) => like.userId.username === username);

  const handleDetail = () => {
    const formattedUsername = userId?.username.replace(/\s+/g, "-");
    navigate(`/blogs/${formattedUsername}/${_id}`);
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
          image={image && image.length > 0 ? image[0] : []}
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
            onClick={handleDetail}
          >
            {title}
          </Typography>
          <StyledTypography
            variant="body2"
            color="text.secondary"
            gutterBottom
            className="editor-content"
            dangerouslySetInnerHTML={{ __html: contentsId[0]?.content }}
          />
        </SyledCardContent>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            height: "50px",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: "-20px",
            marginBottom: "-15px",
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
              onClick={() => handleLike(_id)}
            />

            {likesId.length > 0 && (
              <span
                style={{ fontSize: "1.2rem", marginLeft: "2px" }}
                onClick={handleLikeOpen}
              >
                {likesId.length}
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
            {commentsId.length > 0 && (
              <span style={{ fontSize: "1.2rem", marginLeft: "2px" }}>
                {commentsId.length}
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
            {viewsId.length > 0 && (
              <span style={{ fontSize: "1.2rem", marginLeft: "2px" }}>
                {viewsId.length}
              </span>
            )}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: 2,
            paddingTop: 1,
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
                    ? userId.image[0]
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
          likesId={likesId}
        />
        <LoginModal loginOpen={loginOpen} handleCloseLogin={handleCloseLogin} />
      </SyledCard>
    </Grid>
  );
}
