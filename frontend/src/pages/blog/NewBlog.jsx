import { Helmet } from "react-helmet";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import NewBlogForm from "../../components/blog/forms/NewBlogForm";

export default function NewBlog() {
  const theme = useTheme();
  return (
    <Container
      maxWidth="md"
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mt: 16,
        mb: 8,
        gap: 4,
        [theme.breakpoints.up("xl")]: {
          minHeight: "67vh",
        },
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Köşe Yazısı - New Blog</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <NewBlogForm />
    </Container>
  );
}
