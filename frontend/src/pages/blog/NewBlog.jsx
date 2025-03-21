import Container from "@mui/material/Container";
import NewBlogForm from "../../components/blog/forms/NewBlogForm";
import { Helmet } from "react-helmet";

export default function NewBlog() {
  return (
    <Container
      maxWidth="md"
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        my: 20,
        padding: 2,
        gap: 4,
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
