import React from 'react';
import { ImageList, ImageListItem, Button } from '@mui/material';
import effectImage1 from '../../assets/effects/effect1.png';
import effectImage2 from '../../assets/effects/effect2.png';
import effectImage3 from '../../assets/effects/effect3.png';
import effectImage4 from '../../assets/effects/effect4.png';
import effectImage5 from '../../assets/effects/effect5.png';
import effectImage6 from '../../assets/effects/effect6.png';
// import { applyEffect } from '../../apis/apis';


const imageData = [
  { img: effectImage1, title: 'Image 1', key: 'customEffect1' },
  { img: effectImage2, title: 'Image 2', key: 'customEffect2' },
  { img: effectImage3, title: 'Image 3', key: 'customEffect3' },
  { img: effectImage4, title: 'Image 4', key: 'customEffect4' },
  { img: effectImage5, title: 'Image 5', key: 'customEffect5' },
  { img: effectImage6, title: 'Image 6', key: 'customEffect6' },
  // { img: 'https://via.placeholder.com/150', title: 'Image 7', key: 7 },
  // { img: 'https://via.placeholder.com/150', title: 'Image 8', key: 8 },
  // { img: 'https://via.placeholder.com/150', title: 'Image 9', key: 9 },
];

export default function Effects({ file, fileName, setFileUrl, fileUrl }) {
  return (
    <ImageList gap={0} cols={3}>
      {imageData.map((item) => (
        <ImageListItem key={item.img}>
          <Button onClick={() => handleImageClick(item.key, fileName, setFileUrl)}>
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

async function handleImageClick(effect, fileName, setFileUrl) {
//   const urlImg = await applyEffect(effect, fileName);
//   setFileUrl(urlImg);
}
