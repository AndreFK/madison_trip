import React, { useState } from 'react';
import { Dialog } from '@mui/material';

const seasonImages = [
  { src: '/fall1.jpg', alt: 'Madison in Fall - 1' },
  { src: '/fall2.jpg', alt: 'Madison in Fall - 2' },
  { src: '/winter1.jpg', alt: 'Madison in Winter - 1' },
  { src: '/winter2.jpg', alt: 'Madison in Winter - 2' },
];

const SeasonGrid = () => {
  const [openImage, setOpenImage] = useState(null);

  return (
    <div
      style={{
        maxWidth: '900px',
        margin: '4rem auto',
        padding: '0 1rem',
      }}
    >
      <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '1rem' }}>
        Dependiendo del mes en que vengás, la ciudad se va a ver así 🍁❄️
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem',
        }}
      >
        {seasonImages.map(({ src, alt }, i) => (
          <img
            key={i}
            src={src}
            alt={alt}
            onClick={() => setOpenImage(src)} // 👈 Click to open modal
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '10px',
              boxShadow: '0 0 12px rgba(0,0,0,0.3)',
              cursor: 'pointer',
              transition: 'transform 0.3s',
            }}
          />
        ))}
      </div>

      {/* Modal */}
      <Dialog
        open={Boolean(openImage)}
        onClose={() => setOpenImage(null)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        {openImage && (
          <img
            src={openImage}
            alt="Expanded view"
            onClick={() => setOpenImage(null)} // 👈 Click to close
            style={{
              maxWidth: '90%',
              maxHeight: '90vh',
              borderRadius: '12px',
              boxShadow: '0 0 20px rgba(0,0,0,0.8)',
              cursor: 'pointer',
            }}
          />
        )}
      </Dialog>
    </div>
  );
};

export default SeasonGrid;
