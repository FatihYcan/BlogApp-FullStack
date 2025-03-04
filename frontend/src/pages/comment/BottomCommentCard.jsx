import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import avatar from "../../assets/icons/avatar.png";

export default function BottomCommentCard({ item }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(item);

  const { comment, createdAt, userId } = item;

  return (
    <>
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
      {/* <Button startIcon={<ReplyIcon />} sx={{ color: "text.secondary" }}>
        Reply
      </Button> */}
    </>
  );
}
