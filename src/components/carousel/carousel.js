import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css'

const images = [
  './imgs/externa-dia.JPG',
  './imgs/externa-frente.JPG',
  './imgs/placa-linha.JPG',
  './imgs/banco-e planta.JPG',
];

const Carousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Tempo em milissegundos (5 segundos)
  };

  return (
    <>

    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`slide-${index}`} />
        </div>
      ))}
    </Slider>
    </>
  );
};

export default Carousel;
