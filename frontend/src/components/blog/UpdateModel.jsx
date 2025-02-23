import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
  maxHeight: "80vh",
  overflowY: "auto",
};

export default function UpdateModel({
  updateOpen,
  handleUpdateClose,
  setData,
  data,
}) {
  const { categories } = useSelector((state) => state.blog);
  const { getCategories, putBlog } = useBlogCalls();
  const { _id } = useParams();

  useEffect(() => {
    getCategories("categories");
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const imagePath = data?.images?.map((image) => image.slice(1)) || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    putBlog(_id, data);
  };

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
            encType="multipart/form-data"
            component="form"
            onSubmit={handleSubmit}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
              >
                {categories?.map((category) => (
                  <MenuItem key={category._id} value={category._id}>
                    {category.name}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
            {/* 
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
                    <Box key={index} sx={{ position: "relative" }}>
                      <img
                        src={`http://127.0.0.1:8000${image}`}
                        alt={`Uploaded ${index}`}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                          borderRadius: "5px",
                        }}
                      />
                      <button
                        // onClick={() => handleDeleteImage(image)}
                        style={{
                          position: "absolute",
                          top: "5px",
                          right: "5px",
                          backgroundColor: "red",
                          color: "white",
                          border: "none",
                          borderRadius: "50%",
                          width: "20px",
                          height: "20px",
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "12px",
                        }}
                      >
                        X
                      </button>
                    </Box>
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
            </FormControl> */}

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
                    <Box key={index} sx={{ position: "relative" }}>
                      <img
                        src={`http://127.0.0.1:8000${image}`}
                        alt={`Uploaded ${index}`}
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                          borderRadius: "5px",
                        }}
                      />
                      <button
                        // onClick={() => handleDeleteImage(image)}
                        style={{
                          position: "absolute",
                          top: "5px",
                          right: "5px",
                          backgroundColor: "red",
                          color: "white",
                          border: "none",
                          borderRadius: "50%",
                          width: "20px",
                          height: "20px",
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "12px",
                        }}
                      >
                        X
                      </button>
                    </Box>
                  ))}
                </Box>

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
                  // onChange={handleImageChange}
                  // ref={fileInputRef}
                />
              </Box>
            </FormControl>

            <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="isPublish">Publish</FormLabel>
              <TextField
                id="isPublish"
                select
                name="isPublish"
                value={data.isPublish}
                onChange={handleChange}
              >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </TextField>
            </FormControl>

            <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="isPublish">Publish</FormLabel>
              <TextField
                id="isPublish"
                select
                name="isPublish"
                value={data.isPublish}
                onChange={handleChange}
              >
                <MenuItem value={false}>Draft</MenuItem>
                <MenuItem value={true}>Published</MenuItem>
              </TextField>
            </FormControl>

            <button
              type="submit"
              className="bg-green-600  text-white font-medium py-2 px-2 rounded-md mt-4 w-full"
            >
              Update Blog
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
