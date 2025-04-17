import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";
import avatar from "../../../assets/icons/avatar.png";
import "../../../assets/styles/darkStyles.css";

const StyledTypography = styled(Typography)(({ theme }) => ({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
  [theme.breakpoints.between("md", "xl")]: {
    WebkitLineClamp: 3,
  },
}));

export default function ViewedBlogCard({
  _id,
  title,
  contentsId,
  image,
  userId,
  createdAt,
}) {
  const navigate = useNavigate();
  const theme = useTheme();

  const optimizeImage = (url) => {
    if (!url) return "";
    return url.replace("/upload/", "/upload/q_auto,f_auto/");
  };

  const handleDetail = () => {
    const formattedUsername = userId?.username.replace(/\s+/g, "-");
    navigate(`/blogs/${formattedUsername}/${_id}`);
  };

  return (
    <Box
      sx={{
        [theme.breakpoints.only("xs")]: {
          display: "flex",
          border: "1px solid grey",
          marginBottom: 1,
          "& .MuiCardMedia-root": {
            width: 151,
            objectFit: "initial",
          },
        },
        [theme.breakpoints.up("sm")]: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          border: "1px solid grey",
          paddingBottom: 1,
          backgroundColor: "transparent",
        },
      }}
    >
      <CardMedia
        onClick={handleDetail}
        component="img"
        sx={{
          cursor: "pointer",
          [theme.breakpoints.up("sm")]: {
            aspectRatio: "16 / 9",
            borderBottom: "1px solid",
            borderColor: "divider",
            objectFit: "initial",
            cursor: "pointer",
          },
        }}
        alt={title}
        image={image && image.length > 0 ? optimizeImage(image[0]) : []}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            variant="subtitle2"
            color="error.main"
            onClick={handleDetail}
            sx={{ cursor: "pointer" }}
          >
            {title}
          </Typography>
          <StyledTypography
            variant="body2"
            component="div"
            className="dark-content"
            sx={{ color: "text.secondary", marginTop: 1 }}
            dangerouslySetInnerHTML={{ __html: contentsId[0]?.content }}
          />
        </CardContent>

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
                    ? optimizeImage(userId.image[0])
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
    </Box>
  );
}
