import { useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextEditor from "./TextEditor";
import useBlogCalls from "../../../hooks/useBlogCalls";
import useContentCalls from "../../../hooks/useContentCalls";

export default function UpdateContentForm({
  contentData,
  setContentData,
  handleUpdateClose,
}) {
  const { _id, username } = useParams();
  const { getSingleBlog } = useBlogCalls();
  const { putContent } = useContentCalls();

  const [isContent, setIsContent] = useState(false);

  const imagePath = Array.isArray(contentData?.images)
    ? contentData.images
        ?.filter((image) => typeof image === "string")
        ?.map((image) => image) || []
    : [];

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
    if (contentData.images.length === 0) {
      setContentData({ ...contentData, images: e.target.files });
    } else {
      setContentData((prevData) => ({
        ...prevData,
        images: [...prevData.images, ...e.target.files],
      }));
    }
  };

  const handleDeleteImage = (e, image) => {
    e.preventDefault();
    const updatedImages = contentData.images.filter((img) => img !== image);
    setContentData((prevData) => ({
      ...prevData,
      images: updatedImages.length ? updatedImages : [],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("blogId", _id);
    formData.append("content", contentData.content);

    if (contentData.images instanceof FileList) {
      for (let i = 0; i < contentData.images.length; i++) {
        formData.append("images", contentData.images[i]);
      }
    } else if (contentData.images.length === 0) {
      formData.append("images", []);
    } else {
      for (let i = 0; i < contentData.images.length; i++) {
        formData.append("images", contentData.images[i]);
      }
    }

    if (!contentData.content) {
      setIsContent(true);
    }

    const isUpdated = await putContent(contentData._id, formData);

    if (isUpdated) {
      await getSingleBlog(username, _id);
      handleUpdateClose();
    }
  };

  return (
    <Box encType="multipart/form-data" component="form" onSubmit={handleSubmit}>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: 2,
        }}
      >
        <FormControl fullWidth margin="dense">
          <FormLabel htmlFor="content">Content</FormLabel>
          <TextEditor
            value={contentData.content}
            onChange={handleContentChange}
            isContent={isContent}
          />
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
                    src={image}
                    alt={`Uploaded ${index}`}
                    style={{
                      width: "125px",
                      height: "125px",
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
              style={{
                width: "100%",
                cursor: "pointer",
                border: "none",
                outline: "none",
              }}
              onChange={handleImagesChange}
            />
          </Box>
        </FormControl>

        <Box display="flex" justifyContent="center" gap={2}>
          <button
            type="submit"
            className="bg-green-600  text-white font-medium py-2 px-2 rounded-md w-1/2"
          >
            Update Content
          </button>

          <button
            type="button"
            className="bg-red-600  text-white font-medium py-2 px-2 rounded-md w-1/2"
            onClick={handleUpdateClose}
          >
            Cancel
          </button>
        </Box>
      </Box>
    </Box>
  );
}
