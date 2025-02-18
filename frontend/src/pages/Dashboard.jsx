import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import MainContent from "./MainContent";

export default function Dashboard() {
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
