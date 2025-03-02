import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useParams } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import { object, string, boolean } from "yup";
import avatar from "../../assets/icons/avatar.png";

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
    .nullable(),
  isActive: boolean().required("Aktif durumu zorunludur"),
  isAdmin: boolean().required("Admin durumu zorunludur"),
});

export default function UpdateModel({ updateOpen, handleUpdateClose, data }) {
  const { putUser, getSingleUser } = useBlogCalls();
  const { _id } = useParams();
  const [visibleImage, setVisibleImage] = useState(true);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: data.username || "",
      firstName: data.firstName || "",
      lastName: data.lastName || "",
      email: data.email || "",
      image: data.image || [],
      password: data.password ? "" : data.password || "",
      isActive: data.isActive || false,
      isAdmin: data.isAdmin || false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();

      formData.append("username", values.username);
      formData.append("firstName", values.firstName);
      formData.append("lastName", values.lastName);
      formData.append("email", values.email);
      formData.append("isActive", values.isActive);
      formData.append("isAdmin", values.isAdmin);

      if (values.password) {
        formData.append("password", values.password);
      }

      if (
        values.image &&
        values.image instanceof FileList &&
        values.image.length > 0
      ) {
        formData.append("image", values.image[0]);
      } else if (values.image === "") {
        formData.append("image", []);
      }

      const isUpdated = await putUser(_id, formData);

      if (isUpdated) {
        await getSingleUser(_id);
        handleUpdateClose();
        setVisibleImage(true);
      }
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleDeleteImage = (e) => {
    e.preventDefault();
    setVisibleImage(false);
    formik.setFieldValue("image", "");
  };

  const handleModalClose = () => {
    formik.resetForm();
    handleUpdateClose();
  };

  return (
    <div>
      <Modal
        open={updateOpen}
        onClose={handleModalClose}
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
            <FormControl fullWidth margin="dense">
              <FormLabel htmlFor="username">User Name</FormLabel>
              <TextField
                size="small"
                name="username"
                id="username"
                type="text"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
            </FormControl>
            <FormControl fullWidth margin="dense">
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <TextField
                size="small"
                name="firstName"
                id="firstName"
                type="text"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </FormControl>

            <FormControl fullWidth margin="dense">
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <TextField
                size="small"
                name="lastName"
                id="lastName"
                type="text"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </FormControl>

            <FormControl fullWidth margin="dense">
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                size="small"
                name="email"
                id="email"
                type="email"
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </FormControl>

            <FormControl fullWidth margin="dense">
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                size="small"
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
            <FormControl fullWidth margin="dense">
              <FormLabel htmlFor="image">Image</FormLabel>
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
                {visibleImage && (
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    <Box sx={{ position: "relative" }}>
                      <img
                        src={
                          data.image && data.image.length > 0
                            ? `http://127.0.0.1:8000${data.image[0].slice(1)}`
                            : avatar
                        }
                        alt={formik.values.username}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                          borderRadius: "5px",
                        }}
                      />
                      <button
                        onClick={handleDeleteImage}
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
                  </Box>
                )}

                <input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  style={{
                    width: "100%",
                    cursor: "pointer",
                    border: "none",
                    outline: "none",
                  }}
                  onChange={(event) => {
                    formik.setFieldValue("image", event.currentTarget.files);
                  }}
                />
              </Box>
            </FormControl>

            <FormControl fullWidth margin="dense">
              <FormLabel htmlFor="isActive">Active</FormLabel>
              <TextField
                size="small"
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

            <FormControl fullWidth margin="dense">
              <FormLabel htmlFor="isAdmin">Admin</FormLabel>
              <TextField
                size="small"
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
              className="bg-green-600  text-white font-medium py-2 px-2 rounded-md mt-4 w-full uppercase"
            >
              Update User
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
