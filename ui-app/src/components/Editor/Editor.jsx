import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import MainScreen from '../MainScreen/MainScreen';
import './Editor.css';

function EditorPage({ file, fileName }) {
  return (
    <div className="editor-wrapper">
      <Navbar />
      <div className="main">
      <Sidebar />
      <MainScreen file={file} fileName={fileName} />
      </div>
    </div>
  );
}

export default EditorPage;