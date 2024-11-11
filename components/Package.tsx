import Image from "next/image";

const Package = () => {
    return (
  <>
    <section className="flex justify-center items-center flex-col gap-[50px]">
        <h2 className="text-[36px] font-semibold text-start">1. Select Your Package</h2>
      <div className="flex flex-wrap gap-[60px]">
        {/* Card Essential*/}
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

        {/* Card Standard*/}
        <div className="max-w-[370px]">
            {/* whitebackground */}
            <div className="flex flex-col gap-[25px] border border-secondary p-[16px] rounded-tl-[10px] rounded-tr-[10px]">
                <h3 className="text-[32px] font-bold text-secondary text-center">Standard</h3>
                <div>
                <p className="text-[20px] font-normal"><span className="font-semibold">Pages: </span>Up to 5</p>
                <p className="text-[20px] font-normal"><span className="font-semibold">Design: </span>Standard, professional</p>
                <p className="text-[20px] font-normal"><span className="font-semibold">Mobile: </span>Fully mobile-responsive</p>
                </div>
            </div>
           
            {/* yellow background */}
            <div className="flex flex-col justify-center items-left bg-secondary gap-[24px] py-[50px] px-[33px] rounded-bl-[10px] rounded-br-[10px]">
                <div className="flex gap-[16px]">
                    <Image src="/assets/svg/circle.svg" alt="circle" width={30} height={30  }/>
                    <p className="text-[20px] font-semibold text-white">Contact form integration</p>
                </div>
                <div className="flex gap-[16px]">
                    <Image src="/assets/svg/circle.svg" alt="circle" width={30} height={30  }/>
                    <p className="text-[20px] font-semibold text-white">1 Free Business Email (Terms Apply)</p>
                </div>
                <div className="flex gap-[16px]">
                    <Image src="/assets/svg/circle.svg" alt="circle" width={30} height={30  }/>
                    <p className="text-[20px] font-semibold text-white">Advanced SEO Optimization</p>
                </div>
                <div className="flex gap-[16px]">
                    <Image src="/assets/svg/circle.svg" alt="circle" width={30} height={30  }/>
                    <p className="text-[20px] font-semibold text-white">Content Management System (CMS) Integration</p>
                </div>
                <div className="flex gap-[16px]">
                    <Image src="/assets/svg/circle.svg" alt="circle" width={30} height={30  }/>
                    <p className="text-[20px] font-semibold text-white">3 Months Hosting Included</p>
                </div>
                <div className="flex gap-[16px]">
                    <Image src="/assets/svg/circle.svg" alt="circle" width={30} height={30  }/>
                    <p className="text-[20px] font-semibold text-white">1ChatBot integration for 24/7 support</p>
                </div>

            </div>
        </div>

        {/* Premium Standard*/}
        <div className="max-w-[370px]">
            {/* whitebackground */}
            <div className="flex flex-col gap-[25px] border border-accent p-[16px] rounded-tl-[10px] rounded-tr-[10px]">
                <h3 className="text-[32px] font-bold text-accent text-center">Premium</h3>
                <div>
                <p className="text-[20px] font-normal"><span className="font-semibold">Pages: </span>Up to 10</p>
                <p className="text-[20px] font-normal"><span className="font-semibold">Design: </span>Customized design tailored to your brand</p>
                <p className="text-[20px] font-normal"><span className="font-semibold">Mobile: </span>Advanced mobile responsiveness</p>
                </div>
            </div>
           
            {/* yellow background */}
            <div className="flex flex-col justify-center items-left bg-accent gap-[24px] py-[50px] px-[33px] rounded-bl-[10px] rounded-br-[10px]">
                <div className="flex gap-[16px]">
                    <Image src="/assets/svg/circle.svg" alt="circle" width={30} height={30  }/>
                    <p className="text-[20px] font-semibold text-white">Contact form and CMS integration</p>
                </div>
                <div className="flex gap-[16px]">
                    <Image src="/assets/svg/circle.svg" alt="circle" width={30} height={30  }/>
                    <p className="text-[20px] font-semibold text-white">Enhanced SEO setup</p>
                </div>
                <div className="flex gap-[16px]">
                    <Image src="/assets/svg/circle.svg" alt="circle" width={30} height={30  }/>
                    <p className="text-[20px] font-semibold text-white">ChatBot integration for instant support</p>
                </div>
                <div className="flex gap-[16px]">
                    <Image src="/assets/svg/circle.svg" alt="circle" width={30} height={30  }/>
                    <p className="text-[20px] font-semibold text-white">2 Free Business Emails (Terms Apply)</p>
                </div>
                <div className="flex gap-[16px]">
                    <Image src="/assets/svg/circle.svg" alt="circle" width={30} height={30  }/>
                    <p className="text-[20px] font-semibold text-white">Analytics Integration for visitor tracking</p>
                </div>
                <div className="flex gap-[16px]">
                    <Image src="/assets/svg/circle.svg" alt="circle" width={30} height={30  }/>
                    <p className="text-[20px] font-semibold text-white">Content Management System (CMS) Integration</p>
                </div>
                <div className="flex gap-[16px]">
                    <Image src="/assets/svg/circle.svg" alt="circle" width={30} height={30  }/>
                    <p className="text-[20px] font-semibold text-white">Dedicated Project Manager</p>
                </div>
                <div className="flex gap-[16px]">
                    <Image src="/assets/svg/circle.svg" alt="circle" width={30} height={30  }/>
                    <p className="text-[20px] font-semibold text-white">Ongoing Support & Maintenance</p>
                </div>

            </div>
        </div>
        
      </div>
      {/* Customized Package */}
      <div className="border-2 border-darkOrange max-w-[900px] mx-[270px] top-[1338px] left-[270px] items-center">
        <div className="pt-[32px] px-[50px] pb-[20px]">
          <h2 className="text-[32px] font-bold gap-[10px] text-center text-darkOrange mb-[32px]">
            Customized Package
          </h2>
          <p className="text-justify mb-[16px] text-[18px] font-[400px]">
            The Customized package is ideal for clients who prefer a unique,
            fully tailored website that doesn’t rely on a pre-designed template.
            This package is perfect if you have a specific vision for your
            website’s layout, features, and design that goes beyond typical
            templates.
          </p>
          <p className="text-justify mb-[16px] text-[18px] font-[400px]">
            With the customized package, our team will work closely with you to
            create a website from scratch, incorporating your branding, design
            preferences, and any advanced features you need. Here’s what makes
            the Customized package stand out:
          </p>
        </div>
        <div className="bg-darkOrange py-[32px] px-[50px] flex flex-col gap-[16px] text-justify">
          <p className="text-[18px]">
            <span className="font-bold">Fully Custom Design: </span>
            <span className="text-white font-normal">
              Every element of the website is tailored to your specifications,
              giving you complete creative freedom.
            </span>
          </p>
          <p className="text-[18px]">
            <span className="font-bold">Advanced Features: </span>
            <span className="text-white font-normal">
              Whether you need complex functionality, interactive elements, or
              unique integrations, this package accommodates those requirements.
            </span>
          </p>
          <p className="text-[18px]">
            <span className="font-bold">Flexible Layout: </span>
            <span className="text-white font-normal">
              Instead of working within the constraints of a template, you’ll
              have a flexible layout designed specifically to meet your needs.
            </span>
          </p>
          <p className="text-[18px]">
            <span className="font-bold">Hands-On Collaboration: </span>
            <span className="text-white font-normal">
              Our team will provide dedicated support and guidance throughout
              the development process to ensure your website aligns with your
              goals and vision.
            </span>
          </p>
        </div>
      </div>
        
    

        
    </section>;
  </>
    )
    

};

export default Package;
