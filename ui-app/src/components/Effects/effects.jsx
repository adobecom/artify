import React from 'react';
import { ImageList, ImageListItem, Button } from '@mui/material';
import effectImage1 from '../../assets/effects/effect1.png';
import effectImage2 from '../../assets/effects/effect2.png';
import effectImage3 from '../../assets/effects/effect3.png';
import effectImage4 from '../../assets/effects/effect4.png';
import { applyEffect } from '../../apis/apis';


const imageData = [
  { img: effectImage1, title: 'Image 1', key: 'customEffect1' },
  { img: effectImage2, title: 'Image 2', key: 'customEffect2' },
  { img: effectImage3, title: 'Image 3', key: 'customEffect3' },
  { img: effectImage4, title: 'Image 4', key: 'customEffect4' },
  { img: 'https://via.placeholder.com/150', title: 'Image 5', key: 5 },
  { img: 'https://via.placeholder.com/150', title: 'Image 6', key: 6 },
  { img: 'https://via.placeholder.com/150', title: 'Image 7', key: 7 },
  { img: 'https://via.placeholder.com/150', title: 'Image 8', key: 8 },
  { img: 'https://via.placeholder.com/150', title: 'Image 9', key: 9 },
];

export default function Effects() {
  return (
    <ImageList gap={0} cols={3}>
      {imageData.map((item) => (
        <ImageListItem key={item.img}>
          <Button onClick={() => handleImageClick(item.key)}>
            <img
              src={`${item.img}`}
              alt={item.title}
              style={{ width: '100%', height: '100%', aspectRatio: '1/1' }}
            />
          </Button>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

function handleImageClick(effect) {
  applyEffect(effect)
}
