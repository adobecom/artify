import React from 'react';
import './MainScreen.css';

function MainScreen(file) {
  let s = URL.createObjectURL(file.file);
  console.log(s);
  return (
    <div className="main-screen">
      <img src={s} alt="Artify logo" width={600}/>
      <div className="search-bar">
        <input type="text" placeholder="Enter your question" className="search-input" />
        <button className="search-button">Ask Artify</button>
      </div>
    </div>
  );
}

export default MainScreen;