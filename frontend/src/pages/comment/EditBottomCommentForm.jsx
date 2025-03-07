import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useBlogCalls from "../../hooks/useBlogCalls";

export default function EditBottomCommentForm({
  bottomCommentData,
  setBottomCommentData,
  editBottomComment,
  setEditBottomComment,
  commentId,
}) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { _id, username } = useParams();
  const { getSingleBlog, putBottomComment } = useBlogCalls();

  console.log(commentId);

  const handleChange = (e) => {
    setBottomCommentData({
      ...bottomCommentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmojiSelect = (emoji) => {
    setBottomCommentData((prevData) => ({
      ...prevData,
      comment: prevData.comment + emoji.native,
    }));
    setShowEmojiPicker(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await putBottomComment(editBottomComment, bottomCommentData);
    await getSingleBlog(username, _id);
    setEditBottomComment("");
    setBottomCommentData({ commentId: commentId, comment: "" });
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
          value={bottomCommentData.comment}
          onChange={handleChange}
        />
        <Box
          sx={{
            position: "absolute",
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Button
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            sx={{ minWidth: "auto", padding: "6px" }}
          >
            😀
          </Button>
          <Button type="submit" sx={{ minWidth: "auto", padding: "6px" }}>
            <SendIcon />
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
