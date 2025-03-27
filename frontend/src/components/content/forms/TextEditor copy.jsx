import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import "../../../assets/styles/editorStyles.css";

const TextEditor = ({ value, onChange, isText }) => {
  const toolbarOptions = [
    [{ header: [1, 2, 3, 4, 5, 6] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
  ];

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={{
          toolbar: {
            container: toolbarOptions,
          },
        }}
        className="h-auto"
      />
      {isText && (
        <p className="text-red-500 text-sm">Text alanı zorunludur</p>
      )}
    </div>
  );
};

export default TextEditor;
