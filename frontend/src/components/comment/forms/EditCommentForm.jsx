import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useBlogCalls from "../../../hooks/useBlogCalls";
import CloseIcon from "@mui/icons-material/Close";

export default function EditCommentForm({
  commentData,
  setCommentData,
  editComment,
  setEditComment,
}) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { _id, username } = useParams();
  const { getSingleBlog, putComment } = useBlogCalls();

  const handleChange = (e) => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value });
  };

  const handleEmojiSelect = (emoji) => {
    setCommentData((prevData) => ({
      ...prevData,
      comment: prevData.comment + emoji.native,
    }));
    setShowEmojiPicker(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await putComment(editComment, commentData);
    await getSingleBlog(username, _id);
    setEditComment("");
    setCommentData({ blogId: _id, comment: "" });
  };

  const handleClose = (e) => {
    e.preventDefault();
    setEditComment("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: 2,
        mb: 2,
      }}
    >
      <FormControl fullWidth margin="dense" sx={{ position: "relative" }}>
        <TextField
          size="small"
          id="comment"
          type="text"
          name="comment"
          variant="outlined"
          required
          multiline
          value={commentData.comment}
          onChange={handleChange}
        />
        <Box
          sx={{
            position: "absolute",
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            sx={{ minWidth: "auto" }}
          >
            😀
          </Button>
          <Button type="submit" sx={{ minWidth: "auto" }}>
            <SendIcon />
          </Button>
          <Button sx={{ minWidth: "auto" }} onClick={handleClose}>
            <CloseIcon />
          </Button>
        </Box>

        {showEmojiPicker && (
          <Box sx={{ position: "absolute", zIndex: 1, right: 0, top: 35 }}>
            <Picker data={data} onEmojiSelect={handleEmojiSelect} />
          </Box>
        )}
      </FormControl>
    </Box>
  );
}
