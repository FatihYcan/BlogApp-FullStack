import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
      {"Copyright © "}
      &nbsp; 2025 - {new Date().getFullYear()}{" "}
      <span color="text.secondary">Köşe Yazısı</span>
    </Typography>
  );
}

export default function Footer() {
  return (
    <React.Fragment>
      <Divider />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, sm: 8 },
          py: { xs: 4, sm: 5 },
          textAlign: { sm: "center", md: "left" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div>
            <Copyright />
          </div>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ justifyContent: "left", color: "text.secondary" }}
          >
            <IconButton
              target="blank"
              color="inherit"
              size="small"
              href="https://github.com/FatihYcan"
              aria-label="GitHub"
              sx={{ alignSelf: "center" }}
            >
              <FacebookIcon />
            </IconButton>

            <IconButton
              target="blank"
              color="inherit"
              size="small"
              href="https://www.linkedin.com/in/fatih-yakutcan"
              aria-label="LinkedIn"
              sx={{ alignSelf: "center" }}
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton
              target="blank"
              color="inherit"
              size="small"
              href="mailto:f.yakutcan.32@gmail.com"
              aria-label="Email"
              sx={{ alignSelf: "center" }}
            >
              <EmailIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}
