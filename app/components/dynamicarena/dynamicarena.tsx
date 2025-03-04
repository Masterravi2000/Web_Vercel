'use client'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image'
import { FC } from 'react'

const DynamicArena: FC = () => {
  useEffect(() => {
    AOS.init
    ({ 
      duration: 1000,
      once:true,
      mirror: true, 
    });
  }, []);
  return (
    <div className="w-full py-4 mt-24 px-[120px] max-[1496px]:px-8 max-[900px]:px-8 max-[800px]:px-3 max-md:px-5">
      <div className="flex overflow-hidden max-[930px]:flex-col-reverse">
        <div className="p-8 relative w-[40%] h-[500px] max-[1250px]:h-[450px] max-lg:h-[400px] bg-white rounded-l-[3.5rem] overflow-hidden max-[930px]:rounded-b-3xl max-[930px]:rounded-tl-none max-[930px]:w-full max-[930px]:h-[300px] max-[400px]:h-[270px] max-[530px]:p-0">
          <Image
            className="w-full absolute top-0 left-0 z-30 h-full object-cover max-lg:h-full max-[930px]:hidden"
            src="/assets/ellipse_container_4xl.webp"
            alt=""
            layout="fill"
          />
          <Image
            className="hidden w-full absolute top-0 left-0 z-30 h-full object-cover max-lg:h-full max-[930px]:block max-[530px]:hidden"
            src="/assets/ellipse_container_4xl.webp"
            alt=""
            layout="fill"
          />
          <Image
            className="hidden max-[530px]:w-full max-[530px]:h-full max-[530px]:object-cover max-[530px]:block"
            src="/assets/ellipse_container_4xl.webp"
            alt=""
            layout="fill"
          />
          <h1 
            data-aos="fade-up" 
            data-aos-offset="200" 
            data-aos-delay="100" 
            data-aos-duration="800" 
            className="relative z-40 max-[530px]:absolute max-[530px]:top-8 max-[530px]:left-4 text-[2.8rem] leading-snug max-[1140px]:text-[2.5rem] max-[533px]:text-[2rem] max-[400px]:text-[1.8rem] max-[370px]:text-xl max-lg:text-[2rem] text-black font-bold" 
            style={{ fontFamily: 'Krona One' }}>
            Coolest space <br /> for all things <br /> sports!
          </h1>
          <div className="z-40 absolute bottom-4 left-8 flex items-center gap-2 max-[400px]:left-4">
            <a href="/about">
            <button 
              data-aos="fade-right" 
              data-aos-offset="50" 
              data-aos-delay="500" 
              data-aos-duration="800" 
              className="bg-[#12956B] rounded-[50%] py-4 px-2 max-[500px]:py-3"
            >
              <Image
                className="w-[40px] max-[500px]:w-[20px]"
                src="/svg/arrow_white.svg"
                alt=""
                width={40}
                height={40}
              />
            </button>
            </a>
            <p 
              data-aos="fade-right" 
              data-aos-offset="50" 
              data-aos-delay="100" 
              data-aos-duration="800" 
              className="hover:cursor-pointer text-2xl max-[500px]:text-lg text-black"
            >
              Let&apos;s go!
            </p>
          </div>
        </div>
        <Image
          className="w-[60%] h-[500px] object-cover rounded-r-[3.5rem] max-[1250px]:h-[450px] max-lg:h-[400px] max-[930px]:rounded-r-none max-[930px]:rounded-t-3xl max-[930px]:w-full max-[930px]:h-[300px] max-[500px]:h-[200px]" data-aos="zoom-in-right"
          src="/assets/tennis.webp"
          alt=""
          width={900}
          height={500}
        />
      </div>
      <div className="w-full border-2 border-[#1D1D1D] rounded-[2.5rem] p-8 mt-2 max-sm:hidden">
        <h1 className="text-2xl border-[1px] border-gray-400 text-gray-400 w-fit px-4 py-2 rounded-3xl font-thin max-[950px]:text-xl">
          Dynamic Arena
        </h1>
        <p 
          data-aos="fade-in" 
          data-aos-delay="40" 
          data-aos-offset="50" 
          data-aos-duration="800" 
          className="text-gray-400 mt-5 text-2xl font-thin opacity-80 pr-[80px] leading-tight max-[950px]:text-xl max-md:text-lg max-sm:text-base">
          From connecting with he sports community to staying updated on events, Strength empowers everyone to immerse fully in their passion. With features that foster connection, growth, and engagement, Strength brings the entire sports world to your fingertips —
        </p>
        <span className="font-bold text-2xl text-white hover:cursor-pointer">
        — so you can thrive, share, and excel in what you love.
        </span>
      </div>
    </div>
  )
}

export default DynamicArena

