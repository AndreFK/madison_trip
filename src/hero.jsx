import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.4]);

  return (
    <motion.div
      ref={ref}
      style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        opacity,
        background: 'black',
      }}
    >
      <img
        src="/madison_trip/madison_og.jpg"
        alt="Hero"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 2,
        }}
      >
        <h1
          style={{
            color: 'white',
            fontSize: '3rem',
            zIndex: 3,
            textShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)',
          }}
        >
          Mochi en Wisconsin!!
        </h1>
      </div>
    </motion.div>
  );
};

export default HeroSection;
