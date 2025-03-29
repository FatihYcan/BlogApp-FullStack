import { Helmet } from "react-helmet";
import Container from "@mui/material/Container";
import NewBlogForm from "../../components/blog/forms/NewBlogForm";

export default function NewBlog() {
  return (
    <Container
      maxWidth="md"
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingTop: 20,
        gap: 1,
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog App - New Blog</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <NewBlogForm />
    </Container>
  );
}
