import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReplyIcon from "@mui/icons-material/Reply";
import { useState } from "react";
import avatar from "../../assets/icons/avatar.png";
import Divider from "@mui/material/Divider";
import { useParams } from "react-router-dom";
import useBlogCalls from "../../hooks/useBlogCalls";

export default function BottomCommentCard({
  item,
  isBottomCommentOpen,
  onBottomCommentMenuClick,
}) {
  const { _id: id, username: name } = useParams();
  const { getSingleBlog, deleteBottomComment } = useBlogCalls();

  const { comment, createdAt, userId, _id } = item;

  const handleBottomCommentDeleteClick = async (e, delete_id) => {
    e.preventDefault();
    await deleteBottomComment(delete_id);
    await getSingleBlog(name, id);
    onBottomCommentMenuClick();
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
            {userId?.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {new Date(createdAt).toLocaleDateString("tr-TR")}
          </Typography>
        </Box>
        <div className="relative">
          <div
            className="border border-black p-1 cursor-pointer dark:border-white"
            onClick={onBottomCommentMenuClick}
          >
            <MoreVertIcon />
          </div>
          {isBottomCommentOpen && (
            <div className="absolute right-0 bg-white rounded-md shadow-lg z-10">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <button
                  // onClick={(e) => handleEditClick(e, _id, comment)}
                  className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Edit
                </button>
                <button
                  onClick={(e) => handleBottomCommentDeleteClick(e, _id)}
                  className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </Box>
      <Typography variant="body2" color="text.primary" sx={{ mb: 2 }}>
        {comment}
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
        }}
      >
        {/* <button
            className="flex items-center text-gray-600"
            onClick={(e) => handleReplyClick(e, _id, userId.username)}
          >
            <ReplyIcon />
            <span>Reply</span>
          </button> */}
      </Box>
    </Box>
  );
}
