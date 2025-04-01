import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import useBlogCalls from "../../../hooks/useBlogCalls";
import useCategoryCalls from "../../../hooks/useCategoryCalls";

export default function UpdateBlogForm({ data, setData, handleUpdateClose }) {
  const { putBlog, getSingleBlog } = useBlogCalls();
  const { getCategories } = useCategoryCalls();
  const { _id, username } = useParams();
  const { categories } = useSelector((state) => state.category);

  const [newImage, setNewImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await getCategories("categories");
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setNewImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("categoryId", data.categoryId);

    if (newImage) {
      formData.append("image", newImage);
    } else if (
      data.image &&
      data.image instanceof FileList &&
      data.image.length > 0
    ) {
      formData.append("image", data.image[0]);
    }

    formData.append("isPublish", data.isPublish);

    const isUpdated = await putBlog(_id, formData);

    if (isUpdated) {
      await getSingleBlog(username, _id);
      handleUpdateClose();
    }
  };

  return (
    <Box encType="multipart/form-data" component="form" onSubmit={handleSubmit}>
      {loading || !categories ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <FormControl fullWidth margin="dense">
            <FormLabel htmlFor="title">Title</FormLabel>
            <TextField
              size="small"
              name="title"
              id="title"
              type="text"
              variant="outlined"
              required
              onChange={handleChange}
              value={data.title}
            />
          </FormControl>

          <FormControl fullWidth margin="dense">
            <FormLabel htmlFor="categoryId">Category</FormLabel>
            <TextField
              size="small"
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

          <FormControl fullWidth margin="dense">
            <FormLabel htmlFor="image">Image</FormLabel>
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
                <Box>
                  <img
                    src={data.image[0]}
                    alt={data.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
                  />
                </Box>
              </Box>

              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                style={{
                  width: "100%",
                  cursor: "pointer",
                  border: "none",
                  outline: "none",
                }}
                onChange={handleImageChange}
              />
            </Box>
          </FormControl>

          <FormControl fullWidth margin="dense">
            <FormLabel htmlFor="isPublish">Publish</FormLabel>
            <TextField
              size="small"
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

          <Box my={2} display="flex" justifyContent="center" gap={2}>
            <button
              type="submit"
              className="bg-green-600  text-white font-medium py-2 px-2 rounded-md w-1/2"
            >
              Update Blog
            </button>

            <button
              type="button"
              className="bg-red-600  text-white font-medium py-2 px-2 rounded-md w-1/2"
              onClick={handleUpdateClose}
            >
              Cancel
            </button>
          </Box>
        </>
      )}
    </Box>
  );
}
