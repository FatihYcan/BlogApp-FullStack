import { useState } from "react";
import { object, string } from "yup";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

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
  const handleMouseDownPassword = (e) => e.preventDefault();

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
      <FormControl fullWidth margin="dense">
        <FormLabel htmlFor="username">User name</FormLabel>
        <TextField
          size="small"
          id="username"
          type="text"
          name="username"
          variant="outlined"
          color={errors.username ? "error" : "primary"}
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.username && Boolean(errors.username)}
          helperText={errors.username}
        />
      </FormControl>

      <FormControl fullWidth margin="dense">
        <FormLabel htmlFor="firstName">First Name</FormLabel>
        <TextField
          size="small"
          id="firstName"
          type="text"
          name="firstName"
          variant="outlined"
          color={errors.firstName ? "error" : "primary"}
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.firstName && Boolean(errors.firstName)}
          helperText={errors.firstName}
        />
      </FormControl>

      <FormControl fullWidth margin="dense">
        <FormLabel htmlFor="lastName">Last Name</FormLabel>
        <TextField
          size="small"
          id="lastName"
          type="text"
          name="lastName"
          variant="outlined"
          color={errors.lastName ? "error" : "primary"}
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.lastName && Boolean(errors.lastName)}
          helperText={errors.lastName}
        />
      </FormControl>

      <FormControl fullWidth margin="dense">
        <FormLabel htmlFor="email">Email</FormLabel>
        <TextField
          size="small"
          id="email"
          type="email"
          name="email"
          placeholder="your@email.com"
          variant="outlined"
          color={errors.email ? "error" : "primary"}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={errors.email}
        />
      </FormControl>
      <FormControl fullWidth margin="dense">
        <FormLabel htmlFor="password">Password</FormLabel>
        <TextField
          size="small"
          id="password"
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="••••••"
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
            onChange={(e) => {
              setFieldValue("image", e.currentTarget.files);
            }}
          />
        </Box>
      </FormControl>
      <button
        type="submit"
        className="bg-black text-white dark:bg-white dark:text-black font-medium py-2 px-2 rounded-lg uppercase"
      >
        Sign up
      </button>
    </Box>
  );
}
