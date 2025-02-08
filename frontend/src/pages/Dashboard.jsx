import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import MainContent from "./MainContent";
import Latest from "./Latest";
import Footer from "./Footer";
import MostPopular from "./MostPopular";

export default function Blog() {
  return (
    <>
      <CssBaseline enableColorScheme />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
      >
        <MainContent />
        <MostPopular />
        <Latest />
      </Container>
      <Footer />
    </>
  );
}
