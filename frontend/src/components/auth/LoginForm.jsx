import { useState } from "react";
import { Formik } from "formik";
import { object, string } from "yup";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ForgotPasswordForm, { forgotSchema } from "./ForgotPasswordForm";
import useAuthCalls from "../../hooks/useAuthCalls";

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
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);

  const { forgotPassword } = useAuthCalls();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (e) => e.preventDefault();
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <FormControl fullWidth margin="dense">
        <FormLabel htmlFor="email">Email</FormLabel>
        <TextField
          size="small"
          id="email"
          type="email"
          name="email"
          placeholder="your@email.com"
          variant="outlined"
          color={errors.email ? "error" : "success"}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={errors.email}
        />
      </FormControl>

      <FormControl fullWidth margin="dense">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <FormLabel htmlFor="password">Password</FormLabel>

          <Link
            component="button"
            type="button"
            onClick={handleClickOpen}
            variant="body2"
            sx={{ alignSelf: "baseline", textDecoration: "none", color: "red" }}
          >
            Forgot your password?
          </Link>
        </Box>

        <TextField
          size="small"
          id="password"
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="••••••"
          variant="outlined"
          color={errors.password ? "error" : "success"}
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

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={forgotSchema}
        onSubmit={async (values, actions) => {
          const isChanged = await forgotPassword(values);

          if (isChanged) {
            actions.resetForm();
            handleClose();
          }
          actions.setSubmitting(false);
        }}
        component={(props) => (
          <ForgotPasswordForm
            {...props}
            open={open}
            handleClose={handleClose}
          />
        )}
      ></Formik>

      <button
        type="submit"
        className="bg-black text-white dark:bg-white dark:text-black font-medium py-2 px-2 rounded-lg uppercase"
      >
        Sign in
      </button>
    </Box>
  );
}
