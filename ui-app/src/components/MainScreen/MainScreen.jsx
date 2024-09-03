import React, { useState } from 'react';
import './MainScreen.css';
import { applyEffect  } from '../../apis/apis';

function MainScreen({ file, fileName }) {
  const [fileUrl, setFileUrl] = useState(URL.createObjectURL(file));
  const [prompt, setPrompt] =  useState('');

  async function onClickCommand() {
    const fileUrl = await applyEffect(prompt, fileName);
    setFileUrl(fileUrl);
  }

  function onChangePrompt(e) {
    setPrompt(e.currentTarget.value);
  }
  
  return (
    <div className="main-screen">
      <img src={fileUrl} alt="Artify logo" width={600}/>
      <div className="search-bar">
        <input value={prompt} type="text" placeholder="Enter your question" className="search-input" onChange={onChangePrompt}/>
        <button className="search-button" onClick={onClickCommand}>Ask Artify</button>
      </div>
    </div>
  );
}

export default MainScreen;