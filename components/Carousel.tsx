"use client";

import { useState, useEffect } from 'react';

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
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Carousel Container */}
      <div className="overflow-hidden relative rounded-lg max-h-[500px]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {imageList.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full max-h-[500px] flex-shrink-0 object-contain"
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute text-3xl top-1/2 left-4 transform -translate-y-1/2 text-black bg-white w-10 h-10 rounded-full opacity-75 hover:opacity-100 flex items-center justify-center"
        >
          &#10094;
        </button>
        <button
          onClick={handleNext}
          className="absolute text-3xl top-1/2 right-4 transform -translate-y-1/2 text-black bg-white w-10 h-10 rounded-full opacity-75 hover:opacity-100 flex items-center justify-center"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
