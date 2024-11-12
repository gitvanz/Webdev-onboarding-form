import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen font-title mx-[2rem]">
            <div className="flex flex-col justify-center items-center gap-[58px]">
                <Link href="/">
                    <Image
                        src="/assets/svg/logo.svg"
                        alt="logo"
                        width={350}
                        height={250}
                    />
                </Link>

                <div className="flex flex-col justify-center items-center gap-[24px]">
                    <Image
                        src="/assets/svg/success.svg"
                        alt="success"
                        width={100}
                        height={100}
                    />

                    <div className="flex flex-col justify-center items-center gap-[10px]">
                        <h4 className="font-medium xs:text-[1.5rem] text-[1.25rem] text-center">
                            <span className="font-semibold text-primary">
                                Congratulations!
                            </span>{' '}
                            Your Website onboarding form has been successfully
                            submitted.
                        </h4>
                        <p className="xs:text-[1.25rem] text-[1rem] text-gray-400 text-center">
                            We will be in touch shortly to confirm.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
