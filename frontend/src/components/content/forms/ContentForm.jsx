import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextEditor from "./TextEditor";

export default function ContentForm({
  contentData,
  handleContentChange,
  handleImagesChange,
  isContent,
  fileInputRef,
  onSubmit,
  onAddContent,
  }) {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: 2,
      }}
    >
      <FormControl fullWidth margin="dense">
        <FormLabel htmlFor="content">Content</FormLabel>
        <TextEditor
          value={contentData.content}
          onChange={handleContentChange}
          isContent={isContent}
        />
      </FormControl>

      <FormControl fullWidth margin="dense">
        <FormLabel htmlFor="images">Images</FormLabel>
        <Box
          sx={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <input
            id="images"
            name="images"
            type="file"
            accept="image/*"
            required
            multiple
            style={{
              width: "100%",
              cursor: "pointer",
              border: "none",
              outline: "none",
            }}
            onChange={handleImagesChange}
            ref={fileInputRef}
          />
        </Box>
      </FormControl>

      <Box sx={{ display: "flex", gap: 1 }}>
        <button
          type="button"
          onClick={onAddContent}
          className="bg-blue-600 text-white font-medium py-2 px-2 rounded-md mt-4 w-full"
        >
          Add Another Content
        </button>

        <button
          type="button"
          onClick={onSubmit}
          className="bg-green-600 text-white font-medium py-2 px-2 rounded-md mt-4 w-full"
        >
          Save and Finish
        </button>
      </Box>
    </Box>
  );
}
