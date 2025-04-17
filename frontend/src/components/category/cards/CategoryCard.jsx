import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import UpdateCategoryModal from "../modals/UpdateCategoryModal";
import DeleteCategoryModal from "../modals/DeleteCategoryModal";

const SyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",
  backgroundColor: (theme.vars || theme).palette.background.paper,
  "&:hover": {
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
}));

const SyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,
  "&:last-child": {
    paddingBottom: 16,
  },
});

export default function CategoryCard({ name, _id }) {
  const [updateOpen, setUpdateOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [data, setData] = useState({
    name: name,
    _id: _id,
  });

  const handleUpdateClose = () => setUpdateOpen(false);
  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);

  const handleUpdateOpen = () => {
    setData({
      name: name,
      _id: _id,
    });
    setUpdateOpen(true);
  };

  return (
    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
      <SyledCard variant="outlined">
        <SyledCardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ textAlign: "center" }}
          >
            {name}
          </Typography>
        </SyledCardContent>

        <Box my={2} display="flex" justifyContent="center" gap={2}>
          <button
            className="bg-green-600  text-white font-medium py-2 px-2 rounded-md"
            onClick={handleUpdateOpen}
          >
            Update Category
          </button>

          <button
            className="bg-red-600  text-white font-medium py-2 px-2 rounded-md"
            onClick={handleDeleteOpen}
          >
            Delete Category
          </button>
        </Box>
      </SyledCard>

      <UpdateCategoryModal
        updateOpen={updateOpen}
        handleUpdateClose={handleUpdateClose}
        data={data}
        setData={setData}
      />

      <DeleteCategoryModal
        deleteOpen={deleteOpen}
        handleDeleteClose={handleDeleteClose}
        data={data}
      />
    </Grid>
  );
}
