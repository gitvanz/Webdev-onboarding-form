import Image from "next/image";

const WebsiteType = () => {
  return (
    <section className="flex flex-col justify-center items-end md:mx-[32px] mx-[10px]">
      <div className="flex flex-col gap-[50px]">
        <h2 className="sm:text-[36px] text-[24px] font-bold md:text-start text-center">
          2. Choose Your Website Builder{" "}
          <span className="font-normal">(Available with All Packages)</span>
        </h2>

        <div className="flex justify-center items-center flex-col gap-[50px]">
          {/* Wordpress */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-[50px]">
            <div className="flex flex-col gap-[24px] max-w-[446px]">
              {/* Wordpress heading */}
              <h3 className="md:text-[32px] sm:text-[28px] text-[20px] font-semibold">
                WordPress:
              </h3>
              {/* Wordpress content */}
              <div className="flex flex-col md:gap-[16px] gap-[10px]">
                <div className="flex gap-[16px]">
                  <Image
                    src="/assets/svg/circle-check-big.svg"
                    alt="circle-check-big.svg"
                    width={30}
                    height={30}
                  />
                  <div className="sm:text-[20px] text-[16px] font-semibold">
                    Best for easy content management and scalability
                  </div>
                </div>

                <div className="sm:text-[16px] text-[10px] flex gap-[16px]">
                  <Image
                    src="/assets/svg/circle-check-big.svg"
                    alt="circle-check-big.svg"
                    width={30}
                    height={30}
                  />
                  <div className="sm:text-[20px] text-[16px] font-semibold">
                    Extensive plugin library
                    <span className="sm:text-[20px] text-[16px] font-normal">
                      (e.g., e-commerce, booking, SEO)
                    </span>
                  </div>
                </div>

                <div className="sm:text-[16px] text-[10px] flex gap-[16px]">
                  <Image
                    src="/assets/svg/circle-check-big.svg"
                    alt="circle-check-big.svg"
                    width={30}
                    height={30}
                  />
                  <div className="sm:text-[20px] text-[16px] font-semibold">
                    Ideal for blogs, business websites, and e-commerce
                  </div>
                </div>

                <div className="sm:text-[16px] text-[10px] flex gap-[16px]">
                  <Image
                    src="/assets/svg/circle-check-big.svg"
                    alt="circle-check-big.svg"
                    width={30}
                    height={30}
                  />
                  <div className="sm:text-[20px] text-[16px] font-semibold">
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
            />
          </div>

          {/* Frontend */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-[50px]">
            {/* Frontend Image */}
            <Image
              src="/assets/png/WordPress2.png"
              alt="WordPress2.png"
              width={400}
              height={250}
            />

            <div className="flex flex-col gap-[24px] max-w-[454px]">
              {/* Frontend heading */}
              <div className="flex flex-col gap-[12px]">
                <h3 className="md:text-[32px] sm:text-[28px] text-[20px] font-semibold">
                  Front-end Framework{" "}
                  <span className="md:text-[32px] sm:text-[28px] text-[20px] font-normal">
                    {" "}
                    (Fully Coded)
                  </span>
                </h3>
                <p className="sm:text-[20px] text-[15px]">
                  (Additional Fee & Lead Time Based on Requirements){" "}
                </p>
              </div>

              {/* Frontend content */}
              <div className="flex flex-col gap-[16px]">
                <div className="sm:text-[16px] text-[10px] flex gap-[16px]">
                  <Image
                    src="/assets/svg/circle-check-big.svg"
                    alt="circle-check-big.svg"
                    width={30}
                    height={30}
                  />
                  <div className="sm:text-[20px] text-[16px] font-semibold">
                    Best for easy content management and scalability
                  </div>
                </div>

                <div className="sm:text-[16px] text-[10px] flex gap-[16px]">
                  <Image
                    src="/assets/svg/circle-check-big.svg"
                    alt="circle-check-big.svg"
                    width={30}
                    height={30}
                  />
                  <div className="sm:text-[20px] text-[16px] font-semibold">
                    Extensive plugin library
                    <span className="sm:text-[20px] text-[16px] font-normal">
                      (e.g., e-commerce, booking, SEO)
                    </span>
                  </div>
                </div>

                <div className="sm:text-[16px] text-[10px] flex gap-[16px]">
                  <Image
                    src="/assets/svg/circle-check-big.svg"
                    alt="circle-check-big.svg"
                    width={30}
                    height={30}
                  />
                  <div className="sm:text-[20px] text-[16px] font-semibold">
                    Ideal for blogs, business websites, and e-commerce
                  </div>
                </div>

                <div className="sm:text-[16px] text-[10px] flex gap-[16px]">
                  <Image
                    src="/assets/svg/circle-check-big.svg"
                    alt="circle-check-big.svg"
                    width={30}
                    height={30}
                  />
                  <div className="sm:text-[20px] text-[16px] font-semibold">
                    Fast setup and updates with a user-friendly backend
                  </div>
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
