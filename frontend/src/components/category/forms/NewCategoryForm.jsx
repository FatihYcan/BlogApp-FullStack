import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";
import { useEffect, useState } from "react";
import useCategoryCalls from "../../../hooks/useCategoryCalls";

export default function NewCategoryForm() {
  const { postCategory } = useCategoryCalls();
  const [data, setData] = useState({ name: "" });

  useEffect(() => {
    sessionStorage.removeItem("selectedCategory");
    sessionStorage.removeItem("searchBlog");
    sessionStorage.removeItem("searchUser");
    sessionStorage.removeItem("selectedMyCategory");
    sessionStorage.removeItem("searchMyBlog");
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isCategoryCreated = await postCategory(data);
    if (isCategoryCreated) {
      setData({ name: "" });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: 2,
      }}
    >
      <FormControl fullWidth margin="dense">
        <FormLabel htmlFor="name">Name</FormLabel>
        <TextField
          size="small"
          id="name"
          type="text"
          name="name"
          variant="outlined"
          value={data.name}
          onChange={handleChange}
        />
      </FormControl>

      <button
        type="submit"
        className="bg-green-600  text-white font-medium py-2 px-2 rounded-md mt-4 w-full"
      >
        New Category
      </button>
    </Box>
  );
}
