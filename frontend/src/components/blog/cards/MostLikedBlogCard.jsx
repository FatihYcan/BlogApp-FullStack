import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import avatar from "../../../assets/icons/avatar.png";
import "../../../assets/styles/darkStyles.css";

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
  WebkitLineClamp: 3,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

const SyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  padding: 8,
  flexGrow: 1,
});

export default function MostLikedBlogCard({
  _id,
  title,
  contentsId,
  categoryId,
  image,
  userId,
  createdAt,
}) {
  const navigate = useNavigate();

  const handleDetail = () => {
    const formattedUsername = userId?.username.replace(/\s+/g, "-");
    navigate(`/blogs/${formattedUsername}/${_id}`);
  };

  return (
    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: 1,
          height: "100%",
        }}
      >
        <CardMedia
          onClick={handleDetail}
          component="img"
          sx={{
            cursor: "pointer",
            aspectRatio: "16 / 9",
            borderBottom: "1px solid",
            borderColor: "divider",
            objectFit: "initial",
          }}
          alt={title}
          image={image && image.length > 0 ? image[0] : []}
        />
        <SyledCardContent>
          <Typography gutterBottom variant="caption" component="div">
            {categoryId.name}
          </Typography>
          <TitleTypography
            gutterBottom
            variant="subtitle2"
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
            dangerouslySetInnerHTML={{ __html: contentsId[0]?.content }}
          ></StyledTypography>
        </SyledCardContent>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
            justifyContent: "space-between",
            paddingX: 2,
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
      </Box>
    </Grid>
  );
}
