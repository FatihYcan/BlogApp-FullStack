import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import MainContent from "./MainContent";

export default function Blog() {
  return (
    <>
      <CssBaseline enableColorScheme />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ display: "flex", flexDirection: "column", mt: 16, mb: 8, gap: 4 }}
      >
        <MainContent />
      </Container>
    </>
  );
}
