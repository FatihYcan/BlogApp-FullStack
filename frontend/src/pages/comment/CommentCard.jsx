import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReplyIcon from "@mui/icons-material/Reply";
import { useState } from "react";
import Button from "@mui/material/Button";
import avatar from "../../assets/icons/avatar.png";
import Divider from "@mui/material/Divider";

export default function CommentCard({
  comment,
  createdAt,
  userId,
  _id,
  bottomcomments,
  setIsReply,
  setShowReplyCard,
  showReplyCard,
  setSeeAnswers,
  seeAnswers,
  setSeeAnswersCard,
  seeAnswersCard,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleReplyClick = (e, _id) => {
    e.preventDefault();
    setIsReply(true);
    // setShowReplyCard(_id);
  };

  const handleAnswersClick = (e, _id) => {
    e.preventDefault();
    setShowReplyCard(_id);
  };

  const handleAnswers = (e, comment_id) => {
    e.preventDefault();
    setSeeAnswers(true);
    setSeeAnswersCard(comment_id);
  };

  // console.log("_id", _id);
  // console.log("showReplyCard", showReplyCard);

  console.log(_id === seeAnswersCard);

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
          <Button
            startIcon={<ReplyIcon />}
            sx={{ color: "text.secondary" }}
            onClick={(e) => handleReplyClick(e, _id)}
          >
            Reply
          </Button>

          {/* <Button
          sx={{ color: "text.secondary" }}
          onClick={(e) => handleAnswersClick(e, _id)}
          >
          See Answers
          </Button> */}

          <span
            className="cursor-pointer text-gray-600"
            onClick={(e) => handleAnswers(e, _id)}
          >
            See {bottomcomments.length} Answers
          </span>
        </Box>
      </Box>

      {seeAnswers && _id === seeAnswersCard && (
        <Box
          sx={{
            borderRadius: 2,
            mx: 6,
          }}
        >
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
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                sx={{ mr: 2 }}
              />
              <Typography variant="body1" fontWeight="bold" sx={{ mr: 2 }}>
                Jese Leos
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Feb. 12, 2022
              </Typography>
            </Box>
            <div className="border border-black p-1 cursor-pointer dark:border-white ">
              <MoreVertIcon onClick={handleClick} />
            </div>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Much appreciated! Glad you liked it ☺️
          </Typography>
          <Button startIcon={<ReplyIcon />} sx={{ color: "text.secondary" }}>
            Reply
          </Button>
        </Box>
      )}
      <Divider sx={{ mt: 2 }}></Divider>
    </Box>
  );
}
