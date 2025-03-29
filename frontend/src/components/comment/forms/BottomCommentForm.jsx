import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import useBlogCalls from "../../../hooks/useBlogCalls";
import useBottomCommentCalls from "../../../hooks/useBottomCommentCalls";

export default function BottomCommentForm({
  isReplyCardId,
  setIsReplyCardId,
  setSeeAnswersCardId,
  isReplyName,
}) {
  const { _id, username } = useParams();
  const { getSingleBlog } = useBlogCalls();
  const { postBottomComment } = useBottomCommentCalls();

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [bottomCommentData, setBottomCommentData] = useState({
    commentId: isReplyCardId,
    comment: "",
  });

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
    await postBottomComment(bottomCommentData);
    await getSingleBlog(username, _id);
    setBottomCommentData({ blogId: _id, comment: "" });
    setSeeAnswersCardId(isReplyCardId);
    setIsReplyCardId("");
  };

  const handleClose = (e) => {
    e.preventDefault();
    setIsReplyCardId("");
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
      }}
    >
      <FormControl fullWidth margin="dense" sx={{ position: "relative" }}>
        <TextField
          size="small"
          id="comment"
          type="text"
          name="comment"
          variant="outlined"
          placeholder={isReplyName ? `reply to ${isReplyName}` : ""}
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
