import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HomeIcon from '@mui/icons-material/Home';

export default function ButtonPanel() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Set direction to column to stack icons vertically
        justifyContent: 'flex-end',
        alignItems: 'center', // Optional: Center align icons horizontally
        '& > :not(style)': { mb: 4 },
      }}
    >
      <Fab size="small" color="primary" aria-label="see-original">
        <VisibilityIcon />
      </Fab>
      <Fab color="primary" aria-label="edit">
        <HomeIcon />
      </Fab>
    </Box>
  );
}
