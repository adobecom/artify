import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import MainScreen from '../MainScreen/MainScreen';
import './Editor.css';

function EditorPage({ file, fileName, setFileUrl, fileUrl }) {
  return (
    <div className="editor-wrapper">
      <Navbar />
      <div className="main">
        <Sidebar file={file} fileName={fileName} setFileUrl={setFileUrl} fileUrl={fileUrl}/>
        <MainScreen file={file} fileName={fileName} setFileUrl={setFileUrl} fileUrl={fileUrl}/>
      </div>
    </div>
  );
}

export default EditorPage;