import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import MainScreen from '../MainScreen/MainScreen';
// import ButtonPanel from '../ButtonPanel/ButtonPanel';
import './Editor.css';

function EditorPage({ fileName, setFileUrl, fileUrl, uploading }) {
  return (
    <div className="editor-wrapper">
      <Navbar />
      <div className="main">
        <Sidebar fileName={fileName} setFileUrl={setFileUrl} fileUrl={fileUrl}/>
        <MainScreen fileName={fileName} setFileUrl={setFileUrl} fileUrl={fileUrl} uploading={uploading} />
        {/* <ButtonPanel /> */}
      </div>
    </div>
  );
}

export default EditorPage;