import { useState } from "react";
import logo from "./assets/logo.png";
import LandingPage from "./components/Landing";
import Editor from './components/Editor/Editor';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "../theme";

import "./App.css";

function App() {
  const [ file, setFile ] = useState();
  const [ fileName, setFileName ] = useState();

  return (
    <ThemeProvider theme={theme}>
      <header className={`${file ? 'has-file' : ''}`}>
        <img src={logo} className="logo" alt="Artify logo" />
      </header>
      <main>
        {file ? <Editor file={file} fileName={fileName}/> : <LandingPage setFile={setFile} setFileName={setFileName} />}
      </main>
    </ThemeProvider>
  );
}

export default App;
