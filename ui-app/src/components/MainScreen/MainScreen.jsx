import React, { useState } from 'react';
import { processImage  } from '../../apis/apis';
import {Paper, Box } from '@mui/material';
import CommandPrompt from '../CommandPrompt/CommandPrompt';
import CircularProgress from '@mui/material/CircularProgress';
import Fab from '@mui/material/Fab';
import FaceIcon from '@mui/icons-material/Face';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import './MainScreen.css';

function MainScreen({ fileName, setFileUrl, fileUrl, uploading, setImgState, imgState, originalFile }) {
  const [prompt, setPrompt] =  useState('');
  const [isLoading, setIsLoading] = useState(false);

  // const [imgState, setImgState ] = useState('');

  async function onClickCommand(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const fileUrl = await processImage(prompt, fileName);
      setFileUrl(fileUrl);
      setImgState('modified');
    } catch (error) {
      console.error("Error processing image:", error);
    } finally {
      setIsLoading(false); // Hide loader
    }
  }

  function onChangePrompt(e) {
    console.log(e)
    setPrompt(e.currentTarget.value);
  }

  function handleIconToggle() {
    setImgState((state) => {
      if(state === 'original') return 'modified';
      else return 'original';
    });
  }
  
  return (
    <div className="main-screen">
      <Box
        sx={{
          position: 'relative',
          width: 800,
          height: 500,
        }}
      >
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
              height: '500px',
              display: 'block',
              margin: 'auto',
              opacity: isLoading? '0.4' : '1'
            }}
            alt="Centered Image"
            src={imgState == 'modified' ? fileUrl : originalFile}
          />
          {isLoading || uploading ? (
            <CircularProgress
              sx={{
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
                zIndex: 4,
              }}
            />
            ) : (
              <></>
          )}
        </Paper>
        <Fab
          color="secondary"
          aria-label="face"
          disabled={imgState === ''}
          sx={{
            position: 'absolute',
            width: '28px',
            height: '28px',
            minHeight: '24px',
            bottom: 8,
            right: 8,
            zIndex: 4,
          }}
          onClick={handleIconToggle}
        >
          {imgState === 'modified' ? <FaceIcon sx={{ fontSize: 20 }} /> : <FaceRetouchingNaturalIcon sx={{ fontSize: 20 }} />}
        </Fab>
      </Box>
      <CommandPrompt prompt={prompt} onClickCommand={onClickCommand} onChangePrompt={onChangePrompt}/> 
    </div>
  );
}

export default MainScreen;