'use client'
import Image from 'next/image'
import { useState } from 'react'
import './style.css'
import JoinWaitlistModal2 from '../modal2/app'

export default function CommunityWelcome() {
  const [isJoining] = useState(false)
  const [isModalOpen2, setIsModalOpen2] = useState(false)

  const handleJoinWaitlist2 = () => {
    setIsModalOpen2(true)
  }

  const closeModal2 = () => {
    setIsModalOpen2(false)
  }

  return (
    <div className="py-24 relative bg-black overflow-hidden">
      <Image
        src="/assets/left.gif"
        alt="Left animation"
        className="absolute z-10 top-[200px] left-0 max-[1496px]:w-[600px] w-[700px] h-[80px] max-[850px]:h-[50px] max-[850px]:w-[450px] max-[540px]:w-[400px] max-[540px]:h-[50px] max-[460px]:left-[-20px]"
        width={700}
        height={80}
      />
      <Image
        src="/assets/right.gif"
        alt="Right animation"
        className="absolute z-10 top-[200px] right-0 max-[1496px]:w-[600px] w-[700px] h-[80px] max-[850px]:h-[50px] max-[850px]:w-[450px] max-[540px]:w-[400px] max-[540px]:h-[50px] max-[460px]:w-[300px] max-[460px]:h-[40px] max-[460px]:right-[-20px]"
        width={700}
        height={80}
      />
      <Image 
      className="absolute z-10 top-[250px] left-0 w-[450px] hidden max-[850px]:block max-[540px]:w-[400px] max-[540px]:h-[50px]" data-delay="100" 
      src="/assets/blacksports.gif" 
      alt=""
      width={700}
      height={80}
      />
      <Image 
      className="absolute z-10 top-[250px] right-0 w-[450px] hidden max-[850px]:block max-[540px]:w-[400px] max-[540px]:h-[50px] max-[460px]:right-[-120px]" 
      data-delay="100" 
      src="/assets/greensports.gif" 
      alt=""
      width={700}
      height={80}
      />
      <div className="mx-auto relative overflow-hidden z-20 w-[370px] flex flex-col border-t-[3px] border-l-[3px] border-r-[3px] border-[#3A3A3A] rounded-t-[60px] px-8 py-10 bg-black max-[560px]:w-[340px] max-[440px]:w-[270px] max-[400px]:w-[200px] max-[400px]:px-6 max-[400px]:py-4 max-[400px]:rounded-t-[30px] max-[400px]:pr-4 relative">
        <Image
          src="/svg/Ellipse_31.svg"
          alt="Background ellipse"
          className="absolute z-20 w-[500px] h-[270px] top-[-10px] left-[0px]"
          width={500}
          height={270}
        />
        <h1 className="relative z-30 text-white text-2xl mt-6 max-[440px]:text-xl max-[400px]:leading-normal max-[400px]:text-sm max-[400px]:mt-4" style={{ fontFamily: 'Krona One' }}>
          The community welcomes <br className="max-[400px]:block hidden" /> you!
        </h1>
        <p className="relative z-30 text-gray-400 text-sm font-thin mt-8 max-[400px]:text-[10px] max-[400px]:mt-4 max-sm:leading-snug">
          Discover the power of a united sports community where we achieve more together than we ever could alone!
        </p>
        <div className="w-full mt-8 flex justify-start">
  <div className="relative w-fit">
    {/* Green background element */}
    <div className="absolute inset-0 bg-emerald-800 rounded-md translate-x-2 translate-y-2" />

    {/* Main button */}
    <button
      onClick={handleJoinWaitlist2}
      disabled={isJoining}
      className="relative bg-white px-6 py-2 rounded-md border border-black/10 flex items-center gap-4 text-base font-medium hover:translate-x-1 hover:translate-y-1 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isJoining ? 'Downloading...' : 'Download'}
      {!isJoining && (
        <span className="inline-block">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="max-[440px]:w-[20px]"
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
      )}
    </button>
  </div>
</div>
  </div>
  <JoinWaitlistModal2 isOpen={isModalOpen2} onClose={closeModal2} />
    </div>
  )
}
