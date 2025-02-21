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

export const loginSchema = object({
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

export default function LoginForm({
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
        <FormLabel htmlFor="email">Email</FormLabel>
        <TextField
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
      <FormControl fullWidth margin="normal">
        <FormLabel htmlFor="password">Password</FormLabel>
        <TextField
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
