import {
  Box,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useParams } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { object, string, boolean } from "yup";
import { useFormik } from "formik";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "80vh",
  overflowY: "auto",
};

export const updateUserSchema = object({
  username: string().required("User Name zorunludur."),
  firstName: string().required("First Name zorunludur."),
  lastName: string().required("Last Name zorunludur."),
  email: string()
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Lütfen geçerli bir email adresi giriniz."
    )
    .required("Email zorunludur."),
  password: string()
    .notRequired()
    .when("password", {
      is: (value) => value && value.length > 0,
      then: (schema) =>
        schema
          .min(8, "Şifre en az 8 karakter olmalıdır.")
          .matches(/\d/, "Şifre en az bir rakam içermelidir.")
          .matches(/[a-z]/, "Şifre en az bir küçük harf içermelidir.")
          .matches(/[A-Z]/, "Şifre en az bir büyük harf içermelidir.")
          .matches(
            /[@$!%*?&]/,
            "Şifre en az bir özel karakter (@$!%*?&) içermelidir."
          ),
    }),
  isActive: boolean().required("Aktiflik durumu zorunludur."),
  isAdmin: boolean().required("Admin durumu zorunludur."),
});

export default function UpdateModel({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
  handleSubmit,
  setFieldValue,
  updateOpen,
  handleUpdateClose,
}) {
  // const { putUser, getSingleUser } = useBlogCalls();
  // const { _id } = useParams();
  //
  // console.log(data.isAdmin)

  // const handleChange = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };

  // const imagePath = data?.images?.map((image) => image.slice(1)) || [];

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   putUser({ id: _id, data });
  //   getSingleUser({ id: _id });
  //   handleUpdateClose();
  // };

  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handlePasswordChange = (e) => {
    setIsPasswordChanged(true);
    handleChange(e);
  };

  return (
    <div>
      <Modal
        open={updateOpen}
        onClose={handleUpdateClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            encType="multipart/form-data"
            component="form"
            onSubmit={handleSubmit}
          >
            <Typography gutterBottom variant="h6" component="div">
              Update User
            </Typography>
            <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="username">User Name</FormLabel>
              <TextField
                name="username"
                id="username"
                type="text"
                variant="outlined"
                required
                color={errors.username ? "error" : "primary"}
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.username && Boolean(errors.username)}
                helperText={errors.username}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <TextField
                name="firstName"
                id="firstName"
                type="text"
                variant="outlined"
                required
                color={errors.firstName ? "error" : "primary"}
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={errors.firstName}
              />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <TextField
                name="lastName"
                id="lastName"
                type="text"
                variant="outlined"
                required
                color={errors.lastName ? "error" : "primary"}
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={errors.lastName}
              />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                name="email"
                id="email"
                type="email"
                variant="outlined"
                required
                color={errors.email ? "error" : "primary"}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={errors.email}
              />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••"
                variant="outlined"
                color={errors.password ? "error" : "primary"}
                value={isPasswordChanged ? values.password : ""}
                onChange={handlePasswordChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="isActive">Active</FormLabel>
              <TextField
                id="isActive"
                select
                name="isActive"
                color={errors.isActive ? "error" : "primary"}
                value={values.isActive}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.isActive && Boolean(errors.isActive)}
                helperText={errors.isActive}
              >
                <MenuItem value={false}>False</MenuItem>
                <MenuItem value={true}>True</MenuItem>
              </TextField>
            </FormControl>

            <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="isAdmin">Admin</FormLabel>
              <TextField
                id="isAdmin"
                select
                name="isAdmin"
                color={errors.isAdmin ? "error" : "primary"}
                value={values.isAdmin}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.isAdmin && Boolean(errors.isAdmin)}
                helperText={errors.isAdmin}
              >
                <MenuItem value={false}>False</MenuItem>
                <MenuItem value={true}>True</MenuItem>
              </TextField>
            </FormControl>

            {/* 
            <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="images">Images</FormLabel>
              <Box
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {imagePath.map((image, index) => (
                    <Box key={index} sx={{ position: "relative" }}>
                      <img
                        src={`http://127.0.0.1:8000${image}`}
                        alt={`Uploaded ${index}`}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                          borderRadius: "5px",
                        }}
                      />
                      <button
                        // onClick={() => handleDeleteImage(image)}
                        style={{
                          position: "absolute",
                          top: "5px",
                          right: "5px",
                          backgroundColor: "red",
                          color: "white",
                          border: "none",
                          borderRadius: "50%",
                          width: "20px",
                          height: "20px",
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "12px",
                        }}
                      >
                        X
                      </button>
                    </Box>
                  ))}
                </Box>

                <input
                  id="images"
                  name="images"
                  type="file"
                  accept="image/*"
                  multiple
                  style={{
                    width: "100%",
                    cursor: "pointer",
                    border: "none",
                    outline: "none",
                  }}
                />
              </Box>
            </FormControl> */}

            <button
              type="submit"
              className="bg-green-600  text-white font-medium py-2 px-2 rounded-md mt-4 w-full"
            >
              Update User
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
