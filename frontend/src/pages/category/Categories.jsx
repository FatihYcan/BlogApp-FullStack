import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid2";
import { useSelector } from "react-redux";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useEffect } from "react";
import CategoryCard from "../../components/category/CategoryCard";

export default function Categories() {
  const { categories } = useSelector((state) => state.blog);
  const { getCategories } = useBlogCalls();

  useEffect(() => {
    getCategories("categories");
    sessionStorage.removeItem("searchBlog");
    sessionStorage.removeItem("searchUser");
    sessionStorage.removeItem("selectedMyCategory");
    sessionStorage.removeItem("searchMyBlog");
  }, []);

  return (
    <>
      <CssBaseline enableColorScheme />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ display: "flex", flexDirection: "column", mt: 16, mb: 8, gap: 4 }}
      >
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
    </>
  );
}
