import { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import LandingPage from "./components/Landing";
import Editor from './components/Editor/Editor';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "../theme";
import { uploadImage } from './apis/apis.js';
import "./App.css";

function App() {
  const [fileName, setFileName] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setUploading(true);
    setFileUrl(URL.createObjectURL(file));
    const fileName = await uploadImage(file);
    setUploading(false);
    setFileName(fileName);
  };

  return (
    <ThemeProvider theme={theme}>
      <header className={`${fileUrl ? 'has-file' : ''}`}>
        <img src={logo} className="logo" alt="Artify logo" />
      </header>
      <main>
        {uploading ? (
          <Editor
            fileName={fileName}
            setFileUrl={setFileUrl}
            fileUrl={fileUrl}
            uploading={uploading}
          />
        ) : (
          <LandingPage
            handleFileChange={handleFileChange}
          />
        )}
      </main>
    </ThemeProvider>
  );
}

export default App;
