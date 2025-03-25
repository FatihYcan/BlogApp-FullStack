import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import TextEditor from "./TextEditor";
import { useEffect, useRef, useState } from "react";
import useBlogCalls from "../../../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import useCategoryCalls from "../../../hooks/useCategoryCalls";

export default function NewBlogForm() {
  const { postBlog } = useBlogCalls();
  const { getCategories } = useCategoryCalls();
  const { categories } = useSelector((state) => state.category);
  const [formKey, setFormKey] = useState(0);
  const [isContent, setIsContent] = useState(true);

  const [data, setData] = useState({
    title: "",
    content: "",
    categoryId: "",
    images: [],
    showFileName: true,
    isPublish: true,
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

    formData.append("showFileName", data.showFileName);

    formData.append("isPublish", data.isPublish);

    if (!data.content) {
      setIsContent(true);
    }

    const isBlogCreated = await postBlog(formData);

    if (isBlogCreated) {
      setData({
        title: "",
        content: "",
        categoryId: "",
        images: [],
        showFileName: true,
        isPublish: true,
      });

      setFormKey((prevKey) => prevKey + 1);
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

        {!data.images.length && (
          <span className="text-gray-500">En az 1 adet resim ekleyiniz</span>
        )}
        <span className="text-black font-bold">
          Resmin altında açıklama çıkmasını istiyorsanız, 'Show File Name'
          seçeneğini 'Yes' yapın. Açıklama formatı, resim isminize bağlıdır:
          'Görsel - Adı' olması için 'Görsel-Adı' veya 'Görsel - Adı', 'Görsel
          Adı' olması için 'Görsel Adı' olarak adlandırın.
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
        className="bg-green-600 text-white font-medium py-2 px-2 rounded-md mt-4 w-full"
      >
        New Blog
      </button>
    </Box>
  );
}
