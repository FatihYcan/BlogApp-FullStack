import { Avatar, AvatarGroup, Box, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useState } from "react";
import LikeModal from "./LikeModal";

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

export default function PopularCard({
  _id,
  title,
  categoryId,
  content,
  likes,
  comments,
  views,
  userId,
  createdAt,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <TitleTypography gutterBottom variant="h6">
          {title}
          <NavigateNextRoundedIcon
            className="arrow"
            sx={{ fontSize: "1rem" }}
          />
        </TitleTypography>

        <StyledTypography variant="body2" color="text.secondary" gutterBottom>
          {content}
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
            {likes.length > 0 && (
              <span
                style={{
                  fontSize: "1.2rem",
                  marginLeft: "2px",
                  cursor: "pointer",
                }}
                onClick={handleOpen}
              >
                {likes.length}
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
                src={userId.image}
                sx={{ width: 24, height: 24 }}
              />
            </AvatarGroup>
            <Typography variant="caption">{userId.username}</Typography>
          </Box>
          <Typography variant="caption">
            {new Date(createdAt).toLocaleDateString("tr-TR")}
          </Typography>
        </Box>
        <LikeModal open={open} handleClose={handleClose} likes={likes} />
      </Box>
    </Grid>
  );
}
