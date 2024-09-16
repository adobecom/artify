// const url = 'http://192.168.0.182:5000';
const url = 'http://10.193.68.37:5000';

const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  const res = await fetch(`${url}/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) {
    throw new Error('Upload failed');
  }
  const { fileName } = await res.json();
  return fileName;
}

const applyEffect = async (effect, fileName) => {
  const res = await fetch(`${url}/${effect}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ fileName })
  });
  if (!res.ok) {
      throw new Error('Processing failed');
  }
  const { modifiedImageUrl } = await res.json();

  return `${url}${modifiedImageUrl}`;
}

// const processImage = async (prompt, fileName) => {
//   const res = await fetch(`${url}/firefly`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ fileName, prompt })
//   });
//   if (!res.ok) {
//       throw new Error('Processing failed');
//   }
//   const { modifiedImageUrl } = await res.json();
//   console.log('modifiedImageUrl', modifiedImageUrl);

//   return `${modifiedImageUrl}`;
// }

const processImage = async (prompt, fileName, modifiedName) => {
  const res = await fetch(`${url}/process-image`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ fileName: modifiedName || fileName, prompt })
  });
  if (!res.ok) {
      throw new Error('Processing failed');
  }
  const { modifiedImageUrl } = await res.json();
  return { modifiedImageUrl: `${url}${modifiedImageUrl}`, modifiedImagePath: modifiedImageUrl };
}


export {
  uploadImage,
  applyEffect,
  processImage,
};











