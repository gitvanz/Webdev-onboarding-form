import Builder from '@/components/Builder';
import Package from '@/components/Package';
import WebsiteType from '@/components/WebsiteType';
import CustomForm from '@/components/forms/CustomForm';

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="h1 mt-[50px]">
                Website Development Onboarding Form
            </h1>
            <div className="flex flex-col mt-[70px] gap-[100px]">
                <Package />
                <Builder />
                <WebsiteType />
                <CustomForm />
            </div>
        </div>
    );
};

export default Home;
