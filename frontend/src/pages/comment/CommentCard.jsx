import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReplyIcon from "@mui/icons-material/Reply";
import { useState } from "react";
import avatar from "../../assets/icons/avatar.png";
import Divider from "@mui/material/Divider";
import BottomCommentCard from "./BottomCommentCard";

export default function CommentCard({
  comment,
  createdAt,
  userId,
  _id,
  bottomcomments,
  seeAnswersCard,
  setSeeAnswersCard,
  setIsReplyId,
  isReplyId,
  isReplyName,
  setIsReplyName,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAnswersClick = (e) => {
    e.preventDefault();
    if (seeAnswersCard === _id) {
      setSeeAnswersCard("");
    } else {
      setSeeAnswersCard(_id);
    }
  };

  const handleReplyClick = (e, comment_id, comment_name) => {
    e.preventDefault();
    if (isReplyId === _id && isReplyName === userId.username) {
      setIsReplyId("");
      setIsReplyName("");
    } else {
      setIsReplyId(comment_id);
      setIsReplyName(comment_name);
    }
  };

  // console.log("_id", _id);
  // console.log("showReplyCard", showReplyCard);
  // console.log(_id === seeAnswersCard);

  return (
    <Box sx={{ width: "75%", margin: "auto" }}>
      <Box sx={{ borderRadius: 2, mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src={
                userId?.image && userId.image.length > 0
                  ? `http://127.0.0.1:8000${userId.image[0].slice(1)}`
                  : avatar
              }
              sx={{ mr: 2 }}
            />
            <Typography variant="body1" fontWeight="bold" sx={{ mr: 2 }}>
              {userId?.username}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {new Date(createdAt).toLocaleDateString("tr-TR")}
            </Typography>
          </Box>
          <div className="border border-black p-1 cursor-pointer dark:border-white ">
            <MoreVertIcon onClick={handleClick} />
          </div>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Edit</MenuItem>
            <MenuItem onClick={handleClose}>Remove</MenuItem>
          </Menu>
        </Box>
        <Typography variant="body2" color="text.primary" sx={{ mb: 2 }}>
          {comment}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            // height: "50px",
            alignItems: "center",
            // justifyContent: "space-evenly",
          }}
        >
          <button
            className="flex items-center text-gray-600"
            onClick={(e) => handleReplyClick(e, _id, userId.username)}
          >
            <ReplyIcon />
            <span>Reply</span>
          </button>

          {bottomcomments.length > 0 && (
            <span
              className="cursor-pointer text-gray-600"
              onClick={handleAnswersClick}
            >
              {seeAnswersCard === _id ? "Hide" : "See"} {bottomcomments.length}{" "}
              Answers
            </span>
          )}
        </Box>
      </Box>

      {seeAnswersCard === _id && (
        <Box
          sx={{
            borderRadius: 2,
            mx: 6,
          }}
        >
          {bottomcomments?.map((item) => (
            <BottomCommentCard key={item._id} item={item} />
          ))}
        </Box>
      )}
      <Divider sx={{ mt: 2 }}></Divider>
    </Box>
  );
}
