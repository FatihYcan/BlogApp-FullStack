import {
  Box,
  FormControl,
  FormLabel,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useBlogCalls from "../../hooks/useBlogCalls";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UpdateModel({
  updateOpen,
  handleUpdateClose,
  setData,
  data,
}) {
  const { categories } = useSelector((state) => state.blog);
  const { getCategories, putBlogs, getDetails } = useBlogCalls();

  useEffect(() => {
    getCategories("categories");
  }, []);

  console.log(data);

  const imagePath = data?.images?.map((image) => image.slice(1)) || [];

  return (
    <div>
      <Modal
        open={updateOpen}
        onClose={handleUpdateClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            //   onSubmit={handleSubmit}
          >
            <Typography gutterBottom variant="h6" component="div">
              Update Blog
            </Typography>
            <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="title">Title</FormLabel>
              <TextField
                name="title"
                id="title"
                type="text"
                variant="outlined"
                required
                //   onChange={handleChange}
                value={data.title}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="content">Content</FormLabel>
              <TextField
                name="content"
                id="content"
                type="text"
                variant="outlined"
                required
                //   onChange={handleChange}
                value={data.content}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="category">Category</FormLabel>
              <TextField
                id="categoryId"
                select
                name="categoryId"
                value={data.categoryId}
                // onChange={handleChange}
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
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {imagePath.map((image, index) => (
                    <img
                      key={index}
                      src={`http://127.0.0.1:8000${image}`}
                      alt={`Uploaded ${index}`}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "5px",
                      }}
                    />
                  ))}
                </Box>

                <input
                  id="images"
                  name="images"
                  type="file"
                  accept="image/*"
                  multiple
                  style={{
                    width: "100%",
                    cursor: "pointer",
                    border: "none",
                    outline: "none",
                  }}
                />
              </Box>
            </FormControl>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
