import React from 'react';
import Slider from 'react-slick';

const hikingImages = [
  { src: '/picnic_point.jpeg', alt: 'Picnic Point Trail' },
  { src: '/arboretum_trail.jpg', alt: 'UW Arboretum Path' },
  { src: '/devils_lake.jpg', alt: "Devil's Lake" },
  { src: '/edna_taylor.jpg', alt: 'Edna Taylor Conservation Park' },
  { src: '/lower_yahara.jpg', alt: 'Lower Yahara River Trail' },
];

const HikingCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '4rem auto',
        padding: '0 1rem',
      }}
    >
    <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '1rem' }}>
      Estos son algunos de los trails que hay por aquí, todo depende de que tanto te guste caminar
    </h2>

    <Slider {...settings}>
        {hikingImages.map(({ src, alt }, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
  <img
    src={src}
    alt={alt}
    style={{
      width: '100%',
      maxHeight: '500px',
      objectFit: 'cover',
      borderRadius: '12px',
      boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    }}
  />
  <div
    style={{
      marginTop: '0.75rem',
      fontSize: '1.1rem',
      color: 'white',
      fontWeight: '500',
    }}
  >
    {alt}
  </div>
</div>
    ))}
    </Slider>
    </div>
  );
};

export default HikingCarousel;
