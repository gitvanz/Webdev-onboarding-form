import Image from 'next/image';

const Package = () => {
    return (
        <section className="flex flex-col gap-[50px]">
            <h2 className="text-[36px] font-semibold">
                1. Select Your Package
            </h2>

            <div className="flex flex-wrap gap-[60px]">
                {/* Card Essential*/}
                <div className="max-w-[370px]">
                    {/* whitebackground */}
                    <div className="flex flex-col gap-[25px] border border-primary p-[16px] rounded-tl-[10px] rounded-tr-[10px]">
                        <h3 className="text-[32px] font-bold text-primary text-center">
                            Essential
                        </h3>
                        <div>
                            <p className="text-[20px] font-normal">
                                <span className="font-semibold">Pages: </span>Up
                                to 3
                            </p>
                            <p className="text-[20px] font-normal">
                                <span className="font-semibold">Design: </span>
                                Basic website design
                            </p>
                            <p className="text-[20px] font-normal">
                                <span className="font-semibold">Mobile: </span>
                                Mobile-responsive design
                            </p>
                        </div>
                    </div>

                    {/* orange background */}
                    <div className="flex flex-col justify-center items-left bg-primary gap-[24px] py-[50px] px-[33px] rounded-bl-[10px] rounded-br-[10px]">
                        <div className="flex gap-[16px]">
                            <Image
                                src="/assets/svg/circle.svg"
                                alt="circle"
                                width={30}
                                height={30}
                            />
                            <p className="text-[20px] font-semibold text-white">
                                Contact form integration
                            </p>
                        </div>
                        <div className="flex gap-[16px]">
                            <Image
                                src="/assets/svg/circle.svg"
                                alt="circle"
                                width={30}
                                height={30}
                            />
                            <p className="text-[20px] font-semibold text-white">
                                Basic SEO
                            </p>
                        </div>
                        <div className="flex gap-[16px]">
                            <Image
                                src="/assets/svg/circle.svg"
                                alt="circle"
                                width={30}
                                height={30}
                            />
                            <p className="text-[20px] font-semibold text-white">
                                ChatBot integration for 24/7 support
                            </p>
                        </div>
                        <div className="flex gap-[16px]">
                            <Image
                                src="/assets/svg/circle.svg"
                                alt="circle"
                                width={30}
                                height={30}
                            />
                            <p className="text-[20px] font-semibold text-white">
                                1 Free Business Email (Terms Apply)
                            </p>
                        </div>
                    </div>
                </div>

                {/* Card Standard*/}
                <div className="max-w-[370px]">
                    {/* whitebackground */}
                    <div className="flex flex-col gap-[25px] border border-secondary p-[16px] rounded-tl-[10px] rounded-tr-[10px]">
                        <h3 className="text-[32px] font-bold text-secondary text-center">
                            Standard
                        </h3>
                        <div>
                            <p className="text-[20px] font-normal">
                                <span className="font-semibold">Pages: </span>Up
                                to 5
                            </p>
                            <p className="text-[20px] font-normal">
                                <span className="font-semibold">Design: </span>
                                Standard, professional
                            </p>
                            <p className="text-[20px] font-normal">
                                <span className="font-semibold">Mobile: </span>
                                Fully mobile-responsive
                            </p>
                        </div>
                    </div>

                    {/* yellow background */}
                    <div className="flex flex-col justify-center items-left bg-secondary gap-[24px] py-[50px] px-[33px] rounded-bl-[10px] rounded-br-[10px]">
                        <div className="flex gap-[16px]">
                            <Image
                                src="/assets/svg/circle.svg"
                                alt="circle"
                                width={30}
                                height={30}
                            />
                            <p className="text-[20px] font-semibold text-white">
                                Contact form integration
                            </p>
                        </div>
                        <div className="flex gap-[16px]">
                            <Image
                                src="/assets/svg/circle.svg"
                                alt="circle"
                                width={30}
                                height={30}
                            />
                            <p className="text-[20px] font-semibold text-white">
                                1 Free Business Email (Terms Apply)
                            </p>
                        </div>
                        <div className="flex gap-[16px]">
                            <Image
                                src="/assets/svg/circle.svg"
                                alt="circle"
                                width={30}
                                height={30}
                            />
                            <p className="text-[20px] font-semibold text-white">
                                Advanced SEO Optimization
                            </p>
                        </div>
                        <div className="flex gap-[16px]">
                            <Image
                                src="/assets/svg/circle.svg"
                                alt="circle"
                                width={30}
                                height={30}
                            />
                            <p className="text-[20px] font-semibold text-white">
                                Content Management System (CMS) Integration
                            </p>
                        </div>
                        <div className="flex gap-[16px]">
                            <Image
                                src="/assets/svg/circle.svg"
                                alt="circle"
                                width={30}
                                height={30}
                            />
                            <p className="text-[20px] font-semibold text-white">
                                3 Months Hosting Included
                            </p>
                        </div>
                        <div className="flex gap-[16px]">
                            <Image
                                src="/assets/svg/circle.svg"
                                alt="circle"
                                width={30}
                                height={30}
                            />
                            <p className="text-[20px] font-semibold text-white">
                                1ChatBot integration for 24/7 support
                            </p>
                        </div>
                    </div>
                </div>

                {/* Premium Standard*/}
                <div className="max-w-[370px]">
                    {/* whitebackground */}
                    <div className="flex flex-col gap-[25px] border border-accent p-[16px] rounded-tl-[10px] rounded-tr-[10px]">
                        <h3 className="text-[32px] font-bold text-accent text-center">
                            Premium
                        </h3>
                        <div>
                            <p className="text-[20px] font-normal">
                                <span className="font-semibold">Pages: </span>Up
                                to 10
                            </p>
                            <p className="text-[20px] font-normal">
                                <span className="font-semibold">Design: </span>
                                Customized design tailored to your brand
                            </p>
                            <p className="text-[20px] font-normal">
                                <span className="font-semibold">Mobile: </span>
                                Advanced mobile responsiveness
                            </p>
                        </div>
                    </div>

                    {/* yellow background */}
                    <div className="flex flex-col justify-center items-left bg-accent gap-[24px] py-[50px] px-[33px] rounded-bl-[10px] rounded-br-[10px]">
                        <div className="flex gap-[16px]">
                            <Image
                                src="/assets/svg/circle.svg"
                                alt="circle"
                                width={30}
                                height={30}
                            />
                            <p className="text-[20px] font-semibold text-white">
                                Contact form and CMS integration
                            </p>
                        </div>
                        <div className="flex gap-[16px]">
                            <Image
                                src="/assets/svg/circle.svg"
                                alt="circle"
                                width={30}
                                height={30}
                            />
                            <p className="text-[20px] font-semibold text-white">
                                Enhanced SEO setup
                            </p>
                        </div>
                        <div className="flex gap-[16px]">
                            <Image
                                src="/assets/svg/circle.svg"
                                alt="circle"
                                width={30}
                                height={30}
                            />
                            <p className="text-[20px] font-semibold text-white">
                                ChatBot integration for instant support
                            </p>
                        </div>
                        <div className="flex gap-[16px]">
                            <Image
                                src="/assets/svg/circle.svg"
                                alt="circle"
                                width={30}
                                height={30}
                            />
                            <p className="text-[20px] font-semibold text-white">
                                2 Free Business Emails (Terms Apply)
                            </p>
                        </div>
                        <div className="flex gap-[16px]">
                            <Image
                                src="/assets/svg/circle.svg"
                                alt="circle"
                                width={30}
                                height={30}
                            />
                            <p className="text-[20px] font-semibold text-white">
                                Analytics Integration for visitor tracking
                            </p>
                        </div>
                        <div className="flex gap-[16px]">
                            <Image
                                src="/assets/svg/circle.svg"
                                alt="circle"
                                width={30}
                                height={30}
                            />
                            <p className="text-[20px] font-semibold text-white">
                                Content Management System (CMS) Integration
                            </p>
                        </div>
                        <div className="flex gap-[16px]">
                            <Image
                                src="/assets/svg/circle.svg"
                                alt="circle"
                                width={30}
                                height={30}
                            />
                            <p className="text-[20px] font-semibold text-white">
                                Dedicated Project Manager
                            </p>
                        </div>
                        <div className="flex gap-[16px]">
                            <Image
                                src="/assets/svg/circle.svg"
                                alt="circle"
                                width={30}
                                height={30}
                            />
                            <p className="text-[20px] font-semibold text-white">
                                Ongoing Support & Maintenance
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Package;
