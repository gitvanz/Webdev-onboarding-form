import Carousel from './Carousel';
import { carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, carousel8, carousel9, carousel10 } from '@/constants';

const MainCarousel = () => {
  return (
    <>
      <div className='mb-0 mx-[120px]'>
        <h1 className='text-3xl font-bold bm-11'>4. Choose Your Template</h1>
        <p className='text-lg'>
          Select a customizable template (more customization available for all types):
        </p>
      </div>
      
      {/* Container for carousels in rows */}
      <div className="flex flex-wrap mx-[120px]">
        {[carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, carousel8, carousel9, carousel10].map((imageList, index) => (
          <div key={index} className="w-1/2 p-2">
            <Carousel imageList={imageList} />
          </div>
        ))}
      </div>
    </>
  );
};

export default MainCarousel;
