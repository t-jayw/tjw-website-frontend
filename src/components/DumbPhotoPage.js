import React from 'react';
import dj from '../assets/datejust_image.JPEG';
import exp from '../assets/explorer_image.jpg';
import skyq from '../assets/monta_image.jpg';

function DumbPhotoPage() {
  const images = [dj, exp, skyq];
  // Add more images as you need

  return (
    <div>
      <h1>Dumb Photo Page</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt="" style={{ width: '45%', margin: '2.5%' }} />
        ))}
      </div>
    </div>
  );
}

export default DumbPhotoPage;
