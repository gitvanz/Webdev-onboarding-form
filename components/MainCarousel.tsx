import Carousel from './Carousel';
import { carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, carousel8, carousel9, carousel10 } from '@/constants';

const MainCarousel = () => {
  return (
    <div className="m-0">
      <div className="mx-4 md:mx-[120px] mb-6">
        <h1 className="text-3xl font-bold">4. Choose Your Template</h1>
        <p className="text-lg">
          Select a customizable template (more customization available for all types):
        </p>
      </div>
      
      {/* Responsive Grid Container for Carousels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mx-4 md:mx-[120px]">
        {[carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, carousel8, carousel9, carousel10].map((imageList, index) => (
          <div key={index} className="p-2">
            <h2 className="text-xl font-semibold mb-2">Template {index + 1}</h2>
            <Carousel imageList={imageList} />
          </div>
        ))}
      </div>    
    </div>
  );
};

export default MainCarousel;
