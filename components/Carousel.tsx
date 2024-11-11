"use client";

import { useState, useEffect } from 'react';

type CarouselProps = {
  imageList: string[];
  autoScrollInterval?: number; // optional prop to control auto-scroll speed (in ms)
};

const Carousel: React.FC<CarouselProps> = ({ imageList, autoScrollInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Next slide handler
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  // Previous slide handler
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length
    );
  };

  // Auto-scroll effect using useEffect
  useEffect(() => {
    // Set up an interval to automatically change slides
    const intervalId = setInterval(handleNext, autoScrollInterval);

    // Clean up the interval when the component is unmounted or when interval changes
    return () => {
      clearInterval(intervalId);
    };
  }, [autoScrollInterval]); // Re-run effect only if the autoScrollInterval changes

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Carousel Container */}
      <div className="overflow-hidden relative rounded-lg">
        {/* Image Wrapper */}
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
              className="w-full flex-shrink-0 object-cover"
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100"
        >
          &#10094;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
