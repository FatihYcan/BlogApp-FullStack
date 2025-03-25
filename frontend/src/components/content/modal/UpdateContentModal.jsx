import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import UpdateContentForm from "../forms/UpdateContentForm";

export default function UpdateContentModal({
  updateOpen,
  handleUpdateClose,
  contentData,
  setContentData,
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
      width: 870,
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
          <UpdateContentForm
            contentData={contentData}
            setContentData={setContentData}
            handleUpdateClose={handleUpdateClose}
          />
        </Box>
      </Modal>
    </div>
  );
}
