import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import useBlogCalls from "../../../hooks/useBlogCalls";
import useCommentCalls from "../../../hooks/useCommentCalls";

export default function CommentForm() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { _id, username } = useParams();
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
  const { getSingleBlog } = useBlogCalls();
  const { postComment } = useCommentCalls();

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [commentData, setCommentData] = useState({ blogId: _id, comment: "" });

  const IsUserInfo = Object.keys(userInfo).length === 0;

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
    await postComment(commentData);
    setCommentData({ blogId: _id, comment: "" });
    await getSingleBlog(username, _id);
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
      <FormControl
        fullWidth
        margin="dense"
        sx={{ width: "75%", margin: "auto", position: "relative" }}
      >
        <FormLabel htmlFor="comment">Comment</FormLabel>
        <TextField
          size="small"
          id="comment"
          type="text"
          name="comment"
          variant="outlined"
          required
          multiline
          disabled={IsUserInfo}
          value={
            IsUserInfo
              ? "Yorum yapabilmek için giriş yapmalısınız."
              : commentData.comment
          }
          onChange={handleChange}
        />

        {!IsUserInfo && (
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
        )}

        {showEmojiPicker && (
          <Box
            sx={{
              position: "absolute",
              zIndex: 1,
              ...(isSmallScreen
                ? {
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: "100%",
                    marginTop: 1,
                  }
                : {
                    right: 0,
                    top: 60,
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
