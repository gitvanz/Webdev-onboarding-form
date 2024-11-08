import Image from "next/image";
const WebsiteType = () => {
  return (
    <section className=" flex flex-col justify-center items-center w-full">
        <div className="grid gap-[54px]">
        <h2 className="text-[15px] sm:text-[24px] md:text-[36px] font-semibold">
                3. Select Your Website Type
            </h2>

    <div className="flex flex-col justify-center items-center gap-[24px] max-w-[956px]">
        <div className="flex sm:gap-[16px] gap-[10px]">
            <Image
              src="/assets/svg/send-horizontal.svg"
              alt="send-horizontal"
              width={40}
              height={40}
              className="sm:w-[40px] w-[30px]"
            />
            <p className="sm:text-[20px] text-[16px] font-regular max-w-[956px] text-justify">
              <span className="font-semibold">Business Website:</span> A
              professional website showcasing company information, services,
              contact details, and testimonials. Suitable for companies across
              various industries to establish an online presence.
            </p>
          </div>


          <div className="flex sm:gap-[16px] gap-[10px]">
            <Image
              src="/assets/svg/send-horizontal.svg"
              alt="send-horizontal"
              width={40}
              height={40}
              className="sm:w-[40px] w-[30px]"
            />
            <p className="sm:text-[20px] text-[16px] font-regular max-w-[956px] text-justify">
              <span className="font-semibold">E-commerce Website:</span> An
              online store designed for selling products or services, with
              features like product listings, shopping cart, checkout, and
              secure payment gateways.
            </p>
          </div>



          <div className="flex sm:gap-[16px] gap-[10px]">
            <Image
              src="/assets/svg/send-horizontal.svg"
              alt="send-horizontal"
              width={40}
              height={40}
              className="sm:w-[40px] w-[30px]"
            />
            <p className="sm:text-[20px] text-[16px] font-regular max-w-[956px] text-justify">
              <span className="font-semibold">Portfolio Website:</span> A visual
              site for creative professionals (e.g., artists, photographers,
              designers) to display their work, case studies, and skills, often
              with gallery or showcase sections.
            </p>
          </div>



          <div className="flex sm:gap-[16px] gap-[10px]">
            <Image
              src="/assets/svg/send-horizontal.svg"
              alt="send-horizontal"
              width={40}
              height={40}
              className="sm:w-[40px] w-[30px]"
            />
            <p className="sm:text-[20px] text-[16px] font-regular max-w-[956px] text-justify">
              <span className="font-semibold">Blog/Content Website:</span>{" "}
              Primarily for sharing articles, news, or updates. Commonly used by
              bloggers, media companies, or organizations aiming to provide
              regular content and engage with readers.
            </p>
          </div>



          <div className="flex sm:gap-[16px] gap-[10px]">
            <Image
              src="/assets/svg/send-horizontal.svg"
              alt="send-horizontal"
              width={40}
              height={40}
              className="sm:w-[40px] w-[30px]"
            />
            <p className="sm:text-[20px] text-[16px] font-regular max-w-[956px] text-justify">
              <span className="font-semibold">Landing Page:</span> A single-page
              website focused on a specific goal or call to action, such as
              collecting leads, promoting an event, or launching a product.
            </p>
          </div>



          <div className="flex sm:gap-[16px] gap-[10px]">
            <Image
              src="/assets/svg/send-horizontal.svg"
              alt="send-horizontal"
              width={40}
              height={40}
              className="sm:w-[40px] w-[30px]"
            />
            <p className="sm:text-[20px] text-[16px] font-regular max-w-[956px] text-justify">
              <span className="font-semibold">Educational Website:</span>{" "}
              Provides learning materials, courses, and resources. Ideal for
              schools, online course providers, or anyone offering educational
              content.
            </p>
          </div>



          <div className="flex sm:gap-[16px] gap-[10px]">
            <Image
              src="/assets/svg/send-horizontal.svg"
              alt="send-horizontal"
              width={40}
              height={40}
              className="sm:w-[40px] w-[30px]"
            />
            <p className="sm:text-[20px] text-[16px] font-regular max-w-[956px] text-justify">
              <span className="font-semibold">Nonprofit/Charity Website:</span>{" "}
              Created for organizations aiming to raise awareness, gather
              donations, and share information about causes, events, and
              initiatives.
            </p>
          </div>



          <div className="flex sm:gap-[16px] gap-[10px]">
            <Image
              src="/assets/svg/send-horizontal.svg"
              alt="send-horizontal"
              width={40}
              height={40}
              className="sm:w-[40px] w-[30px]"
            />
            <p className="sm:text-[20px] text-[16px] font-regular max-w-[956px] text-justify">
              <span className="font-semibold">Membership Website:</span> Offers
              gated content, exclusive resources, or community features
              accessible only to registered or paid members. Common for clubs,
              associations, and online communities.
            </p>
          </div>



          <div className="flex sm:gap-[16px] gap-[10px]">
            <Image
              src="/assets/svg/send-horizontal.svg"
              alt="send-horizontal"
              width={40}
              height={40}
              className="sm:w-[40px] w-[30px]"
            />
            <p className="sm:text-[20px] text-[16px] font-regular max-w-[956px] text-justify">
              <span className="font-semibold">News/Media Website:</span> Focused
              on delivering news, articles, and multimedia content on various
              topics. Often has dynamic content updates and organized by
              categories or themes.
            </p>
          </div>



          <div className="flex sm:gap-[16px] gap-[10px]">
            <Image
              src="/assets/svg/send-horizontal.svg"
              alt="send-horizontal"
              width={40}
              height={40}
              className="sm:w-[40px] w-[30px]"
            />
            <p className="sm:text-[20px] text-[16px] font-regular max-w-[956px] text-justify">
              <span className="font-semibold">Web Application:</span> A more
              interactive website with custom functionalities for user
              engagement. Ideal for SaaS businesses, customer portals, or any
              interactive user-driven experiences.
            </p>
          </div>
        </div>
    </div>
           
          
    

    </section>
  );
};

export default WebsiteType;
