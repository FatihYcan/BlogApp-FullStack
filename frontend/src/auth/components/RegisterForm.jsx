import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { object, string } from "yup";

export const RegisterSchema = object({
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
    .required("Şifre zorunludur."),
});

export default function RegisterForm({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
  handleSubmit,
  setFieldValue,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      encType="multipart/form-data"
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: 2,
      }}
    >
      <FormControl fullWidth margin="normal">
        <FormLabel htmlFor="username">Username</FormLabel>
        <TextField
          id="username"
          type="text"
          name="username"
          required
          variant="outlined"
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
          id="firstName"
          type="text"
          name="firstName"
          required
          variant="outlined"
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
          id="lastName"
          type="text"
          name="lastName"
          required
          variant="outlined"
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
          id="email"
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          variant="outlined"
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
          required
          variant="outlined"
          color={errors.password ? "error" : "primary"}
          value={values.password}
          onChange={handleChange}
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
              setFieldValue("image", event.currentTarget.files);
            }}
          />
        </Box>
      </FormControl>

      {/* <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      /> */}
      {/* <ForgotPassword open={open} handleClose={handleClose} /> */}
      <Button type="submit" fullWidth variant="contained">
        Sign in
      </Button>
      {/* <Link
        component="button"
        type="button"
        // onClick={handleClickOpen}
        variant="body2"
        sx={{ alignSelf: "center" }}
      >
        Forgot your password?
      </Link> */}
    </Box>
  );
}
