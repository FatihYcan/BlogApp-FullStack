import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "800px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function ImageBlogModal({
  imageOpen,
  handleImageClose,
  selectedImage,
}) {
  const optimizeImage = (url) => {
    if (!url) return "";
    return url.replace("/upload/", "/upload/q_auto,f_auto/");
  };

  return (
    <div>
      <Modal
        open={imageOpen}
        onClose={handleImageClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMedia
            component="img"
            alt="selectedImage"
            image={optimizeImage(selectedImage)}
            sx={{
              aspectRatio: "16 / 9",
              objectFit: "initial",
              borderRadius: 1,
            }}
          />
        </Box>
      </Modal>
    </div>
  );
}
