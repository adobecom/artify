import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-header">
        <span className="file-name">Mydoc-23-08-2024</span>
        <div className="navbar-actions">
          <button className="icon-button undo-button">Undo</button>
          <button className="icon-button redo-button">Redo</button>
          <button className="icon-button download-button">Download</button>
          <button className="icon-button share-button">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;