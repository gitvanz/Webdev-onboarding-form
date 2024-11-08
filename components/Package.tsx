import Image from "next/image";

const Package = () => {
    return <section>
        <h2 className="text-[36px] font-semibold">1. Select Your Package</h2>

        {/* Card */}
        <div className="max-w-[370px]">
            {/* whitebackground */}
            <div className="flex flex-col gap-[25px] border border-primary p-[16px] rounded-tl-[10px] rounded-tr-[10px]">
                <h3 className="text-[32px] font-bold text-primary text-center">Essential</h3>
                <div>
                <p className="text-[20px] font-normal"><span className="font-semibold">Pages: </span>Up to 3</p>
                <p className="text-[20px] font-normal"><span className="font-semibold">Design: </span>Basic website design</p>
                <p className="text-[20px] font-normal"><span className="font-semibold">Mobile: </span>Mobile-responsive design</p>
                </div>
            </div>
            
            {/* orange background */}
            <div className="flex flex-col justify-center items-left bg-primary gap-[24px] py-[50px] px-[33px] rounded-bl-[10px] rounded-br-[10px]">
                <div className="flex gap-[16px]">
                    <Image src="/assets/svg/circle.svg" alt="circle" width={30} height={30  }/>
                    <p className="text-[20px] font-semibold text-white">Contact form integration</p>
                </div>
                <div className="flex gap-[16px]">
                    <Image src="/assets/svg/circle.svg" alt="circle" width={30} height={30  }/>
                    <p className="text-[20px] font-semibold text-white">Basic SEO</p>
                </div>
                <div className="flex gap-[16px]">
                    <Image src="/assets/svg/circle.svg" alt="circle" width={30} height={30  }/>
                    <p className="text-[20px] font-semibold text-white">ChatBot integration for 24/7 support</p>
                </div>
                <div className="flex gap-[16px]">
                    <Image src="/assets/svg/circle.svg" alt="circle" width={30} height={30  }/>
                    <p className="text-[20px] font-semibold text-white">1 Free Business Email (Terms Apply)</p>
                </div>
            </div>
        </div>
    </section>;
    

};

export default Package;
