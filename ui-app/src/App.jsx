import { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import LandingPage from "./components/Landing";
import Editor from './components/Editor/Editor';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "../theme";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  useEffect(() => {
    if (file) {
      setFileUrl(URL.createObjectURL(file));
    }
  }, [file]);

  return (
    <ThemeProvider theme={theme}>
      <header className={`${file ? 'has-file' : ''}`}>
        <img src={logo} className="logo" alt="Artify logo" />
      </header>
      <main>
        {file ? (
          <Editor
            file={file}
            fileName={fileName}
            setFileUrl={setFileUrl}
            fileUrl={fileUrl}
          />
        ) : (
          <LandingPage
            setFile={setFile}
            setFileName={setFileName}
            setFileUrl={setFileUrl}
            fileUrl={fileUrl}
          />
        )}
      </main>
    </ThemeProvider>
  );
}

export default App;
