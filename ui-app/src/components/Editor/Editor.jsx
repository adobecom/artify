import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import MainScreen from '../MainScreen/MainScreen';
import './Editor.css';

function EditorPage({ file }) {
  return (
    <div className="editor-wrapper">
      <Navbar />
      <div class="main">
      <Sidebar />
      <MainScreen file={file}/>
      </div>
    </div>
  );
}

export default EditorPage;