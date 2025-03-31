import { useState } from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import DeleteContentModal from "../modal/DeleteContentModal";
import UpdateContentModal from "../modal/UpdateContentModal";
import "../../../assets/styles/detailStyles.css";

export default function ContentCard({
  item,
  handleImageOpen,
  username,
  userId,
}) {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);
  const [contentId, setContentId] = useState("");
  const [contentData, setContentData] = useState({
    _id: item?._id,
    blogId: item?.blogId,
    content: item?.content,
    images: item?.images,
  });

  const handleUpdateClose = () => {
    setUpdateOpen(false);
  };

  const handleUpdateOpen = () => {
    setContentData({
      _id: item?._id,
      blogId: item?.blogId,
      content: item?.content,
      images: item?.images,
    });
    setUpdateOpen(true);
  };

  const handleDeleteOpen = (_id) => {
    setContentId(_id);
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setContentId("");
    setDeleteOpen(false);
  };

  return (
    <>
      <Typography
        component="div"
        gutterBottom
        dangerouslySetInnerHTML={{ __html: item.content }}
        className="editor-content"
      />

      <Grid
        container
        rowSpacing={1}
        columnSpacing={1}
        justifyContent="center"
        sx={{ marginBottom: "1rem" }}
      >
        {item.images?.map((image, imgIndex) => (
          <Grid size={{ xs: 12, sm: 6 }} key={imgIndex}>
            <CardMedia
              component="img"
              alt={`Content Image ${imgIndex + 1}`}
              image={`https://koseyazisi.onrender.com${image.slice(1)}`}
              sx={{
                aspectRatio: "16 / 9",
                objectFit: "initial",
                borderRadius: 1,
                cursor: "pointer",
              }}
              onClick={() =>
                handleImageOpen(`https://koseyazisi.onrender.com${image.slice(1)}`)
              }
            />
          </Grid>
        ))}
      </Grid>

      {username === userId?.username && (
        <Box my={2} display="flex" justifyContent="center" gap={2}>
          <button
            className="bg-green-600 text-white font-medium py-2 px-2 rounded-md"
            onClick={handleUpdateOpen}
          >
            Update Content
          </button>

          <button
            className="bg-red-600 text-white font-medium py-2 px-2 rounded-md"
            onClick={() => handleDeleteOpen(item._id)}
          >
            Delete Content
          </button>
        </Box>
      )}

      <UpdateContentModal
        updateOpen={updateOpen}
        handleUpdateClose={handleUpdateClose}
        contentData={contentData}
        setContentData={setContentData}
      />

      <DeleteContentModal
        deleteOpen={deleteOpen}
        handleDeleteClose={handleDeleteClose}
        contentId={contentId}
        setContentId={setContentId}
      />
    </>
  );
}
