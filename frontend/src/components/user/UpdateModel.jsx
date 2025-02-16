import {
  Box,
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useParams } from "react-router-dom";

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
  const { putUser } = useBlogCalls();
  const { _id } = useParams();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const imagePath = data?.images?.map((image) => image.slice(1)) || [];

  const handleSubmit = (e) => {
    e.preventDefault();
    putUser({ id: _id, data });
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
              Update User
            </Typography>
            <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="username">User Name</FormLabel>
              <TextField
                name="username"
                id="username"
                type="text"
                variant="outlined"
                required
                onChange={handleChange}
                value={data.username}
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <TextField
                name="firstName"
                id="firstName"
                type="text"
                variant="outlined"
                required
                onChange={handleChange}
                value={data.firstName}
              />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <TextField
                name="lastName"
                id="lastName"
                type="text"
                variant="outlined"
                required
                onChange={handleChange}
                value={data.lastName}
              />
            </FormControl>

            <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                name="email"
                id="email"
                type="email"
                variant="outlined"
                required
                onChange={handleChange}
                value={data.email}
              />
            </FormControl>

            {/* <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                name="password"
                id="password"
                type="password"
                variant="outlined"
                required
                onChange={handleChange}
                value={data.password}
              />
            </FormControl> */}

            <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="isActive">Active</FormLabel>
              <TextField
                id="isActive"
                select
                name="isActive"
                value={data.isActive}
                onChange={handleChange}
              >
                <MenuItem value={false}>False</MenuItem>
                <MenuItem value={true}>True</MenuItem>
              </TextField>
            </FormControl>

            <FormControl fullWidth margin="normal">
              <FormLabel htmlFor="isAdmin">Admin</FormLabel>
              <TextField
                id="isAdmin"
                select
                name="isAdmin"
                value={data.isAdmin}
                onChange={handleChange}
              >
                <MenuItem value={false}>False</MenuItem>
                <MenuItem value={true}>True</MenuItem>
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

            <button
              type="submit"
              className="bg-green-600  text-white font-medium py-2 px-2 rounded-md mt-4 w-full"
            >
              Update User
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
