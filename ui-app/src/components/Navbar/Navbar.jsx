import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import ShareIcon from '@mui/icons-material/Share';
// import RestartAltIcon from '@mui/icons-material/RestartAlt';
import HomeIcon from '@mui/icons-material/Home';
import { useTheme } from '@mui/material/styles';
import './Navbar.css';

function Navbar() {
  const theme = useTheme();
  return (
    <div className="navbar">
      <div className="navbar-header">
        <span className="file-name">ArtifyDoc-23-08-2024</span>
        <div className="navbar-actions">
          <IconButton size="large" color="inherit"><UndoIcon /></IconButton>
          <IconButton size="large" color="inherit"><RedoIcon /></IconButton>
          <IconButton size="large" color="inherit"><HomeIcon /></IconButton>
          <Button variant="outlined" className='.MuiButton-colorPrimary'>Download</Button>
          <Button variant="contained" className='.MuiButton-colorPrimary' startIcon={<ShareIcon />}>Share</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;