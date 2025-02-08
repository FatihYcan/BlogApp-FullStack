import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid2,
  styled,
  Typography,
} from "@mui/material";
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

export default function BlogCard({
  _id,
  title,
  image,
  categoryId,
  content,
  likes,
  comments,
  views,
  userId,
  createdAt,
}) {
  return (
    <Grid2 item xs={12} sm={6} md={4}>
      <SyledCard variant="outlined">
        <CardMedia
          component="img"
          alt={title}
          image={image}
          sx={{
            aspectRatio: "16 / 9",
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        />
        <SyledCardContent>
          <Typography gutterBottom variant="caption" component="div">
            {categoryId.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <StyledTypography variant="body2" color="text.secondary" gutterBottom>
            {content}
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
              {likes.length}
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
              {comments.length}
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
              {views.length}
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
                key={_id}
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
      </SyledCard>
    </Grid2>
  );
}
