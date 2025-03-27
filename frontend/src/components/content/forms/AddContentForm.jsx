import React, { useRef, useState } from "react";
import useBlogCalls from "../../../hooks/useBlogCalls";
import useContentCalls from "../../../hooks/useContentCalls";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import TextEditor from "./TextEditor";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function AddContentForm({ handleContentClose }) {
  const { getSingleBlog } = useBlogCalls();
  const { postContent } = useContentCalls();
  const { _id, username } = useParams();

  const [isContent, setIsContent] = useState(true);

  const fileInputRef = useRef(null);

  const [contentData, setContentData] = useState({
    blogId: _id,
    content: "",
    images: [],
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("blogId", _id);
    formData.append("content", contentData.content);

    for (let i = 0; i < contentData.images.length; i++) {
      formData.append("images", contentData.images[i]);
    }

    if (!contentData.content) {
      setIsContent(true);
    }

    const isContentCreated = await postContent(formData);

    if (isContentCreated) {
      await getSingleBlog(username, _id);
      handleContentClose();
    }
  };

  const handleAddContent = async () => {
    const formData = new FormData();
    formData.append("blogId", _id);
    formData.append("content", contentData.content);

    for (let i = 0; i < contentData.images.length; i++) {
      formData.append("images", contentData.images[i]);
    }

    if (!contentData.content) {
      setIsContent(true);
    }

    const isContentCreated = await postContent(formData);

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
              ref={fileInputRef}
            />
          </Box>
        </FormControl>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            type="button"
            onClick={handleAddContent}
            className="bg-blue-600 text-white font-medium py-2 px-2 rounded-md w-full sm:w-1/3"
          >
            Add Another Content
          </button>

          <button
            type="submit"
            className="bg-green-600 text-white font-medium py-2 px-2 rounded-md w-full sm:w-1/3"
          >
            Save and Finish
          </button>

          <button
            onClick={handleContentClose}
            type="button"
            className="bg-red-600 text-white font-medium py-2 px-2 rounded-md w-full sm:w-1/3"
          >
            Cancel
          </button>
        </Box>
      </Box>
    </Box>
  );
}
