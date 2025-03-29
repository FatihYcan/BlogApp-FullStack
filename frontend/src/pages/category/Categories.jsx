import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import useCategoryCalls from "../../hooks/useCategoryCalls";
import CategoryCard from "../../components/category/cards/CategoryCard";

export default function Categories() {
  const { categories } = useSelector((state) => state.category);

  const { getCategories } = useCategoryCalls();

  useEffect(() => {
    getCategories("categories");
    sessionStorage.removeItem("selectedCategory");
    sessionStorage.removeItem("searchBlog");
    sessionStorage.removeItem("page");
    sessionStorage.removeItem("searchUser");
    sessionStorage.removeItem("selectedMyCategory");
    sessionStorage.removeItem("searchMyBlog");
    sessionStorage.removeItem("myPage");
    sessionStorage.removeItem("userPage");
  }, []);

  return (
    <Container
      maxWidth="xl"
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: 16,
        mb: 8,
        gap: 4,
        minHeight: "60vh",
      }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog App - Categories</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          marginTop: "1rem",
        }}
      >
        <Grid
          container
          rowSpacing={2}
          columnSpacing={2}
          justifyContent="center"
        >
          {categories.map((category) => (
            <CategoryCard key={category._id} {...category} />
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
