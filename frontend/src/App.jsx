import { useState } from "react";
import "./App.css";

function App() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [resumeText,setResumeText]=useState("");

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

    const file = event.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      setError("Please upload a PDF file.");
      setSelectedFile(null);
      return;
    }

    setError("");
    setSelectedFile(file);
  }}
/>

        <button onClick={() => document.getElementById("resumeInput").click()}>
          Upload Resume
        </button>
      </>
      <hr />

<h2>Or Paste Resume</h2>

<textarea
  className="resume-text"
  placeholder="Paste your resume here..."
  value={resumeText}
  onChange={(event) => setResumeText(event.target.value)}
></textarea>

<button className="analyze-btn">
  Analyze Resume
</button>
      {error && (
  <p style={{ color: "red" }}>
    {error}
  </p>
)}

      {selectedFile ? (
  <>
    <p>📄 {selectedFile.name}</p>
    <p>Size: {(selectedFile.size / 1024).toFixed(2)} KB</p>
    <button
  onClick={() => {
    setSelectedFile(null);
    setError("");
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