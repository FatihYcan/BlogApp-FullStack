import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import avatar from "../../assets/icons/avatar.png";
import DeleteModal from "../../components/user/modals/DeleteModal";
import UpdateModal from "../../components/user/modals/UpdateModal";
import useUserCalls from "../../hooks/useUserCalls";

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

  useEffect(() => {
    getSingleUser(_id);
  }, []);

  const { createdAt, email, firstName, image, lastName, username } = singleUser;
  const fullName = firstName + " " + lastName;

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

  const handleUpdateClose = () => setUpdateOpen(false);
  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);

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
      <CardMedia
        component="img"
        alt={username}
        image={
          image && image.length > 0
            ? `http://127.0.0.1:8000${image[0].slice(1)}`
            : avatar
        }
        sx={{
          width: "80%",
          margin: "auto",
          aspectRatio: "16 / 9",
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
              sx={{ width: 24, height: 24 }}
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

        <button
          className="bg-red-600  text-white font-medium py-2 px-2 rounded-md"
          onClick={handleDeleteOpen}
        >
          Delete User
        </button>
      </Box>
      <UpdateModal
        updateOpen={updateOpen}
        handleUpdateClose={handleUpdateClose}
        data={data}
      />
      <DeleteModal
        deleteOpen={deleteOpen}
        handleDeleteClose={handleDeleteClose}
      />
    </Container>
  );
}
