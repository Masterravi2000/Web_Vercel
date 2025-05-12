'use client'
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image'
import { FC } from 'react'
import JoinWaitlistModal from '../modal/app'


const SportsCommunitySection: FC = () => {
  useEffect(() => {
    AOS.init
    ({ 
      duration: 1000,
      once:true,
      mirror: true, 
    });
  }, []);
      const [isJoining] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
  
    const handleJoinWaitlist = () => {
      setIsModalOpen(true)
    }
  

    const closeModal = () => {
      setIsModalOpen(false)
    }

  return (
    <div className="mt-24 bg-[#121112] rounded-3xl pt-12 mx-[120px] max-[1496px]:mx-8 max-[900px]:mx-8 max-[800px]:mx-3 max-[700px]:h-fit border-[2px] border-[#303030] flex flex-col gap-y-4" id="community">
    <h1
    className="custom-fade-up text-[3.5rem] text-[#E7E7E7] font-black font-bold text-center leading-[4rem] max-[950px]:text-[2.5rem] max-[950px]  :leading-[3rem] [text-stroke:1px_#000]"
    data-delay="1000"
    data-aos="fade-up"
    >
    The key to unlocking your sports <br /> passion is getting involved!
    </h1>
      <p className="custom-fade-up text-xl text-[#E7E7E7] text-center mt-4 leading-[2rem]" data-delay="200" data-aos="fade-up">
        Discover, explore, and connect with fellow enthusiasts in one of the <br /> largest sports communities designed to fuel your love for sports!
      </p>
      <div className="flex justify-center w-full pt-6">
      <div className="relative w-fit" data-aos="fade-up">
        {/* Green background element */}
        <div className="absolute inset-0 bg-emerald-800 rounded-lg translate-x-2 translate-y-2" />
        
{/* Main button */}
<button 
  onClick={handleJoinWaitlist}
  className="relative bg-white px-6 py-3 rounded-lg border border-black/10 flex items-center gap-4 text-lg font-medium hover:translate-x-1 hover:translate-y-1 transition-transform">
  {isJoining ? 'Joining...' : 'Join Waitlist'}
  <span className="inline-block">
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M5 12H19M19 12L12 5M19 12L12 19" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  </span>
</button>
        </div>
  <JoinWaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
      <div className="relative w-[85%] h-auto mt-16 mx-auto" data-delay="400" data-aos="zoom-in-up">
        <Image
          src="/assets/multiplephone.png"
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

