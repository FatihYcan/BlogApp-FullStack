import React, { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import MuiCard from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import MenuItem from "@mui/material/MenuItem";

// import ForgotPassword from './components/ForgotPassword';
// import AppTheme from '../shared-theme/AppTheme';
// import ColorModeSelect from "../shared-theme/ColorModeSelect";
// import {
//   GoogleIcon,
// } from "./components/CustomIcons";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const CategoryContainer = styled(Stack)(({ theme }) => ({
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsl(220, 30%, 5%), hsl(220, 30%, 5%))",
    }),
  },
}));

export default function NewBlog() {
  const { getCategories, postBlog } = useBlogCalls();
  const { categories } = useSelector((state) => state.blog);
  const [data, setData] = useState({
    title: "",
    content: "",
    categoryId: "",
    images: [],
    isPublish: true,
  });

  const fileInputRef = useRef(null);

  useEffect(() => {
    getCategories("categories");
    sessionStorage.removeItem("searchBlog");
    sessionStorage.removeItem("searchUser");
    sessionStorage.removeItem("selectedMyCategory");
    sessionStorage.removeItem("searchMyBlog");
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setData({ ...data, images: e.currentTarget.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("categoryId", data.categoryId);

    for (let i = 0; i < data.images.length; i++) {
      formData.append("images", data.images[i]);
    }

    formData.append("isPublish", data.isPublish);

    const isBlogCreated = await postBlog(formData);

    if (isBlogCreated) {
      setData({
        title: "",
        content: "",
        categoryId: "",
        images: [],
        isPublish: true,
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <>
      <CssBaseline enableColorScheme />
      <Container
        maxWidth="xl"
        component="main"
        sx={{ display: "flex", flexDirection: "column", mt: 16, gap: 4 }}
      >
        <CategoryContainer direction="column" justifyContent="space-between">
          <Card variant="outlined">
            <Typography
              component="h1"
              variant="h4"
              sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
            >
              New Blog
            </Typography>

            <Box
              encType="multipart/form-data"
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 2,
              }}
            >
              <FormControl fullWidth margin="normal">
                <FormLabel htmlFor="title">Title</FormLabel>
                <TextField
                  id="title"
                  type="text"
                  name="title"
                  variant="outlined"
                  required
                  value={data.title}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl fullWidth margin="normal">
                <FormLabel htmlFor="title">Content</FormLabel>
                <TextField
                  id="content"
                  type="text"
                  name="content"
                  variant="outlined"
                  required
                  value={data.content}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl fullWidth margin="normal">
                <FormLabel htmlFor="category">Category</FormLabel>
                <TextField
                  id="categoryId"
                  select
                  name="categoryId"
                  required
                  value={data.categoryId}
                  onChange={handleChange}
                >
                  {categories?.map((category) => (
                    <MenuItem key={category._id} value={category._id}>
                      {category.name}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>

              <FormControl fullWidth margin="normal">
                <FormLabel htmlFor="images">Images</FormLabel>
                <Box
                  sx={{
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <input
                    id="images"
                    name="images"
                    type="file"
                    accept="image/*"
                    required
                    multiple
                    style={{
                      width: "100%",
                      cursor: "pointer",
                      border: "none",
                      outline: "none",
                    }}
                    onChange={handleImageChange}
                    ref={fileInputRef}
                  />
                </Box>
                <span className=" text-gray-500">
                  {data.images.length ? "" : "En az 1 adet resim ekleyiniz."}
                </span>
              </FormControl>

              <FormControl fullWidth margin="normal">
                <FormLabel htmlFor="isPublish">Publish</FormLabel>
                <TextField
                  id="isPublish"
                  select
                  name="isPublish"
                  required
                  value={data.isPublish}
                  onChange={handleChange}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </TextField>
              </FormControl>

              <button
                type="submit"
                className="bg-green-600  text-white font-medium py-2 px-2 rounded-md mt-4 w-full"
              >
                New Blog
              </button>
            </Box>
          </Card>
        </CategoryContainer>
      </Container>
    </>
  );
}
