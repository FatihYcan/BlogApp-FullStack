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
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import useBlogCalls from "../../../hooks/useBlogCalls";
import useBottomCommentCalls from "../../../hooks/useBottomCommentCalls";

export default function CommentBottomForm({
  setIsReplyBottomCardId,
  commentId,
  isReplyBottomName,
}) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { _id, username } = useParams();
  const { getSingleBlog } = useBlogCalls();
  const { postBottomComment } = useBottomCommentCalls();

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [bottomCommentData, setBottomCommentData] = useState({
    commentId: commentId,
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
    setIsReplyBottomCardId(commentId);
    setIsReplyBottomCardId("");
  };

  const handleClose = (e) => {
    e.preventDefault();
    setIsReplyBottomCardId("");
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
        <Box
          sx={{
            position: "relative",
            border: "1px solid rgba(0, 0, 0, 0.23)",
            borderRadius: "4px",
            padding: isSmallScreen ? "8px 8px 40px 8px" : "8px 40px 8px 8px",
            minHeight: isSmallScreen ? "50px" : "auto",
          }}
        >
          <TextField
            size="small"
            id="comment"
            type="text"
            name="comment"
            variant="standard"
            placeholder={
              isReplyBottomName ? `reply to ${isReplyBottomName}` : ""
            }
            required
            multiline
            fullWidth
            value={bottomCommentData.comment}
            onChange={handleChange}
            sx={{
              "& .MuiInputBase-root": {
                padding: 0,
                "&:before, &:after": {
                  borderBottom: "none !important",
                },
              },
              "& .MuiInputBase-input": {
                padding: 0,
              },
            }}
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
        </Box>

        {showEmojiPicker && (
          <Box
            sx={{
              position: "absolute",
              zIndex: 1,
              ...(isSmallScreen
                ? {
                    left: "50%",
                    transform: "translateX(-50%)",
                    bottom: "100%",
                    marginTop: 1,
                  }
                : {
                    right: 0,
                    top: 40,
                  }),
            }}
          >
            <Picker data={data} onEmojiSelect={handleEmojiSelect} />
          </Box>
        )}
      </FormControl>
    </Box>
  );
}
