import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useBlogCalls from "../../../hooks/useBlogCalls";
import { useNavigate, useParams } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "80vh",
  overflowY: "auto",
};

export default function DeleteModal({ deleteOpen, handleDeleteClose }) {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { deleteBlog } = useBlogCalls();

  const handleDeleteBlog = async () => {
    await deleteBlog(_id);
    sessionStorage.removeItem("selectedMyCategory");
    sessionStorage.removeItem("searchMyBlog");
    navigate("/my-blogs");
  };

  return (
    <div>
      <Modal
        open={deleteOpen}
        onClose={handleDeleteClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete this blog?
          </Typography>
          <Box my={2} display="flex" justifyContent="center" gap={2}>
            <button
              className="bg-green-600  text-white font-medium py-2 px-2 rounded-md"
              onClick={handleDeleteBlog}
            >
              Delete Blog
            </button>

            <button
              className="bg-red-600  text-white font-medium py-2 px-2 rounded-md"
              onClick={handleDeleteClose}
            >
              Cancel
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
