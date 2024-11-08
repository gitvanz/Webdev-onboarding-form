import Image from "next/image";

const WebsiteType = () => {
  return (
    <section className="mx-[171px] flex flex-col w-[1098px] h-[1003px]">
      <h2 className="text-[36px] font-regular w-[1098px] h-[54px]">
        <span className="font-semibold">2. Choose Your Website Builder</span>{" "}
        (Available with All Packages)
      </h2>

      <div className="flex flex-col gap-[50px] w-[964px] h-[899px] mx-[64px] mt-[50px]">
        {/* Wordpress */}
        <div className="flex items-center justify-center gap-[50px]  w-[964px] h-[360px]">
          <div className="flex flex-col gap-[24px] ml-[36px] w-[446px] h-[360px]">
            {/* Wordpress heading */}
            <h3 className="text-[32px] font-semibold">WordPress:</h3>
            {/* Wordpress content */}
            <div className="flex flex-col gap-[16px]">
              <div className="flex gap-[24px]">
                <Image
                  src="/assets/svg/circle-check-big.svg"
                  alt="circle-check-big.svg"
                  width={30}
                  height={30}
                />
                <div className="text-[20px] font-semibold">
                  Best for easy content management and scalability
                </div>
              </div>
              <div className="flex gap-[24px]">
                <Image
                  src="/assets/svg/circle-check-big.svg"
                  alt="circle-check-big.svg"
                  width={30}
                  height={30}
                />
                <div className="text-[20px] font-regular">
                  <span className="font-semibold">
                    Extensive plugin library
                  </span>{" "}
                  (e.g., e-commerce, booking, SEO)
                </div>
              </div>
              <div className="flex gap-[24px]">
                <Image
                  src="/assets/svg/circle-check-big.svg"
                  alt="circle-check-big.svg"
                  width={30}
                  height={30}
                />
                <div className="text-[20px] font-semibold">
                  Ideal for blogs, business websites, and e-commerce
                </div>
              </div>
              <div className="flex gap-[24px]">
                <Image
                  src="/assets/svg/circle-check-big.svg"
                  alt="circle-check-big.svg"
                  width={30}
                  height={30}
                />
                <div className="text-[20px] font-semibold w-[446px] h-[60px]">
                  Fast setup and updates with a user-friendly backend
                </div>
              </div>
            </div>
          </div>

          {/* Wordpress Image */}
          <Image
            src="/assets/png/WordPress.png"
            alt="WordPress.png"
            width={400}
            height={250}
            className="mr-[34px] ml-[50px]"
          />
        </div>

        {/* Frontend */}
        <div className="flex items-center justify-center gap-[50px] w-[964px] h-[489px]">
          {/* Frontend Image */}
          <Image
            src="/assets/png/WordPress2.png"
            alt="WordPress2.png"
            width={400}
            height={250}
            className="ml-[30px] "
          />

          <div className="flex flex-col gap-[24px] w-[454px] h-[489px] mr-[30px]">
            {/* Frontend heading */}
            <div className="flex flex-col gap-[12px]">
              <h3 className="text-[32px] font-regular">
                <span className="font-semibold">Front-end Framework</span>{" "}
                (Fully Coded)
              </h3>
              <div className="text-[20px] font-regular">
                (Additional Fee & Lead Time Based on Requirements){" "}
              </div>
            </div>
            {/* Frontend content */}
            <div className="flex flex-col gap-[16px] mr-[30px] mt-[24px]">
              <div className="flex gap-[24px]">
                <Image
                  src="/assets/svg/circle-check-big.svg"
                  alt="circle-check-big.svg"
                  width={30}
                  height={30}
                />
                <div className="text-[20px] font-semibold">
                  Best for easy content management and scalability
                </div>
              </div>
              <div className="flex gap-[24px]">
                <Image
                  src="/assets/svg/circle-check-big.svg"
                  alt="circle-check-big.svg"
                  width={30}
                  height={30}
                />
                <div className="text-[20px] font-regular">
                  <span className="font-semibold">
                    Extensive plugin library
                  </span>{" "}
                  (e.g., e-commerce, booking, SEO)
                </div>
              </div>
              <div className="flex gap-[24px]">
                <Image
                  src="/assets/svg/circle-check-big.svg"
                  alt="circle-check-big.svg"
                  width={30}
                  height={30}
                />
                <div className="text-[20px] font-semibold">
                  Ideal for blogs, business websites, and e-commerce
                </div>
              </div>
              <div className="flex gap-[24px]">
                <Image
                  src="/assets/svg/circle-check-big.svg"
                  alt="circle-check-big.svg"
                  width={30}
                  height={30}
                />
                <div className="text-[20px] font-semibold">
                  Fast setup and updates with a user-friendly backend
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteType;
