import * as React from "react";
import blog from "../img/blog-app.png";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function BlogImg() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginRight: "15px",
        cursor: "pointer",
      }}
    >
      <Link to="/">
        <img style={{ height: 70, width: 100 }} src={blog} alt={blog} />
      </Link>
    </Box>
  );
}
