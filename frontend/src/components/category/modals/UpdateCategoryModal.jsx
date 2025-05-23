import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import useCategoryCalls from "../../../hooks/useCategoryCalls";

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

export default function UpdateCategoryModal({
  updateOpen,
  handleUpdateClose,
  data,
  setData,
}) {
  const { putCategory, getCategories } = useCategoryCalls();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isCategoryUpdated = await putCategory(data._id, data);
    if (isCategoryUpdated) {
      await getCategories("categories");
      handleUpdateClose();
    }
  };

  return (
    <div>
      <Modal
        open={updateOpen}
        onClose={handleUpdateClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box component="form" onSubmit={handleSubmit}>
            <Typography gutterBottom variant="h6" component="div">
              Update Category
            </Typography>

            <FormControl fullWidth margin="dense">
              <FormLabel htmlFor="name">Name</FormLabel>
              <TextField
                size="small"
                name="name"
                id="name"
                type="text"
                variant="outlined"
                required
                onChange={handleChange}
                value={data.name}
              />
            </FormControl>

            <button
              type="submit"
              className="bg-green-600  text-white font-medium py-2 px-2 rounded-md mt-4 w-full uppercase"
            >
              Update Category
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
