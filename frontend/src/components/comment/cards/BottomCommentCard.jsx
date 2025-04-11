import { useState } from "react";
import { useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReplyIcon from "@mui/icons-material/Reply";
import CommentBottomForm from "../forms/CommentBottomForm";
import EditBottomCommentForm from "../forms/EditBottomCommentForm";
import useBlogCalls from "../../../hooks/useBlogCalls";
import useBottomCommentCalls from "../../../hooks/useBottomCommentCalls";
import avatar from "../../../assets/icons/avatar.png";
import { useTheme } from "@mui/material/styles";

export default function BottomCommentCard({
  item,
  openBottomMenu,
  setOpenBottomMenu,
  editBottomComment,
  setEditBottomComment,
  _id: commentId,
  isReplyBottomCardId,
  setIsReplyBottomCardId,
}) {
  const { _id: id, username: name } = useParams();
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
  const { getSingleBlog } = useBlogCalls();
  const { deleteBottomComment } = useBottomCommentCalls();
  const { username } = userInfo || {};

  const [bottomCommentData, setBottomCommentData] = useState({
    commentId: commentId,
    bottomComment: "",
  });
  const [isReplyBottomName, setIsReplyBottomName] = useState("");

  const { bottomComment, createdAt, userId, _id } = item;

  function getTimeDifference(date, created) {
    const timeDifference = date - created;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} gün önce`;
    } else if (hours > 0) {
      return `${hours} saat önce`;
    } else if (minutes > 0) {
      return `${minutes} dakika önce`;
    }
    return `${seconds} saniye önce`;
  }

  const onBottomtMenuClick = (e) => {
    e.preventDefault();
    setOpenBottomMenu(openBottomMenu === _id ? "" : _id);
  };

  const handleBottomEditClick = (e, bottomComment_id, bottomComment) => {
    e.preventDefault();
    setEditBottomComment(bottomComment_id);
    setBottomCommentData((prevData) => ({
      ...prevData,
      bottomComment: bottomComment,
    }));
    setOpenBottomMenu("");
    setIsReplyBottomCardId();
  };

  const handleBottomDeleteClick = async (e, delete_id) => {
    e.preventDefault();
    await deleteBottomComment(delete_id);
    await getSingleBlog(name, id);
    setIsReplyBottomCardId();
  };

  const handleReplyBottomClick = (e, username) => {
    e.preventDefault();
    if (isReplyBottomCardId === _id) {
      setIsReplyBottomCardId("");
      setIsReplyBottomName("");
    } else {
      setIsReplyBottomCardId(_id);
      setIsReplyBottomName(username);
      setEditBottomComment("");
    }
  };

  return (
    <Box sx={{ borderRadius: 2, mb: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flex: 1,
           
          }}
        >
          <Avatar
            src={
              userId?.image && userId.image.length > 0
                ? userId.image[0]
                : avatar
            }
            sx={{ width: 30, height: 30, mr: 1 }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
             
            }}
          >
            <Typography variant="body1" fontWeight="bold" sx={{ mr: 2 }}>
              {userId.username.charAt(0).toUpperCase() +
                userId.username.slice(1)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {getTimeDifference(new Date(), new Date(createdAt))}
            </Typography>
          </Box>
        </Box>

        {username === userId?.username && (
          <div className="relative" style={{ marginLeft: "auto" }}>
            <div
              className="border border-black p-1 cursor-pointer dark:border-white"
              onClick={onBottomtMenuClick}
            >
              <MoreVertIcon />
            </div>

            {openBottomMenu === _id && (
              <div className="absolute right-0 bg-white rounded-md shadow-lg z-10">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <button
                    onClick={(e) =>
                      handleBottomEditClick(e, _id, bottomComment)
                    }
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => handleBottomDeleteClick(e, _id)}
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </Box>

      {editBottomComment !== _id && (
        <Typography variant="body2" color="text.primary" sx={{ mb: 1 }}>
          {bottomComment}
        </Typography>
      )}

      {isReplyBottomCardId === _id && (
        <CommentBottomForm
          commentId={commentId}
          setIsReplyBottomCardId={setIsReplyBottomCardId}
          isReplyBottomName={isReplyBottomName}
        />
      )}

      {editBottomComment === _id && (
        <EditBottomCommentForm
          bottomCommentData={bottomCommentData}
          setBottomCommentData={setBottomCommentData}
          editBottomComment={editBottomComment}
          setEditBottomComment={setEditBottomComment}
          commentId={commentId}
        />
      )}

      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
        }}
      >
        {username && (
          <button
            className="flex items-center text-gray-600 mt-1"
            onClick={(e) => handleReplyBottomClick(e, userId?.username)}
          >
            <ReplyIcon />
            <span>Reply</span>
          </button>
        )}
      </Box>
    </Box>
  );
}
