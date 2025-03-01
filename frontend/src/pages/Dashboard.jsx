import Container from "@mui/material/Container";
import MainContent from "./MainContent";

export default function Dashboard() {
  return (
    <Container
      maxWidth="xl"
      component="main"
      sx={{ display: "flex", flexDirection: "column", mt: 16, mb: 8, gap: 4 }}
    >
      <MainContent />
    </Container>
  );
}
