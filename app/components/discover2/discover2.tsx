'use client'
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image'
import { FC } from 'react'
import JoinWaitlistModal from '../modal/app'
import { BsDownload } from "react-icons/bs";


type Props = {
    onDownloadClick: () => void;
};

const SportsCommunitySection: FC<Props> = ({ onDownloadClick }) => {
    useEffect(() => {
        AOS.init
            ({
                duration: 1000,
                once: true,
                mirror: true,
            });
    }, []);
    const [isJoining] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)


    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="mt-10 bg-[#111111] rounded-2xl pt-20 mx-[120px] max-[1496px]:mx-8 max-[900px]:mx-8 max-[800px]:mx-3 max-[700px]:h-fit border-[2px] border-[#3D3D3D] flex flex-col gap-y-4" id="community">

            {/* for web and tab screens */}
            <div className="hidden md:block">
                <h1
                    className="custom-fade-up text-[3.5rem] text-[#E7E7E7] font-black font-bold text-center leading-[4rem] max-[950px]:text-[2.5rem] max-[950px]:leading-[3rem] [text-stroke:1px_#000]"
                    data-delay="1000"
                    data-aos="fade-up"
                >
                    The key to unlocking your sports <br /> passion is getting involved!
                </h1>
                <p
                    className="custom-fade-up text-xl text-[#E7E7E7] text-center mt-4 leading-[2rem]"
                    data-delay="200"
                    data-aos="fade-up"
                >
                    Discover, explore, and connect with fellow enthusiasts in one of the <br /> largest sports communities designed to fuel your love for sports!
                </p>
            </div>

            {/* // for phones screen */}
            <div className="block md:hidden px-4">
                <h1
                    className="text-[1.8rem] font-[900] text-[#E7E7E7] font-black text-center leading-[2.5rem]"
                    data-delay="1000"
                    data-aos="fade-up"
                >
                    The coolest space for<br /> all things sports!
                </h1>
                <p
                    className="text-xs text-[#E7E7E7] text-center mt-4 leading-[1.75rem]"
                    data-delay="200"
                    data-aos="fade-up"
                >
                    The key to unlocking your sports <br /> passion is getting involved
                </p>
            </div>


            <div className="flex justify-center w-full pt-12">
                <div className="relative w-fit" data-aos="fade-up">
                    {/* Green background element */}
                    <div className="absolute inset-0 bg-emerald-800 rounded-lg translate-x-2 translate-y-2" />

                    {/* Main button */}
                    {/* for web and tab */}
                    <div className="hidden md:block">
                        <button
                            onClick={onDownloadClick}
                            className="relative bg-white px-6 py-3 rounded-md border text-black border-black/10 flex items-center gap-4 text-lg font-semibold hover:translate-x-1 hover:translate-y-1 transition-transform">
                            {isJoining ? 'Joining...' : 'Download Beta'}
                            <BsDownload className="text-xl" />
                        </button>
                    </div>

                    {/* for phone  */}
                    <div className="block md:hidden">
                        <button
                            onClick={onDownloadClick}
                            className="relative bg-white px-6 py-3 rounded-md border text-black border-black/10 flex items-center gap-4 text-sm font-semibold hover:translate-x-1 hover:translate-y-1 transition-transform">
                            {isJoining ? 'Joining...' : 'Download Beta'}
                            <BsDownload className="text-xl" />
                        </button>
                    </div>
                </div>
                <JoinWaitlistModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
            <div className="relative w-[100%] h-auto mt-12 mx-auto">
                <Image
                    src="/assets/phonesSet.png"
                    alt="Multiple phones"
                    layout="responsive"
                    width={100}
                    height={100}
                    className="custom-fade-in"
                />
            </div>
        </div>
    )
}

export default SportsCommunitySection

