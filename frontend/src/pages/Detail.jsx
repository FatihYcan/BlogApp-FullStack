import {
  Avatar,
  AvatarGroup,
  Box,
  CardContent,
  CardMedia,
  Container,
  styled,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useBlogCalls from "../hooks/useBlogCalls";

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

export default function Detail() {
  const { _id } = useParams();
  const { getSingleBlog } = useBlogCalls();

  useEffect(() => {
    getSingleBlog({ id: _id });
  }, []);

  return (
    <Container
      maxWidth="xl"
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        my: 20,
        padding: 2,
        gap: 4,
      }}
    >
      <CardMedia
        component="img"
        alt={"title"}
        image={"`http://127.0.0.1:8000${imagePath}`"}
        sx={{
          aspectRatio: "16 / 9",
          objectFit: "initial",
        }}
      />
      <SyledCardContent>
        <Typography gutterBottom variant="caption" component="div">
          {"categoryId.name"}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {"title"}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {"content"}
        </Typography>
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
          <FavoriteIcon
            // color={isLiked ? "error" : "inherit"}
            sx={{ cursor: "pointer" }}
            // onClick={handleLike}
          />

          {/* {likes.length > 0 && (
            <span
              style={{ fontSize: "1.2rem", marginLeft: "2px" }}
              onClick={handleOpen}
            >
              {likes.length}
            </span>
            )} */}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "default",
          }}
        >
          <ChatBubbleOutlineIcon />
          {/* {comments.length > 0 && (
            <span style={{ fontSize: "1.2rem", marginLeft: "2px" }}>
              {comments.length}
            </span>
          )} */}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "default",
          }}
        >
          <VisibilityOutlinedIcon />
          {/* {views.length > 0 && (
            <span style={{ fontSize: "1.2rem", marginLeft: "2px" }}>
              {views.length}
            </span>
          )} */}
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
              //   key={userId._id}
              alt={"userId.username"}
              src={"userId.image"}
              sx={{ width: 24, height: 24 }}
            />
          </AvatarGroup>
          <Typography variant="caption">{"userId.username"}</Typography>
        </Box>
        <Typography variant="caption">
          {/* {new Date(createdAt).toLocaleDateString("tr-TR")} */}
        </Typography>
      </Box>
      {/* <LikeModal open={open} handleClose={handleClose} likes={likes} /> */}
    </Container>
  );
}
