import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import DeleteUserModal from "../../components/user/modals/DeleteUserModal";
import UpdateUserModal from "../../components/user/modals/UpdateUserModal";
import useUserCalls from "../../hooks/useUserCalls";
import avatar from "../../assets/icons/avatar.png";

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

export default function UserDetail() {
  const { _id } = useParams();
  const { getSingleUser } = useUserCalls();
  const { singleUser } = useSelector((state) => state.user);

  const [loading, setLoading] = useState(true);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [data, setData] = useState({
    email: singleUser.email,
    firstName: singleUser.firstName,
    image: singleUser.image,
    isActive: singleUser.isActive,
    isAdmin: singleUser.isAdmin,
    lastName: singleUser.lastName,
    password: singleUser.password,
    username: singleUser.username,
  });

  const { createdAt, email, firstName, image, lastName, username } = singleUser;
  const fullName = firstName + " " + lastName;

  const optimizeImage = (url) => {
    if (!url) return "";
    return url.replace("/upload/", "/upload/q_auto,f_auto/");
  };

  useEffect(() => {
    getSingleUser(_id);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleUpdateClose = () => setUpdateOpen(false);
  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);

  const handleUpdateOpen = () => {
    setData({
      email: singleUser.email,
      firstName: singleUser.firstName,
      image: singleUser.image,
      isActive: singleUser.isActive,
      isAdmin: singleUser.isAdmin,
      lastName: singleUser.lastName,
      password: singleUser.password,
      username: singleUser.username,
    });
    setUpdateOpen(true);
  };

  return (
    <Container
      maxWidth="md"
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        my: 20,
        padding: 2,
        gap: 4,
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Köşe Yazısı${username ? " - " + username : ""}`}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      {loading || !singleUser ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <CardMedia
            component="img"
            alt={username}
            image={image && image.length > 0 ? optimizeImage(image[0]) : avatar}
            sx={{
              width: "80%",
              margin: "auto",
              aspectRatio: "16 / 9",
              objectFit: "initial",
            }}
          />
          <SyledCardContent>
            <Typography gutterBottom variant="h6" component="div">
              {username
                ? username.charAt(0).toUpperCase() + username.slice(1)
                : ""}
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
                  src={image && image.length > 0 ? optimizeImage(image[0]) : avatar}
                  sx={{ width: 24, height: 24 }}
                />
              </AvatarGroup>
              <Typography variant="caption">{email || ""}</Typography>
            </Box>
            <Typography variant="caption">
              {createdAt ? new Date(createdAt).toLocaleDateString("tr-TR") : ""}
            </Typography>
          </Box>

          <Box my={2} display="flex" justifyContent="center" gap={2}>
            <button
              className="bg-green-600  text-white font-medium py-2 px-2 rounded-md"
              onClick={handleUpdateOpen}
            >
              Update User
            </button>

            <button
              className="bg-red-600  text-white font-medium py-2 px-2 rounded-md"
              onClick={handleDeleteOpen}
            >
              Delete User
            </button>
          </Box>
          <UpdateUserModal
            updateOpen={updateOpen}
            handleUpdateClose={handleUpdateClose}
            data={data}
          />
          <DeleteUserModal
            deleteOpen={deleteOpen}
            handleDeleteClose={handleDeleteClose}
          />
        </>
      )}
    </Container>
  );
}
