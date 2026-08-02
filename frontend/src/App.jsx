import { useState } from "react";
import "./App.css";

function App() {

  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="container">
      <h1>AI Resume Analyzer</h1>

      <p>Upload your resume and get an ATS score.</p>

      <>
        <input
          type="file"
          id="resumeInput"
          accept=".pdf"
          style={{ display: "none" }}
          onChange={(event) => {
            setSelectedFile(event.target.files[0]);
          }}
        />

        <button onClick={() => document.getElementById("resumeInput").click()}>
          Upload Resume
        </button>
      </>

      {selectedFile ? (
  <>
    <p>📄 {selectedFile.name}</p>
    <p>Size: {(selectedFile.size / 1024).toFixed(2)} KB</p>
    <button
  onClick={() => {
    setSelectedFile(null);
  }}
>
  Remove File
</button>
  </>
) : (
  <p>No file selected</p>
)}
    </div>
  );
}

export default App;