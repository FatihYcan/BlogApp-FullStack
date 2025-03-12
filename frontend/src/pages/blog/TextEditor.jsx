import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const TextEditor = ({ value, onChange }) => {
  const toolbarOptions = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
  ];

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      modules={{ toolbar: toolbarOptions }}
      className="h-64 mb-14"
    />
  );
};

export default TextEditor;
