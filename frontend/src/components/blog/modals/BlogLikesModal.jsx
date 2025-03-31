import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import avatar from "../../../assets/icons/avatar.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: "400px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: "10px 10px 0 10px",
};

export default function BlogLikesModal({ likeOpen, handleLikeClose, likes }) {
  return (
    <div>
      <Modal
        open={likeOpen}
        onClose={handleLikeClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {likes?.map((like) => (
            <Box
              key={like._id}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                marginBottom: "10px",
              }}
            >
              <AvatarGroup>
                <Avatar
                  key={like._id}
                  alt={like.userId.username}
                  src={
                    like.userId.image && like.userId.image.length > 0
                      ? `https://koseyazisi.onrender.com${like.userId.image[0].slice(1)}`
                      : avatar
                  }
                  sx={{ width: 40, height: 40 }}
                />
              </AvatarGroup>
              <Typography variant="caption">
                {like?.userId?.username.charAt(0).toUpperCase() +
                  like?.userId?.username.slice(1)}
              </Typography>
            </Box>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
