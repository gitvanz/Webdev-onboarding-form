import Builder from "@/components/Builder";
import Package from "@/components/Package";
import WebsiteType from "@/components/WebsiteType";
import Carousel from "@/components/Carousel";

const images = [
  '/assets/png/template1.1.png',
  '/assets/png/template1.2.png',
  '/assets/png/template1.3.png',
  '/assets/png/template1.4.png',
  '/assets/png/template1.5.png',

];

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <h1 className="h1 mt-[50px]">Website Development Onboarding Form</h1> */}
      <div className="flex flex-col mt-[70px] gap-[100px]">
        <Package />
        <Builder />
        <WebsiteType />
        <Carousel imageList={images} />
      </div>
    </div>
  );
};

export default Home;
