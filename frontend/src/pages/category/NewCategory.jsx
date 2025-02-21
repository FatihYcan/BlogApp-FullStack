import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import MuiCard from "@mui/material/Card";
import useAuthCalls from "../../hooks/useAuthCalls";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";

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

const CategoryContainer = styled(Stack)(({ theme }) => ({
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

export default function NewCategory() {
  const { login, signInProvider } = useAuthCalls();
  const navigate = useNavigate();

  return (
    <>
      <CssBaseline enableColorScheme />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ display: "flex", flexDirection: "column", mt: 16, gap: 4 }}
      >
        <CategoryContainer direction="column" justifyContent="space-between">
          {/* <ColorModeSelect
          sx={{ position: "fixed", top: "1rem", right: "1rem" }}
          /> */}
          <Card variant="outlined">
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
            >
              New Category
            </Typography>

            <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="name">Name</FormLabel>
              <TextField
                id="name"
                type="text"
                name="name"
                variant="outlined"
                // value={values.email}
                // onChange={handleChange}
              />
            </FormControl>

            <button
              type="submit"
              className="bg-green-600  text-white font-medium py-2 px-2 rounded-md mt-4 w-full"
            >
              New Category
            </button>
          </Card>
        </CategoryContainer>
      </Container>
    </>
  );
}
