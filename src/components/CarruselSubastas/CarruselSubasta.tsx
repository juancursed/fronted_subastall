import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper';

import SubastaCard from '../subasta/SubastaCard';

export const CarruselSubastas = () => {
  // Ejemplo de datos para las subastas
  const subastas = [
    {
      id: 1,
      title: 'iPhone X',
      description:
        'El iPhone XR viene con una pantalla Liquid Retina de 6.1 pulgadas (2) y está disponible en seis colores increíbles.',
      image: 'ruta_a_imagen_iphone.jpg',
      price: '900,000 COP',
      label: 'Envío gratis',
      timeLeft: '00:30:16',
      onBid: () => console.log('Bid placed on iPhone X'),
    },
    {
      id: 2,
      title: 'Samsung Galaxy S20',
      description:
        'Con una pantalla de 6.2 pulgadas y cámaras increíbles, el Galaxy S20 redefine lo que esperas de un smartphone.',
      image: 'ruta_a_imagen_galaxy.jpg',
      price: '1,200,000 COP',
      label: 'Envío gratis',
      timeLeft: '02:15:40',
      onBid: () => console.log('Bid placed on Samsung Galaxy S20'),
    },
    {
      id: 3,
      title: 'Trin Galaxy S20',
      description:
        'Con una pantalla de 6.2 pulgadas y cámaras increíbles, el Galaxy S20 redefine lo que esperas de un smartphone.',
      image: 'ruta_a_imagen_galaxy.jpg',
      price: '1,200,000 COP',
      label: 'Envío gratis',
      timeLeft: '02:15:40',
      onBid: () => console.log('Bid placed on trin Galaxy S20'),
    },
    {
      id: 2,
      title: 'tran Galaxy S20',
      description:
        'Con una pantalla de 6.2 pulgadas y cámaras increíbles, el Galaxy S20 redefine lo que esperas de un smartphone.',
      image: 'ruta_a_imagen_galaxy.jpg',
      price: '1,200,000 COP',
      label: 'Envío gratis',
      timeLeft: '02:15:40',
      onBid: () => console.log('Bid placed on tran Galaxy S20'),
    },
    // Agrega más subastas si es necesario
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Subastas activas</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {subastas.map((subasta) => (
          <SwiperSlide key={subasta.id}>
            <SubastaCard {...subasta} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarruselSubastas;
