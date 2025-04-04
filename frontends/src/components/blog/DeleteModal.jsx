import Modal from "@mui/material/Modal";
import { Box, Button, Typography } from "@mui/material";
import useBlogCalls from "../../hooks/useBlogCalls";
import { useNavigate, useParams } from "react-router-dom";

export default function DeleteModal({
  open,
  handleClose,
  deletingCommentId,
  setDeletingCommentId,
}) {
  const { _id } = useParams();
  const { deleteBlogs, deleteComments, getDetails } = useBlogCalls();
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (deletingCommentId) {
      await deleteComments(deletingCommentId);
      getDetails({ id: _id });
      setDeletingCommentId(null);
      handleClose();
    } else {
      await deleteBlogs(_id);
      navigate(-1);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: 300,
          bgcolor: "background.paper",
          p: 2,
          textAlign: "center",
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {deletingCommentId
            ? "Are you sure you want to delete this comment?"
            : "Are you sure you want to delete this blog?"}
        </Typography>
        <Box marginTop={2}>
          <Button
            onClick={handleClose}
            sx={{ marginRight: 2, backgroundColor: "blue" }}
            size="small"
            variant="contained"
          >
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            variant="contained"
            color="error"
            size="small"
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
