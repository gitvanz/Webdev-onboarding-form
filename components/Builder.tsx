import Image from "next/image";

const WebsiteType = () => {
return <section className="mx-[100px] flex flex-col">
 
        <h2 className="text-[36px] font-regular"><span className="font-semibold">2.Choose Your Website Builder</span> (Available with All Packages)
            </h2>
            
    <div className="flex flex-col gap-[50px]">
 {/* Wordpress */}
 <div className="flex items-center justify-center gap-[50px]"> 
        <div className="flex flex-col gap-[24px]">
            {/* Wordpress heading */}
        <h3 className="text-[32px] font-semibold">WordPress:</h3>
        {/* Wordpress content */}
            <div>
            <div className="flex gap-[24px]">
                <Image src="/assets/svg/circle-check-big.svg" alt="circle-check-big.svg" width={30} height={30}/>
                <div className="text-[20px] font-semibold">Best for easy content management and scalability</div>
                </div>
            <div className="flex gap-[24px]">
                <Image src="/assets/svg/circle-check-big.svg" alt="circle-check-big.svg" width={30} height={30}/>
                <div className="text-[20px] font-regular"><span className="font-semibold">Extensive plugin library</span> (e.g., e-commerce, booking, SEO)</div>
                </div>
            <div className="flex gap-[24px]">
                <Image src="/assets/svg/circle-check-big.svg" alt="circle-check-big.svg" width={30} height={30}/>
                <div className="text-[20px] font-semibold">Ideal for blogs, business websites, and e-commerce</div>
                </div>
            <div className="flex gap-[24px]">
                <Image src="/assets/svg/circle-check-big.svg" alt="circle-check-big.svg" width={30} height={30}/>
                <div className="text-[20px] font-semibold">Fast setup and updates with a user-friendly backend</div>
                </div>
            </div>
            </div>

            {/* Wordpress Image */}
                <Image src="/assets/png/WordPress.png" alt="WordPress.png" width={400} height={250} className="mx-[768] "/>
    </div>

         {/* Frontend */}
         <div className="flex items-center justify-center gap-[50px]"> 
        <div className="flex flex-col">
            {/* Wordpress heading */}
        <h3 className="text-[32px] font-semibold">WordPress:</h3>
        {/* Wordpress content */}
            <div>
            <div className="flex gap-[24px]">
                <Image src="/assets/svg/circle-check-big.svg" alt="circle-check-big.svg" width={30} height={30}/>
                <div className="text-[20px] font-semibold">Best for easy content management and scalability</div>
                </div>
            <div className="flex gap-[24px]">
                <Image src="/assets/svg/circle-check-big.svg" alt="circle-check-big.svg" width={30} height={30}/>
                <div className="text-[20px] font-regular"><span className="font-semibold">Extensive plugin library</span> (e.g., e-commerce, booking, SEO)</div>
                </div>
            <div className="flex gap-[24px]">
                <Image src="/assets/svg/circle-check-big.svg" alt="circle-check-big.svg" width={30} height={30}/>
                <div className="text-[20px] font-semibold">Ideal for blogs, business websites, and e-commerce</div>
                </div>
            <div className="flex gap-[24px]">
                <Image src="/assets/svg/circle-check-big.svg" alt="circle-check-big.svg" width={30} height={30}/>
                <div className="text-[20px] font-semibold">Fast setup and updates with a user-friendly backend</div>
                </div>
            </div>
            </div>

            {/* Wordpress Image */}
                <Image src="/assets/png/WordPress.png" alt="WordPress.png" width={400} height={250} className="mx-[768] "/>
    </div>
    </div>
    
                
</section>;

        
};

export default WebsiteType;
