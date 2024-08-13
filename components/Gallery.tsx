'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  { url: '/assets/image5.jpg', alt: 'Programmer working', width: 300, height: 240, col: 'col-span-2 sm:col-span-1' },
  { url: '/assets/image2.jpg', alt: 'Code on screen', width: 300, height: 220, col: 'col-span-2 sm:col-span-1' },
  { url: '/assets/image3.jpg', alt: 'Laptop with code', width: 250, height: 200, col: 'col-span-1 sm:col-span-1' },
  { url: '/assets/image1.jpg', alt: 'Multiple screens with code', width: 530, height: 140, col: 'col-span-2 sm:col-span-2' },
  { url: '/assets/image4.jpg', alt: 'Coding interface', width: 260, height: 150, col: 'col-span-1 sm:col-span-1' },
];

const Gallery: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div id="gallery" className="flex justify-center items-center  bg-gradient-to-br from-[#130016] via-black to-black p-8 sm:pr-2 sm:pt-32 sm:pb-32">
      <div className="hidden sm:grid sm:grid-cols-2 sm:grid-cols-3 sm:gap-4 sm:max-w-4xl">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`relative gallery-item ${index >= 2 && index === 4 ? 'hidden sm:block' : ''} ${image.col}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Image
              src={image.url}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="gallery-image"
            />
            {index === 1 && (
              <div className="absolute left-1/2 top-[240px] sm:top-auto sm:left-auto sm:-top-20 sm:right-12 flex items-center mt-4 sm:mt-3">
                <span className="text-fuchsia-500 text-2xl sm:text-4xl mr-2">Innovate</span>
                <svg className="w-6 h-6 sm:w-10 sm:h-10 text-fuchsia-500" viewBox="0 0 139 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M87.1075 118.636C105.56 95.4988 158.036 43.076 125.152 10.1915C106.196 -8.76381 86.8508 14.3552 77.1518 29.7471C72.7424 36.7446 69.1863 43.9006 65.5074 51.2582C64.2446 53.7836 62.7701 61.2503 61.5074 58.7249C59.5823 54.8748 60.515 47.2601 59.1075 42.7249C57.1604 36.4512 54.1693 30.8969 49.9518 25.836C42.3643 16.7309 24.211 0.533557 11.1075 10.7249C-5.78039 23.8594 7.63707 61.3541 16.0852 76.4138C23.2383 89.165 32.6688 102.597 43.0186 112.947C44.2495 114.178 52.5796 124.173 49.4185 116.947C46.8221 111.012 43.9075 103.8 43.9075 97.2138C43.9075 90.7739 49.5655 108.788 52.6186 114.458C58.6481 125.656 41.0468 118.636 34.3074 118.636" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </div>
            )}
            {index === 3 && (
              <div className="absolute left-1/2 top-[240px] sm:top-auto sm:left-auto sm:bottom-40 sm:-right-28 flex items-center mt-4 sm:mt-3 hidden sm:flex">
                <span className="text-fuchsia-500 text-2xl sm:text-4xl  mr-2 transform -rotate-90">Grow Together</span>
              </div>
            )}
            {index === 3 && (
              <div className="absolute -bottom-20 w-full text-center mb-4 z-90">
                <a href="https://www.siue.edu/news/2020/03/SIUESheCodeEngagesYoungWomeninComputerScience.shtml" className="text-gray-300 text-xl font-bold underline mr-4">2020 Press Release</a>
                <a href="https://www.siue.edu/news/2018/12/SIUE-SheCode-Event-Engages-Young-Women-in-Computer-Science.shtml" className="text-gray-300 font-bold text-xl underline">2018 Press Release</a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Mobile Slider */}
      <div className="sm:hidden w-full">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative gallery-item  ">
              <Image
                src={image.url}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="gallery-image border-none"
              />
            </div>
          ))}
        </Slider>
        <div className="w-full text-white text-center mt-8">
              <a href="https://www.siue.edu/news/2020/03/SIUESheCodeEngagesYoungWomeninComputerScience.shtml" className="text-gray-300 text-l font-bold underline text-center">2020 Press Release</a>
        </div>
        <div className="w-full text-white text-center mt-3">
              <a href="https://www.siue.edu/news/2018/12/SIUE-SheCode-Event-Engages-Young-Women-in-Computer-Science.shtml" className="text-gray-300 font-bold text-l underline text-center">2018 Press Release</a>
        </div>
      </div>

      <style jsx>{`
        @font-face {
          font-family: 'Cookie Monster';
          font-weight: normal;
          font-style: normal;
        }

        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .gallery-item {
          overflow: hidden;
          position: relative;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }

        .gallery-item svg {
          opacity: 0.5;
        }

        .font-cookie-monster {
          font-family: 'Cookie Monster', 'Comic Sans MS', 'Comic Sans', cursive;
        }

        .gallery-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .gallery-image {
          position: relative;
          z-index: 2;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
