import Image from "next/image";
const WebsiteType = () => {
    return <section className="mx-[100px]">
        <h2 className="text-[36px] font-semibold">3. Select Your Website Type</h2>

        <div className="flex flex-col justify-center items-center">
            <div className="flex gap-[16px]">
                <Image src="/assets/svg/send-horizontal.svg" alt="send-horizontal" width={40} height={40}/>
                <p className="text-[20px] font-regular max-w-[956px] text-justify"><span className="font-semibold">Business Website:</span> A professional website showcasing company information, services, contact details, and testimonials. Suitable for companies across various industries to establish an online presence.</p>
            </div>
        </div>
    </section>;
};

export default WebsiteType;
