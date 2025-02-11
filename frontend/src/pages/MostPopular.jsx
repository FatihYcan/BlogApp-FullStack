import { Box, Pagination, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import useBlogCalls from "../hooks/useBlogCalls";
import { useEffect } from "react";
import Grid from "@mui/material/Grid2";
import PopularCard from "../components/blog/PopularCard";

export default function MostPopular() {
  const { viewBlogs } = useSelector((state) => state.blog);
  const { getBlogsView } = useBlogCalls();

  useEffect(() => {
    getBlogsView("blogs?sort[views]=desc");
  }, []);

  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Most Popular
      </Typography>
      <Grid
        container
        rowSpacing={8}
        columnSpacing={12}
        justifyContent="center"
        sx={{ my: 4 }}
      >
        {viewBlogs.map((viewBlog) => (
          <PopularCard key={viewBlog._id} {...viewBlog} />
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          pt: 4,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack spacing={2}>
          <Pagination count={10} showFirstButton showLastButton />
        </Stack>
      </Box>
    </div>
  );
}
