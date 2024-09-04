import React from 'react';
import Effects from '../Effects/effects';
import { Typography } from '@mui/material';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import './Sidebar.css';

function Sidebar({ file, fileName, setFileUrl, fileUrl }) {
  return (
    <div className="sidebar">
      <Typography sx={{ color: '#D459E1', fontWeight: 'bold', marginLeft: '8px', fontSize: '18px' }}>
        <FilterVintageIcon sx = {{ verticalAlign: 'middle'}} /> Predefined Effects:
      </Typography>
      <Effects file={file} fileName={fileName} setFileUrl={setFileUrl}/>
    </div>
  );
}

export default Sidebar;