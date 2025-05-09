import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import UpdateBlogForm from "../forms/UpdateBlogForm";

export default function UpdateBlogModal({
  updateOpen,
  handleUpdateClose,
  setData,
  data,
}) {
  const style = (theme) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    maxHeight: "90vh",
    overflowY: "auto",
    width: "95%",
    [theme.breakpoints.up("md")]: {
      width: 400,
    },
  });

  return (
    <div>
      <Modal
        open={updateOpen}
        onClose={handleUpdateClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <UpdateBlogForm
            data={data}
            setData={setData}
            handleUpdateClose={handleUpdateClose}
          />
        </Box>
      </Modal>
    </div>
  );
}
