import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReplyIcon from "@mui/icons-material/Reply";
import { useState } from "react";
import avatar from "../../../assets/icons/avatar.png";
import Divider from "@mui/material/Divider";
import BottomCommentCard from "./BottomCommentCard";
import { useParams } from "react-router-dom";
import useBlogCalls from "../../../hooks/useBlogCalls";
import EditCommentForm from "../forms/EditCommentForm";
import BottomCommentForm from "../forms/BottomCommentForm";
import useCommentCalls from "../../../hooks/useCommentCalls";


export default function CommentCard({
  comment,
  createdAt,
  userId,
  _id,
  bottomcomments,
  seeAnswersCardId,
  setSeeAnswersCardId,
  isReplyCardId,
  setIsReplyCardId,
  openMenu,
  setOpenMenu,
  editComment,
  setEditComment,
}) {
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
  const { _id: id, username: name } = useParams();
  const { getSingleBlog } = useBlogCalls();
  const { deleteComment } = useCommentCalls();
  const [openBottomMenu, setOpenBottomMenu] = useState("");
  const [commentData, setCommentData] = useState({ blogId: id, comment: "" });
  const [bottomCommentCard, setBottomCommentCard] = useState(false);
  const [isReplyName, setIsReplyName] = useState("");
  const [editBottomComment, setEditBottomComment] = useState("");
  const [isReplyBottomCardId, setIsReplyBottomCardId] = useState("");

  const { username } = userInfo || {};

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
    } else {
      return `${seconds} saniye önce`;
    }
  }

  const handleAnswersClick = (e) => {
    e.preventDefault();
    if (seeAnswersCardId === _id) {
      setSeeAnswersCardId("");
      setBottomCommentCard(false);
    } else {
      setSeeAnswersCardId(_id);
      setBottomCommentCard(true);
      setIsReplyCardId("");
      setEditComment("");
      setEditBottomComment("");
      setIsReplyBottomCardId("");
    }
  };

  const handleReplyClick = (e, username) => {
    e.preventDefault();
    if (isReplyCardId === _id) {
      setIsReplyCardId("");
      setBottomCommentCard(false);
      setIsReplyName("");
    } else {
      setIsReplyCardId(_id);
      setSeeAnswersCardId("");
      setBottomCommentCard(true);
      setIsReplyName(username);
      setEditComment("");
      setEditBottomComment("");
      setIsReplyBottomCardId("");
    }
  };

  const onMenuClick = (e) => {
    e.preventDefault();
    if (openMenu === _id) {
      setOpenMenu("");
    } else {
      setOpenMenu(_id);
    }
  };

  const handleEditClick = (e, comment_id, comment) => {
    e.preventDefault();
    setEditComment(comment_id);
    setCommentData((prevData) => ({
      ...prevData,
      comment: comment,
    }));
    setIsReplyCardId("");
    setSeeAnswersCardId("");
    setOpenMenu("");
  };

  const handleDeleteClick = async (e, comment_id) => {
    e.preventDefault();
    await deleteComment(comment_id);
    await getSingleBlog(name, id);
    setOpenMenu("");
  };

  return (
    <Box sx={{ width: "75%", margin: "auto" }}>
      <Box sx={{ borderRadius: 2, mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              src={
                userId?.image && userId.image.length > 0
                  ? `http://127.0.0.1:8000${userId.image[0].slice(1)}`
                  : avatar
              }
              sx={{ width: 30, height: 30, mr: 2 }}
            />
            <Typography variant="body1" fontWeight="bold" sx={{ mr: 2 }}>
              {userId.username.charAt(0).toUpperCase() +
                userId.username.slice(1)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {getTimeDifference(new Date(), new Date(createdAt))}
            </Typography>
          </Box>

          {username === userId?.username && (
            <div className="relative">
              <div
                className="border border-black p-1 cursor-pointer dark:border-white"
                onClick={onMenuClick}
              >
                <MoreVertIcon />
              </div>
              {openMenu === _id && (
                <div className="absolute right-0 bg-white rounded-md shadow-lg z-10">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <button
                      onClick={(e) => handleEditClick(e, _id, comment)}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => handleDeleteClick(e, _id)}
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

        {editComment !== _id && (
          <Typography variant="body2" color="text.primary" sx={{ mb: 2 }}>
            {comment}
          </Typography>
        )}

        {editComment === _id && (
          <EditCommentForm
            commentData={commentData}
            setCommentData={setCommentData}
            editComment={editComment}
            setEditComment={setEditComment}
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
              className="flex items-center text-gray-600"
              onClick={(e) => handleReplyClick(e, userId?.username)}
            >
              <ReplyIcon />
              <span>Reply</span>
            </button>
          )}

          {bottomcomments.length > 0 && (
            <span
              className="cursor-pointer text-gray-600"
              onClick={handleAnswersClick}
            >
              {seeAnswersCardId === _id ? "Hide" : "See"}{" "}
              {bottomcomments.length} Answers
            </span>
          )}
        </Box>
      </Box>

      {bottomCommentCard && (
        <Box
          sx={{
            borderRadius: 2,
            mx: 6,
          }}
        >
          {seeAnswersCardId === _id && (
            <>
              {bottomcomments?.map((item) => (
                <BottomCommentCard
                  key={item._id}
                  item={item}
                  openBottomMenu={openBottomMenu}
                  setOpenBottomMenu={setOpenBottomMenu}
                  editBottomComment={editBottomComment}
                  setEditBottomComment={setEditBottomComment}
                  _id={_id}
                  isReplyBottomCardId={isReplyBottomCardId}
                  setIsReplyBottomCardId={setIsReplyBottomCardId}
                />
              ))}
            </>
          )}

          {isReplyCardId === _id && (
            <BottomCommentForm
              isReplyCardId={isReplyCardId}
              setIsReplyCardId={setIsReplyCardId}
              setSeeAnswersCardId={setSeeAnswersCardId}
              isReplyName={isReplyName}
            />
          )}
        </Box>
      )}
      <Divider sx={{ mt: 2 }}></Divider>
    </Box>
  );
}
