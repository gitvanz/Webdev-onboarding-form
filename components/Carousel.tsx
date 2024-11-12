"use client";

import { useState } from 'react';
import Image from 'next/image';

type CarouselProps = {
  imageList: string[];
  autoScrollInterval?: number;
};

const Carousel: React.FC<CarouselProps> = ({ imageList, autoScrollInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length);
  };

  return (
    <div className="relative w-full max-w-[400px] mx-auto overflow-hidden"> {/* Enclose within a relative container */}
      {/* Carousel Container */}
      <div className="relative rounded-lg max-h-[400px] overflow-hidden"> {/* Ensure relative position & overflow hidden */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {imageList.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`Slide ${idx + 1}`}
              height={400}
              width={400}
              className="object-cover w-full h-full"
            />
          ))}
        </div>

        {/* Left Navigation Button */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 -translate-y-1/2 text-3xl text-white bg-orange-600 w-10 h-10 rounded-full opacity-75 hover:opacity-100 flex items-center justify-center z-10"
        >
          &#10094;
        </button>

        {/* Right Navigation Button */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 -translate-y-1/2 text-3xl text-white bg-orange-600 w-10 h-10 rounded-full opacity-75 hover:opacity-100 flex items-center justify-center z-10"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
