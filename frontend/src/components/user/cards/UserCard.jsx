import avatar from "../../../assets/icons/avatar.png";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

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

export default function UserCard({
  createdAt,
  email,
  firstName,
  image,
  lastName,
  username,
  _id,
}) {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/users/${_id}`);
  };

  const fullName = firstName + " " + lastName;

  return (
    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
      <SyledCard variant="outlined">
        <CardMedia
          onClick={handleDetail}
          component="img"
          alt={username}
          image={
            image && image.length > 0
              ? `http://127.0.0.1:8000${image[0].slice(1)}`
              : avatar
          }
          sx={{
            aspectRatio: "16 / 9",
            borderBottom: "1px solid",
            borderColor: "divider",
            objectFit: "initial",
          }}
        />
        <SyledCardContent>
          <Typography gutterBottom variant="h6" component="div">
            {username}
          </Typography>
          <StyledTypography variant="body2" color="text.secondary" gutterBottom>
            {fullName}
          </StyledTypography>
        </SyledCardContent>

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
                alt={username}
                src={
                  image && image.length > 0
                    ? `http://127.0.0.1:8000${image[0].slice(1)}`
                    : avatar
                }
                sx={{ width: 30, height: 30 }}
              />
            </AvatarGroup>
            <Typography variant="caption">{email}</Typography>
          </Box>
          <Typography variant="caption">
            {new Date(createdAt).toLocaleDateString("tr-TR")}
          </Typography>
        </Box>
      </SyledCard>
    </Grid>
  );
}
