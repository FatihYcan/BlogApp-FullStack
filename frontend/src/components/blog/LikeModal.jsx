import * as React from "react";
import { Avatar, AvatarGroup, Box, Modal, Typography } from "@mui/material";

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

export default function LikeModal({ open, handleClose, likes }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {likes.map((like) => (
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
                  src={like.userId.image}
                  sx={{ width: 40, height: 40 }}
                />
              </AvatarGroup>
              <Typography variant="caption">{like.userId.username}</Typography>
            </Box>
          ))}
        </Box>
      </Modal>
    </div>
  );
}
