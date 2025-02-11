import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import MainContent from "./MainContent";
import Footer from "./Footer";

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
      </Container>
      <Footer />
    </>
  );
}
