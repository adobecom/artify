import React, { useState } from 'react';
import './MainScreen.css';
import { processImage  } from '../../apis/apis';
import {Paper, Box, InputBase, IconButton} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Typography } from '@mui/material';

function MainScreen({ file, fileName }) {
  const [fileUrl, setFileUrl] = useState(URL.createObjectURL(file));
  const [prompt, setPrompt] =  useState('');

  async function onClickCommand() {
    console.log('onClickCommand')
    const fileUrl = await processImage(prompt, fileName);
    setFileUrl(fileUrl);
  }

  function onChangePrompt(e) {
    console.log(e)
    setPrompt(e.currentTarget.value);
  }
  
  return (
    <div className="main-screen">
      <Paper
      elevation={3}
      sx={{
        backgroundColor: '#eeeeee',
        width: 800,
        height: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Box
        component="img"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
        alt="Centered Image"
        src={fileUrl}
      />
    </Paper>
    
    <Typography sx={{ color: '#D459E1', fontWeight: 'bold', margin: '24px 0 8px 0' }}>
      Ask Artify
    </Typography>
  <Paper
      elevation={2}
      sx={{
        backgroundColor: 'white',
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <ArrowForwardIosIcon color='primary' />
      <Paper
      elevation={0}
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 750,
        borderRadius: '20px',
        backgroundColor: '#eeeeee'
      }}
    >
      <InputBase
        value={prompt}
        onChange={onChangePrompt}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Type your command"
        inputProps={{ 'aria-label': 'Type your command' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="send" onClick={onClickCommand}>
        <SendIcon color='primary'/>
      </IconButton>
    </Paper>
    </Paper>

      
    </div>
  );
}

export default MainScreen;