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
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import UpdateModel, {
  updateUserSchema,
} from "../../components/user/UpdateModel";
import { Formik } from "formik";

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
  const navigate = useNavigate();

  const { singleUser } = useSelector((state) => state.blog);
  //   const { username } = useSelector((state) => state.auth);

  const { getSingleUser, putUser } = useBlogCalls();

  useEffect(() => {
    getSingleUser({ id: _id });
  }, []);

  const { createdAt, email, firstName, image, lastName, username } = singleUser;

  const fullName = firstName + " " + lastName;

  //   const imagePath = images?.map((image) => image.slice(1)) || [];

  //   const isLiked = likes?.some((like) => like.userId.username === username);

  const [updateOpen, setUpdateOpen] = useState(false);
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
        // image={"`http://127.0.0.1:8000${imagePath[0]}`"}
        image={image}
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
              src={image}
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
          // onClick={handleDeleteOpen}
        >
          Delete User
        </button>
      </Box>

      <Formik
        enableReinitialize
        initialValues={{
          username: singleUser.username || "",
          firstName: singleUser.firstName || "",
          lastName: singleUser.lastName || "",
          email: singleUser.email || "",
          password: singleUser.password || "",
          isActive: singleUser.isActive || false,
          isAdmin: singleUser.isAdmin || false,
        }}
        validationSchema={updateUserSchema}
        onSubmit={(values) => {
          putUser({ id: _id, data: values });
          getSingleUser({ id: _id });
          handleUpdateClose();
        }}
        component={(props) => (
          <UpdateModel
            {...props}
            updateOpen={updateOpen}
            handleUpdateClose={handleUpdateClose}
          />
        )}
      ></Formik>

      {/* <UpdateModel
        updateOpen={updateOpen}
        handleUpdateClose={handleUpdateClose}
        setData={setData}
        data={data}
      /> */}
    </Container>
  );
}
