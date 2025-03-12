'use client';
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import JoinWaitlistModal from '../modal/app';

const MainSection: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,
      mirror: false,
    });

    setIsClient(true);
  }, []);

  const handleJoinWaitlist = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const scrollToCommunity = () => {
    const section = document.querySelector('#community');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };  

  if (!isClient) {
    return null;
  }

  return (
<div id="main" className="flex pt-8 justify-between items-center py-0 px-[240px] max-[1496px]:px-10 max-[1090px]:px-14 max-lg:flex-col-reverse bg-black max-lg:px-0 max-[550px]:pt-0 pb-20" data-aos="fade-up">
      <div className="w-fit flex-col justify-center items-center max-md:px-10 max-lg:w-full">
        <h1 className="text-white text-[6rem] max-[1700px]:text-[5rem] font-bold leading-[5.5rem] max-[1360px]:text-6xl max-xl:leading- [4rem] max-[1060px]:text-5xl max-lg:mt-8 max-lg:text-center max-[500px]:text-4xl max-[500px]:text-left max-[460px]:ml-0 tracking-wide">
          Step into <br className="max-lg:hidden" /> the <br className="hidden max-[400px]:block" /> world of <br className="max-lg:hidden" />sports
        </h1>
        <div className="w-[90%] flex justify-between items-center mt-[100px] max-[1700px]:mt-8 lg:flex-col max-lg:mx-auto max-lg:gap-x-8 max-lg:w-[90%] max-[500px]:flex-col max-[500px]:gap-y-5 max-[1060px]:mt-24 max-[600px]:mt-14 max-[600px]:w-full">
          <button
            onClick={handleJoinWaitlist}
            className="hidden lg:block w-full capitalize text-xl text-white bg-[#12956B] px-14 py-3 rounded-[4rem] mt-6 max-[1060px]:px-8 max-lg:w-full max-xl:mt-4 max-[1060px]:py-4 max-[1060px]:text-lg max-[1097px]:mt-0 max-lg:px-2"
          >
            Request early access
          </button>
          <button
            onClick={handleJoinWaitlist}
            className="lg:hidden w-full capitalize rounded-3xl sm:rounded-[4rem] text-lg text-white bg-[#12956B] px-8 py-7 max-[500px]:w-[100%] max-[600px]:py-5 max-[600px]:px-4 max-[500px]:py-2"
          >
            Request early access mobile
          </button>
          <button
            onClick={scrollToCommunity}
            className="w-full text-xl flex items-center justify-center text-white border-white border-2 rounded-[4rem] lg:mt-6 max-lg:w-full max-[1060px]:py-4 max-[600px]:py-2 max-[500px]:border-none max-[500px]:font-medium max-[400px]:w-full max-[400px]:py-0"
          >
            Learn more
            <Image
              src="/svg/down.svg"
              alt="Scroll down"
              width={44}
              height={44}
              className="mt-1 max-[500px]:block"
            />
          </button>
        </div>
      </div>
      <div>
        <Image
          src="/assets/landing.gif"
          alt="Landing Animation"
          width={800}
          height={600}
          className="w-[800px] max-[1700px]:w-[700px] landing rounded-[2rem] max-[1360px]:w-[600px] max-[800px]:rounded-none max-lg:w-[800px] max-[1110px]:w-[550px] max-xl:w-[600px]"
          priority
        />
      </div>

      {/* Popup Modal (only on larger devices) */}
        <JoinWaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default MainSection;
