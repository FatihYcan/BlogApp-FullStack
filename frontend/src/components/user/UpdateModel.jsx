import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useParams } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import { object, string, boolean } from "yup";

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

const validationSchema = object({
  username: string().required("Username zorunludur."),
  firstName: string().required("First Name zorunludur."),
  lastName: string().required("Last Name zorunludur."),
  email: string()
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Lütfen geçerli bir email adresi giriniz."
    )
    .required("Email zorunludur."),
  password: string()
    .min(8, "Şifre en az 8 karakter olmalıdır.")
    .matches(/\d/, "Şifre en az bir rakam içermelidir.")
    .matches(/[a-z]/, "Şifre en az bir küçük harf içermelidir.")
    .matches(/[A-Z]/, "Şifre en az bir büyük harf içermelidir.")
    .matches(
      /[@$!%*?&]/,
      "Şifre en az bir özel karakter (@$!%*?&) içermelidir."
    )
    .nullable(), // Şifre boşsa doğrulama yapma
  isActive: boolean().required("Aktif durumu zorunludur"),
  isAdmin: boolean().required("Admin durumu zorunludur"),
});

export default function UpdateModel({
  updateOpen,
  handleUpdateClose,
  setData,
  data,
}) {
  const { putUser, getSingleUser } = useBlogCalls();
  const { _id } = useParams();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: data.username || "",
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      email: data.email || "",
      password: data.password ? "" : data.password || "",
      isActive: data.isActive || false,
      isAdmin: data.isAdmin || false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await putUser(_id, values);
      await getSingleUser(_id);
      handleUpdateClose();
    },
  });

  console.log(data.password);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
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
            onSubmit={formik.handleSubmit}
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder={
                  formik.values.password === ""
                    ? "••••••"
                    : formik.values.password
                }
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={
                  formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : formik.values.password === ""
                    ? "Şifreyi değiştirmek istiyorsanız bu alanı doldurun."
                    : ""
                }
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
                value={formik.values.isActive}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.isActive && Boolean(formik.errors.isActive)
                }
                helperText={formik.touched.isActive && formik.errors.isActive}
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
                value={formik.values.isAdmin}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.isAdmin && Boolean(formik.errors.isAdmin)}
                helperText={formik.touched.isAdmin && formik.errors.isAdmin}
              >
                <MenuItem value={false}>False</MenuItem>
                <MenuItem value={true}>True</MenuItem>
              </TextField>
            </FormControl>

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
