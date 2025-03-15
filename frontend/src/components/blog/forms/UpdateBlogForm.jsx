import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import TextEditor from "./TextEditor";
import useBlogCalls from "../../../hooks/useBlogCalls";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useCategoryCalls from "../../../hooks/useCategoryCalls";

export default function UpdateBlogForm({ data, setData, handleUpdateClose }) {
  const { putBlog, getSingleBlog } = useBlogCalls();
  const { getCategories } = useCategoryCalls();
  const { _id, username } = useParams();
  const [isContent, setIsContent] = useState(false);
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    getCategories("categories");
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleContentChange = (content) => {
    const plainText = content.replace(/<[^>]+>/g, "").trim();

    if (plainText.length === 0) {
      setIsContent(true);
      setData({ ...data, content: "" });
    } else {
      setIsContent(false);
      setData({ ...data, content });
    }
  };

  const imagePath = Array.isArray(data?.images)
    ? data.images
        ?.filter((image) => typeof image === "string")
        ?.map((image) => image.slice(1)) || []
    : [];

  const handleDeleteImage = (e, image) => {
    e.preventDefault();
    const deleteImage = data.images.filter((img) => img !== `.${image}`);

    setData((prevData) => ({
      ...prevData,
      images: deleteImage,
    }));
  };

  const handleImageChange = (e) => {
    if (data?.images?.length) {
      setData((prevData) => ({
        ...prevData,
        images: [...prevData.images, ...e.currentTarget.files],
      }));
    } else {
      setData({ ...data, images: e.currentTarget.files });
    }
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

    formData.append("showFileName", data.showFileName);

    formData.append("isPublish", data.isPublish);

    if (!data.content) {
      setIsContent(true);
    }

    const isUpdated = await putBlog(_id, formData);

    if (isUpdated) {
      await getSingleBlog(username, _id);
      handleUpdateClose();
    }
  };

  return (
    <Box encType="multipart/form-data" component="form" onSubmit={handleSubmit}>
      <Typography gutterBottom variant="h6" component="div">
        Update Blog
      </Typography>
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
        <FormLabel htmlFor="content">Content</FormLabel>
        <TextEditor
          value={data.content}
          onChange={handleContentChange}
          isContent={isContent}
        />
      </FormControl>

      <FormControl fullWidth margin="dense">
        <FormLabel htmlFor="category">Category</FormLabel>
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
                  onClick={(e) => handleDeleteImage(e, image)}
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
            required={!data?.images?.length}
            style={{
              width: "100%",
              cursor: "pointer",
              border: "none",
              outline: "none",
            }}
            onChange={handleImageChange}
          />
        </Box>
        <span className=" text-gray-500">
          {data?.images?.length ? "" : "En az 1 adet resim ekleyiniz."}
        </span>
      </FormControl>

      <FormControl fullWidth margin="dense">
        <FormLabel htmlFor="showFileName">Show File Name</FormLabel>
        <TextField
          size="small"
          id="showFileName"
          select
          name="showFileName"
          required
          value={data.showFileName}
          onChange={handleChange}
        >
          <MenuItem value={true}>Yes</MenuItem>
          <MenuItem value={false}>No</MenuItem>
        </TextField>
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

      <button
        type="submit"
        className="bg-green-600  text-white font-medium py-2 px-2 rounded-md mt-4 w-full uppercase"
      >
        Update Blog
      </button>
    </Box>
  );
}
