import { Helmet } from "react-helmet";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import MuiCard from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import NewCategoryForm from "../../components/category/forms/NewCategoryForm";

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
  return (
    <Container
      maxWidth="xl"
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: 16,
        gap: 4,
        height: { xs: "80vh", sm: "70vh" },
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Köşe Yazısı - New Category</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <CategoryContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(2rem, 8vw, 2.15rem)" }}
          >
            New Category
          </Typography>
          <NewCategoryForm />
        </Card>
      </CategoryContainer>
    </Container>
  );
}
