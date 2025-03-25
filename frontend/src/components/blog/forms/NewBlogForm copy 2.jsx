import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useRef, useState } from "react";
import useBlogCalls from "../../../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import useCategoryCalls from "../../../hooks/useCategoryCalls";
import ContentForm from "./ContentForm";
import useContentCalls from "../../../hooks/useContentCalls";

export default function NewBlogForm() {
  const { postBlog, postBlogId } = useBlogCalls();
  const { postContent } = useContentCalls();
  const { getCategories } = useCategoryCalls();
  const { categories } = useSelector((state) => state.category);
  const [formKey, setFormKey] = useState(0);
  const [blogId, setBlogId] = useState("");
  const [isContent, setIsContent] = useState(false);
  const [isText, setIsText] = useState(true);

  const [data, setData] = useState({
    title: "",
    categoryId: "",
    image: [],
    isPublish: true,
  });

  const [contentData, setContentData] = useState({
    blogId: blogId,
    text: "",
    order: 0,
    images: [],
  });

  const fileInputRef = useRef(null);

  useEffect(() => {
    getCategories("categories");
    sessionStorage.removeItem("selectedCategory");
    sessionStorage.removeItem("searchBlog");
    sessionStorage.removeItem("searchUser");
    sessionStorage.removeItem("selectedMyCategory");
    sessionStorage.removeItem("searchMyBlog");
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setData({ ...data, image: e.currentTarget.files });
  };

  const handleContentChange = (e) => {
    setContentData({ ...contentData, [e.target.name]: e.target.value });
  };

  const handleTextChange = (text) => {
    const plainText = text.replace(/<[^>]+>/g, "").trim();

    if (plainText.length === 0) {
      setIsText(true);
      setContentData({ ...contentData, text: "" });
    } else {
      setIsText(false);
      setContentData({ ...contentData, text });
    }
  };

  const handleImagesChange = (e) => {
    setContentData({ ...contentData, images: e.currentTarget.files });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("categoryId", data.categoryId);

    if (data.image && data.image instanceof FileList && data.image.length > 0) {
      formData.append("image", data.image[0]);
    }

    formData.append("isPublish", data.isPublish);

    const isBlogId = await postBlogId(formData);

    if (isBlogId) {
      setBlogId(isBlogId._id);
      setIsContent(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogFormData = new FormData();

    blogFormData.append("_id", blogId);
    blogFormData.append("title", data.title);
    blogFormData.append("categoryId", data.categoryId);

    if (data.image && data.image instanceof FileList && data.image.length > 0) {
      blogFormData.append("image", data.image[0]);
    }

    blogFormData.append("isPublish", data.isPublish);

    const contentFormData = new FormData();
    contentFormData.append("blogId", blogId);
    contentFormData.append("text", contentData.text);
    contentFormData.append("order", contentData.order);

    for (let i = 0; i < contentData.images.length; i++) {
      contentFormData.append("images", contentData.images[i]);
    }

    if (!contentData.text) {
      setIsText(true);
    }

    const isBlogCreated = await postBlog(blogFormData);
    const isContentCreated = await postContent(contentFormData);

    if (isBlogCreated && isContentCreated) {
      setData({
        title: "",
        categoryId: "",
        image: [],
        isPublish: true,
      });

      setContentData({
        blogId: "",
        text: "",
        order: 0,
        images: [],
      });

      setIsContent(false);

      setFormKey((prevKey) => prevKey + 1);
      setIsText(true);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleAddContent = async () => {
    const contentFormData = new FormData();
    contentFormData.append("blogId", blogId);
    contentFormData.append("text", contentData.text);
    contentFormData.append("order", contentData.order);

    for (let i = 0; i < contentData.images.length; i++) {
      contentFormData.append("images", contentData.images[i]);
    }

    if (!contentData.text) {
      setIsText(true);
    }

    const isContentCreated = await postContent(contentFormData);

    if (isContentCreated) {
      setContentData({
        blogId: blogId,
        text: "",
        order: 0,
        images: [],
      });

      setIsText(true);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <Box
      key={formKey}
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
      <FormControl fullWidth margin="dense">
        <FormLabel htmlFor="title">Title</FormLabel>
        <TextField
          size="small"
          id="title"
          type="text"
          name="title"
          variant="outlined"
          required
          value={data.title}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl fullWidth margin="dense">
        <FormLabel htmlFor="category">Category</FormLabel>
        <TextField
          size="small"
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

      <FormControl fullWidth margin="dense">
        <FormLabel htmlFor="image">Blog Image</FormLabel>
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
            id="image"
            name="image"
            type="file"
            accept="image/*"
            required
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
      </FormControl>

      <FormControl fullWidth margin="dense">
        <FormLabel htmlFor="isPublish">Publish</FormLabel>
        <TextField
          size="small"
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

      {!isContent && (
        <button
          onClick={handleClick}
          type="button"
          className="bg-green-600 text-white font-medium py-2 px-2 rounded-md mt-4 w-full"
        >
          Add Content
        </button>
      )}

      {isContent && (
        <ContentForm
          contentData={contentData}
          handleContentChange={handleContentChange}
          handleImagesChange={handleImagesChange}
          isText={isText}
          fileInputRef={fileInputRef}
          onSubmit={handleSubmit}
          onAddContent={handleAddContent}
        />
      )}
    </Box>
  );
}
