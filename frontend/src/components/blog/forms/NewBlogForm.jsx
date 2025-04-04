import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import ContentForm from "../../content/forms/ContentForm";
import useBlogCalls from "../../../hooks/useBlogCalls";
import useCategoryCalls from "../../../hooks/useCategoryCalls";
import useContentCalls from "../../../hooks/useContentCalls";

export default function NewBlogForm() {
  const { categories } = useSelector((state) => state.category);

  const { postBlog, postBlogId } = useBlogCalls();
  const { postContent } = useContentCalls();
  const { getCategories } = useCategoryCalls();

  const fileInputRef = useRef(null);

  const [formKey, setFormKey] = useState(0);
  const [blogId, setBlogId] = useState("");
  const [isContentForm, setIsContentForm] = useState(false);
  const [isContent, setIsContent] = useState(true);

  const [data, setData] = useState({
    title: "",
    categoryId: "",
    image: [],
    isPublish: true,
  });

  const [contentData, setContentData] = useState({
    blogId: blogId,
    content: "",
    images: [],
  });

  const [errors, setErrors] = useState({
    title: false,
    categoryId: false,
    image: false,
  });

  useEffect(() => {
    getCategories("categories");
    sessionStorage.removeItem("selectedCategory");
    sessionStorage.removeItem("searchBlog");
    sessionStorage.removeItem("searchUser");
    sessionStorage.removeItem("page");
    sessionStorage.removeItem("selectedMyCategory");
    sessionStorage.removeItem("searchMyBlog");
    sessionStorage.removeItem("myPage");
    sessionStorage.removeItem("userPage");
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setData({ ...data, image: e.currentTarget.files });
  };

  const handleContentChange = (content) => {
    const plainContent = content.replace(/<[^>]+>/g, "").trim();
    if (plainContent.length === 0) {
      setIsContent(true);
      setContentData({ ...contentData, content: "" });
    } else {
      setIsContent(false);
      setContentData({ ...contentData, content });
    }
  };

  const handleImagesChange = (e) => {
    setContentData({ ...contentData, images: e.currentTarget.files });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    let newErrors = {
      title: !data.title.trim(),
      categoryId: !data.categoryId,
      image: !(data.image && data.image.length > 0),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

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
      setIsContentForm(true);
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
    contentFormData.append("content", contentData.content);

    for (let i = 0; i < contentData.images.length; i++) {
      contentFormData.append("images", contentData.images[i]);
    }

    if (!contentData.content) {
      setIsContent(true);
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
        content: "",
        images: [],
      });

      setIsContentForm(false);
      setFormKey((prevKey) => prevKey + 1);
      setIsContent(true);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleAddContent = async () => {
    const contentFormData = new FormData();
    contentFormData.append("blogId", blogId);
    contentFormData.append("content", contentData.content);

    for (let i = 0; i < contentData.images.length; i++) {
      contentFormData.append("images", contentData.images[i]);
    }

    if (!contentData.content) {
      setIsContent(true);
    }

    const isContentCreated = await postContent(contentFormData);

    if (isContentCreated) {
      setContentData({
        blogId: blogId,
        content: "",
        images: [],
      });

      setIsContent(true);

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
        marginBottom: 4,
      }}
    >
      {!isContentForm && (
        <>
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
              helperText={errors.title ? "Bu alan zorunludur" : ""}
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
              helperText={errors.categoryId ? "Bu alan zorunludur" : ""}
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
            {errors.image && (
              <p style={{ color: "red", fontSize: "14px" }}>
                Bu alan zorunludur
              </p>
            )}
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

          <button
            onClick={handleClick}
            type="button"
            className="bg-green-600 text-white font-medium py-2 px-2 rounded-md mt-4 w-full"
          >
            Add Content
          </button>
        </>
      )}

      {isContentForm && (
        <ContentForm
          contentData={contentData}
          handleContentChange={handleContentChange}
          handleImagesChange={handleImagesChange}
          isContent={isContent}
          fileInputRef={fileInputRef}
          onSubmit={handleSubmit}
          onAddContent={handleAddContent}
        />
      )}
    </Box>
  );
}
