const url = 'http://192.168.0.182:5000';

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

const processImage = async (prompt, fileName) => {
  const res = await fetch(`${url}/process-image`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ fileName, prompt })
  });
  if (!res.ok) {
      throw new Error('Processing failed');
  }
  const { modifiedImageUrl } = await res.json();

  return `${url}${modifiedImageUrl}`;
}

export {
  uploadImage,
  applyEffect,
  processImage,
};











