import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import data from "@emoji-mart/data";
import FormControl from "@mui/material/FormControl";
import Picker from "@emoji-mart/react";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CommentForm({
  isReplyId,
  isReplyName,
  setIsReplyId,
  setIsReplyName,
  isReplyBottomId,
  isReplyBottomName,
  setIsReplyBottomId,
  setIsReplyBottomName,
  editComment,
  setEditComment,
  editCommentId,
  setEditCommentId,
  editBottomComment,
  setEditBottomComment,
  editBottomCommentId,
  setEditBottomCommentId,
  topCommentId,
}) {
  const { _id, username } = useParams();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const {
    postComment,
    getSingleBlog,
    postBottomComment,
    putComment,
    putBottomComment,
  } = useBlogCalls();
  const [commentData, setCommentData] = useState({ blogId: _id, comment: "" });
  const [bottomCommentData, setBottomCommentData] = useState({
    commentId: "",
    comment: "",
  });

  useEffect(() => {
    if (isReplyId) {
      setBottomCommentData({ commentId: isReplyId, comment: "" });
      setCommentData({ blogId: _id, comment: "" });
    } else if (isReplyBottomId) {
      setBottomCommentData({ commentId: isReplyBottomId, comment: "" });
      setCommentData({ blogId: _id, comment: "" });
    } else if (editComment) {
      setCommentData({ blogId: _id, comment: editComment });
      setBottomCommentData({ commentId: "", comment: "" });
    } else if (editBottomComment) {
      setBottomCommentData({
        commentId: topCommentId,
        comment: editBottomComment,
      });
      setCommentData({ blogId: _id, comment: "" });
    } else {
      setBottomCommentData({ commentId: "", comment: "" });
    }
  }, [isReplyId, isReplyBottomId, editComment, editBottomComment]);

  const handleChange = (e) => {
    if (isReplyId) {
      setBottomCommentData({
        ...bottomCommentData,
        [e.target.name]: e.target.value,
      });
    } else if (isReplyBottomId) {
      setBottomCommentData({
        ...bottomCommentData,
        [e.target.name]: e.target.value,
      });
    } else if (editBottomComment) {
      setBottomCommentData({
        ...bottomCommentData,
        [e.target.name]: e.target.value,
      });
    } else {
      setCommentData({ ...commentData, [e.target.name]: e.target.value });
    }
  };

  const handleEmojiSelect = (emoji) => {
    if (isReplyId) {
      setBottomCommentData((prevData) => ({
        ...prevData,
        comment: prevData.comment + emoji.native,
      }));
    } else if (isReplyBottomId) {
      setBottomCommentData((prevData) => ({
        ...prevData,
        comment: prevData.comment + emoji.native,
      }));
    } else if (editBottomComment) {
      setBottomCommentData((prevData) => ({
        ...prevData,
        comment: prevData.comment + emoji.native,
      }));
    } else {
      setCommentData((prevData) => ({
        ...prevData,
        comment: prevData.comment + emoji.native,
      }));
    }
    setShowEmojiPicker(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isReplyId) {
      await postBottomComment(bottomCommentData);
      setBottomCommentData({ commentId: "", comment: "" });
      setIsReplyId("");
      setIsReplyName("");
    } else if (isReplyBottomId) {
      await postBottomComment(bottomCommentData);
      setBottomCommentData({ commentId: "", comment: "" });
      setIsReplyBottomId("");
      setIsReplyBottomName("");
    } else if (editComment) {
      await putComment(editCommentId, commentData);
      setEditComment("");
      setEditCommentId("");
      setCommentData({ blogId: _id, comment: "" });
    } else if (editBottomComment) {
      await putBottomComment(editBottomCommentId, bottomCommentData);
      setEditBottomComment("");
      setEditBottomCommentId("");
      setBottomCommentData({ commentId: "", comment: "" });
    } else {
      await postComment(commentData);
      setCommentData({ blogId: _id, comment: "" });
    }
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
          placeholder={
            isReplyName
              ? `to answer ${isReplyName}`
              : isReplyBottomName
              ? `to answer ${isReplyBottomName}`
              : "to comment"
          }
          variant="outlined"
          required
          multiline
          value={
            isReplyId
              ? bottomCommentData.comment
              : isReplyBottomId
              ? bottomCommentData.comment
              : editComment
              ? commentData.comment
              : editBottomComment
              ? bottomCommentData.comment
              : commentData.comment
          }
          onChange={handleChange}
        />
        <Button
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          sx={{ position: "absolute", right: 0, bottom: 0 }}
        >
          😀
        </Button>
        {showEmojiPicker && (
          <Box sx={{ position: "absolute", zIndex: 1, right: 0, top: 60 }}>
            <Picker data={data} onEmojiSelect={handleEmojiSelect} />
          </Box>
        )}
      </FormControl>
      <button
        type="submit"
        className="bg-green-600  text-white font-medium py-2 px-2 rounded-md w-2/4 m-auto uppercase"
      >
        {isReplyId
          ? "Add Answer"
          : isReplyBottomId
          ? "Add Answer"
          : editComment
          ? "Edit Comment"
          : editBottomComment
          ? "Edit Bottom Comment"
          : "Add Comment"}
      </button>
    </Box>
  );
}
