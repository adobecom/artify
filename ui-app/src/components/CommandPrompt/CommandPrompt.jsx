import React, { useState } from 'react';
// import { processImage  } from '../../apis/apis';
import {Paper, InputBase, IconButton} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Typography } from '@mui/material';

function CommandPrompt({prompt, onClickCommand, onChangePrompt}) {
  return (
    <>
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

    </>
  );
}

export default CommandPrompt;