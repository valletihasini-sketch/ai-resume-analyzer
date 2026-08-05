import { useState } from "react";
import "./App.css";

function App() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [resumeText,setResumeText]=useState("");
  const [isDragging,setIsDragging]=useState(false);
  const [message,setMessage]=useState("");
  function handleAnalyze() {

  if (!selectedFile && resumeText.trim() === "") {
    setError("Please upload a resume or paste resume text.");
    setMessage("");
    return;
  }

  setError("");

  setMessage("Resume received! AI analysis will start soon.");
 

}

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
<div
  className={`drop-zone ${isDragging ? "dragging" : ""}`}

  onDragOver={(event) => {
    event.preventDefault();
    setIsDragging(true);
  }}

  onDragLeave={() => {
    setIsDragging(false);
  }}

  onDrop={(event) => {
    event.preventDefault();

    setIsDragging(false);

    const file = event.dataTransfer.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      setError("Please upload a PDF file.");
      setSelectedFile(null);
      return;
    }

    setError("");
    setSelectedFile(file);
  }}

  onClick={() => document.getElementById("resumeInput").click()}
>

  <h3>📄 Drop Resume Here</h3>

  <p>or Click to Upload</p>

</div>
        
      </>
      <hr />

<h2>Or Paste Resume</h2>

<textarea
  className="resume-text"
  placeholder="Paste your resume here..."
  value={resumeText}
  onChange={(event) => setResumeText(event.target.value)}
></textarea>

<button
  className="analyze-btn"
  onClick={handleAnalyze}
>
  Analyze Resume
</button>
      {error && (
  <p style={{ color: "red" }}>
    {error}
  </p>
)}
 {message &&(
    <p style={{color:"green",fontWeight:"bold"}}>
      {message}
    </p>
  )}

      {selectedFile ? (
  <>
    <p>📄 {selectedFile.name}</p>
    <p>Size: {(selectedFile.size / 1024).toFixed(2)} KB</p>
    <button
  onClick={() => {
    setSelectedFile(null);
    setResumeText("");
    setError("");
    setMessage("");
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