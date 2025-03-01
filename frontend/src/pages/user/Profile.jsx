import avatar from "../../assets/icons/avatar.png";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UpdateUserModel from "../../components/user/UpdateUserModel";

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

export default function Profile() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
  const { getSingleUser } = useBlogCalls();
  const { singleUser } = useSelector((state) => state.blog);
  const [updateOpen, setUpdateOpen] = useState(false);
  const handleUpdateClose = () => setUpdateOpen(false);

  const [data, setData] = useState({
    email: singleUser.email,
    firstName: singleUser.firstName,
    image: singleUser.image,
    lastName: singleUser.lastName,
    password: singleUser.password,
    username: singleUser.username,
  });

  const { _id } = userInfo || {};

  useEffect(() => {
    getSingleUser(_id);
    sessionStorage.removeItem("selectedCategory");
    sessionStorage.removeItem("searchBlog");
    sessionStorage.removeItem("searchUser");
    sessionStorage.removeItem("selectedMyCategory");
    sessionStorage.removeItem("searchMyBlog");
  }, []);

  const { createdAt, email, firstName, image, lastName, username } = singleUser;

  const fullName = firstName + " " + lastName;

  const handleUpdateOpen = () => {
    setData({
      email: singleUser.email,
      firstName: singleUser.firstName,
      image: singleUser.image,
      lastName: singleUser.lastName,
      password: singleUser.password,
      username: singleUser.username,
    });
    setUpdateOpen(true);
  };

  return (
    <Container
      maxWidth="xl"
      component="main"
      sx={{ display: "flex", flexDirection: "column", mt: 16, mb: 8, gap: 4 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          marginTop: "1rem",
        }}
      >
        <Grid
          container
          rowSpacing={2}
          columnSpacing={2}
          justifyContent="center"
        >
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <SyledCard variant="outlined">
              <CardMedia
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
                <StyledTypography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                >
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

              <Box my={2} display="flex" justifyContent="center" gap={2}>
                <button
                  className="bg-green-600  text-white font-medium py-2 px-2 rounded-md"
                  onClick={handleUpdateOpen}
                >
                  Update User
                </button>
              </Box>
              <UpdateUserModel
                updateOpen={updateOpen}
                handleUpdateClose={handleUpdateClose}
                data={data}
              />
            </SyledCard>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
