import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Formik } from "formik";
import LoginForm, { loginSchema } from "../auth/LoginForm";
import useAuthCalls from "../../hooks/useAuthCalls";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

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

export default function LoginModal({ loginOpen, handleCloseLogin }) {
  const { login, signInProvider } = useAuthCalls();
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.removeItem("selectedCategory");
    sessionStorage.removeItem("searchBlog");
  }, []);

  return (
    <div>
      <Modal
        open={loginOpen}
        onClose={handleCloseLogin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
          >
            Sign in
          </Typography>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={async (values, actions) => {
              const isLogined = await login(values);

              if (isLogined) {
                actions.resetForm();
                handleCloseLogin();
              }
              actions.setSubmitting(false);
            }}
            component={(props) => <LoginForm {...props} />}
          ></Formik>

          <Divider sx={{ my: 1 }}>or</Divider>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert("Sign in with Google")}
              //   startIcon={<GoogleIcon />}
            >
              Sign in with Google
            </Button>
            <Typography sx={{ textAlign: "center" }}>
              Don&apos;t have an account?{" "}
              <span
                onClick={() => navigate("/register")}
                style={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "red",
                }}
              >
                Sign up
              </span>
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
