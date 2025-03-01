import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MuiCard from "@mui/material/Card";
import useAuthCalls from "../../hooks/useAuthCalls";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import RegisterForm, {
  RegisterSchema,
} from "../../auth/components/RegisterForm";
import { useEffect } from "react";

// import ForgotPassword from './components/ForgotPassword';
// import AppTheme from '../shared-theme/AppTheme';
// import ColorModeSelect from "../shared-theme/ColorModeSelect";
// import {
//   GoogleIcon,
// } from "./components/CustomIcons";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsl(220, 30%, 5%), hsl(220, 30%, 5%))",
    }),
  },
}));

export default function Register() {
  const { register, signInProvider } = useAuthCalls();
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.removeItem("selectedCategory");
    sessionStorage.removeItem("searchBlog");
  }, []);

  return (
    <>
      <CssBaseline enableColorScheme />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ display: "flex", flexDirection: "column", mt: 16, gap: 4 }}
      >
        <SignUpContainer direction="column" justifyContent="space-between">
          {/* <ColorModeSelect
          sx={{ position: "fixed", top: "1rem", right: "1rem" }}
          /> */}
          <Card variant="outlined">
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
            >
              Sign up
            </Typography>

            <Formik
              initialValues={{
                username: "",
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                image: [],
              }}
              validationSchema={RegisterSchema}
              onSubmit={async (values, actions) => {
                const formData = new FormData();

                formData.append("username", values.username);
                formData.append("firstName", values.firstName);
                formData.append("lastName", values.lastName);
                formData.append("email", values.email);
                formData.append("password", values.password);

                if (
                  values.image &&
                  values.image instanceof FileList &&
                  values.image.length > 0
                ) {
                  formData.append("image", values.image[0]);
                }

                const isRegistered = await register(formData);

                if (isRegistered) {
                  actions.resetForm();
                }
                actions.setSubmitting(false);
              }}
              component={(props) => <RegisterForm {...props} />}
            ></Formik>

            <Divider>or</Divider>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => alert("Sign in with Google")}
                //   startIcon={<GoogleIcon />}
              >
                Sign up with Google
              </Button>
              <Typography sx={{ textAlign: "center" }}>
                Don&apos;t have an account?{" "}
                <span
                  onClick={() => navigate("/login")}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "red",
                  }}
                >
                  Sign in
                </span>
              </Typography>
            </Box>
          </Card>
        </SignUpContainer>
      </Container>
    </>
  );
}
