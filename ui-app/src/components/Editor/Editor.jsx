import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import MainScreen from '../MainScreen/MainScreen';
// import ButtonPanel from '../ButtonPanel/ButtonPanel';
import './Editor.css';

function EditorPage({ fileName, setFileUrl, fileUrl, uploading,setUploading, originalFile }) {
  const [imgState, setImgState ] = useState('');
  return (
    <div className="editor-wrapper">
      <Navbar />
      <div className="main">
        <Sidebar fileName={fileName} setFileUrl={setFileUrl} fileUrl={fileUrl} setUploading={setUploading} setImgState={setImgState}
        imgState={imgState}/>
        <MainScreen fileName={fileName} setFileUrl={setFileUrl} fileUrl={fileUrl} uploading={uploading} setImgState={setImgState}
        imgState={imgState} originalFile={originalFile} />
        {/* <ButtonPanel /> */}
      </div>
    </div>
  );
}

export default EditorPage;