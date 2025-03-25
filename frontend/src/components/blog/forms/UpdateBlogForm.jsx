import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import useBlogCalls from "../../../hooks/useBlogCalls";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import useCategoryCalls from "../../../hooks/useCategoryCalls";
import ContentForm from "./ContentForm";
import useContentCalls from "../../../hooks/useContentCalls";
import CircularProgress from "@mui/material/CircularProgress";

export default function UpdateBlogForm({
  data,
  setData,
  handleUpdateClose,
  setIsContentForm,
  isContentForm,
}) {
  const { putBlog, getSingleBlog } = useBlogCalls();
  const { getCategories } = useCategoryCalls();
  const { postContent } = useContentCalls();
  const { _id, username } = useParams();
  const { categories } = useSelector((state) => state.category);
  const [newImage, setNewImage] = useState("");
  const [loading, setLoading] = useState(true);

  const [isContent, setIsContent] = useState(true);

  const fileInputRef = useRef(null);

  const [contentData, setContentData] = useState({
    blogId: _id,
    content: "",
    images: [],
  });

  useEffect(() => {
    getCategories("categories");
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setNewImage(e.target.files[0]);
    }
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

  const createBlogFormData = () => {
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
    return formData;
  };

  const createContentFormData = () => {
    const formData = new FormData();
    formData.append("blogId", _id);
    formData.append("content", contentData.content);

    for (let i = 0; i < contentData.images.length; i++) {
      formData.append("images", contentData.images[i]);
    }

    return formData;
  };

  const handleUpdateBlog = async (e) => {
    e.preventDefault();
    const formData = createBlogFormData();
    const isUpdated = await putBlog(_id, formData);

    if (isUpdated) {
      await getSingleBlog(username, _id);
      handleUpdateClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogFormData = createBlogFormData();
    const contentFormData = createContentFormData();

    if (!contentData.content) {
      setIsContent(true);
    }

    const isUpdated = await putBlog(_id, blogFormData);
    const isContentCreated = await postContent(contentFormData);

    if (isUpdated && isContentCreated) {
      await getSingleBlog(username, _id);
      handleUpdateClose();
      setIsContentForm(false);
    }
  };

  const handleAddContent = async () => {
    const contentFormData = createContentFormData();

    if (!contentData.content) {
      setIsContent(true);
    }

    const isContentCreated = await postContent(contentFormData);

    if (isContentCreated) {
      setContentData({
        blogId: _id,
        content: "",
        images: [],
      });
      await getSingleBlog(username, _id);
      setIsContent(true);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
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

    const isUpdated = await putBlog(_id, formData);

    if (isUpdated) {
      await getSingleBlog(username, _id);
      setIsContentForm(true);
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
          {!isContentForm && (
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
                        src={`http://127.0.0.1:8000${data.image[0].slice(1)}`}
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
              <button
                type="button"
                className="bg-green-600  text-white font-medium py-2 px-2 rounded-md mt-4 w-full uppercase"
                onClick={handleUpdateBlog}
              >
                Update Blog
              </button>
              <button
                onClick={handleClick}
                type="button"
                className="bg-blue-600 text-white font-medium py-2 px-2 rounded-md mt-4 w-full uppercase"
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
              handleUpdateClose={handleUpdateClose}
              onSubmit={handleSubmit}
              onAddContent={handleAddContent}
              isContentForm={isContentForm}
            />
          )}
        </>
      )}
    </Box>
  );
}
