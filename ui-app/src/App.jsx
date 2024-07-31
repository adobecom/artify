import { useState } from "react";
import logo from "./assets/logo.png";
import LandingPage from "./components/Landing";
import Editor from './components/Editor';

import "./App.css";

function App() {
  const [ file, setFile ] = useState();

  return (
    <>
      <header>
        <img src={logo} className="logo" alt="Artify logo" />
      </header>
      <main>
        {file ? <Editor file={file} /> : <LandingPage setFile={setFile}/>}
      </main>
    </>
  );
}

export default App;
