'use client'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image'
import './style.css'

export default function SportsProfile() {
  useEffect(() => {
    AOS.init
    ({ 
      duration: 1000,
      once:true,
      mirror: true, 
    });
  }, []);
  return (
    <div className="mt-24 px-[120px] max-[1496px]:px-8 max-[900px]:px-8 max-[800px]:px-3 max-[700px]:h-fit">
      <div className="flex flex-col max-xl:gap-y-[40px] gap-y-[100px] mt-1 bg-[#121112] rounded-3xl pt-24 max-sm:mt-[6rem] max-[400px]:px-2 max-[500px]:pt-8 border-[2px] border-[#303030] px-12 overflow-hidden max-[1024px]:px-4">
        <div className="boxcontent flex justify-between items-start px-8 gap-x-10 max-[650px]:flex-col max-[650px]:w-[90%] max-[650px]:mx-auto max-[850px]:justify-between max-[650px]:px-0 max-[550px]:w-full max-[550px]:mx-0 relative custom-underline">
          <div className="flex w-full h-fit my-auto flex-col gap-2 pr-[100px] max-xl:pr-0 max-[550px]:px-2">
            <div className="w-full">
              <Image src="/svg/createsports.svg" alt="" width={30} height={30} className="custom-fade-up mb-6 hidden max-[650px]:block" data-delay="100" />
              <h1 className="custom-fade-up text-white text-4xl max-[1024px]:text-3xl max-[720px]:text-xl max-[650px]:text-left max-[650px]:text-4xl max-[500px]:text-2xl max-[400px]:text-xl max-[840px]:w-full" data-aos="fade-up" style={{ fontFamily: 'Krona One' }}> Create your sports profile </h1>
            </div>
            <p className="custom-fade-up text-gray-400 text-2xl font-thin max-[980px]:text-xl max-[720px]:text-base max-[650px]:text-left max-[650px]:text-lg max-[400px]:text-base" data-delay="100" data-aos="fade-up"> This is your chance to showcase your journey, gain recognition, and open doors to new opportunities. </p>
          </div>
          <Image className="custom-fade-in w-[400px] max-[980px]:w-[350px] max-[650px]:mt-10 max-[650px]:mx-auto max-[800px]:w-[250px] max-[650px]:w-full" data-delay="400" data-aos="zoom-in" src="/assets/Profile2.png" alt="" width={400} height={400} />
        </div>
        <div className="boxcontent flex justify-between items-start px-8 gap-x-10 max-[650px]:flex-col-reverse max-[650px]:w-[90%] max-[650px]:mx-auto max-[850px]:justify-between max-[650px]:px-0 max-[550px]:w-full max-[550px]:mx-0 relative custom-underline">
          <Image className="custom-fade-in w-[400px] max-[980px]:w-[350px] max-[650px]:mt-10 max-[650px]:mx-auto max-[800px]:w-[250px] max-[650px]:w-full" data-delay="400" src="/assets/Feed2.png" alt="" width={400} height={400}  data-aos="zoom-in"/>
          <div className="flex w-full h-fit my-auto flex-col gap-2 pl-[100px] max-xl:pl-0">
            <div className="w-full">
              <Image src="/svg/diveinto.svg" alt="" width={30} height={30} className="custom-fade-up mb-6 sm:hidden" data-delay="100" />
              <h1 className="custom-fade-up text-white text-4xl max-[1100px]:text-3xl max-[1060px]:text-2xl max-[720px]:text-xl max-[650px]:text-left max-[650px]:text-4xl max-[500px]:text-2xl max-[400px]:text-xl max-[840px]:w-full" data-aos="fade-up" style={{ fontFamily: 'Krona One' }}> Dive into the sports feed </h1>
            </div>
            <p className="custom-fade-up text-gray-400 text-2xl font-thin max-[980px]:text-xl max-[720px]:text-base max-[650px]:text-left max-[650px]:text-lg max-[400px]:text-base" data-delay="100" data-aos="fade-up"> Access the latest sports news, updates, and share your achievements to stay connected and inspired. </p>
          </div>
        </div>
        <div className="flex justify-between items-start px-8 gap-x-10 max-[650px]:flex-col max-[650px]:w-[90%] max-[650px]:mx-auto max-[850px]:justify-between max-[650px]:px-0 max-[550px]:w-full max-[550px]:mx-0">
          <div className="flex w-full h-fit my-auto flex-col gap-2 pr-[100px] max-xl:pr-0 max-[550px]:px-2">
            <div className="w-full">
              <Image src="/svg/discover.svg" alt="" width={30} height={30} className="custom-fade-up mb-6 sm:hidden"/>
              <h1 className="custom-fade-up text-white text-4xl max-[1100px]:text-3xl max-[1060px]:text-2xl max-[720px]:text-xl max-[650px]:text-left max-[650px]:text-4xl max-[500px]:text-2xl max-[400px]:text-xl max-[840px]:w-full" data-aos="fade-up" style={{ fontFamily: 'Krona One' }}> Discover the latest in sports </h1>
            </div>
            <p className="custom-fade-up text-gray-400 text-2xl font-thin max-[980px]:text-xl max-[720px]:text-base max-[650px]:text-left max-[650px]:text-lg max-[400px]:text-base" data-aos="fade-up" data-delay="100"> Explore real-time updates across your favorite sports, with top headlines, scores, and trends—all in one place. </p>
          </div>
          <Image className="custom-fade-in w-[400px] max-[980px]:w-[350px] max-[650px]:mt-10 max-[650px]:mx-auto max-[800px]:w-[250px] max-[650px]:w-full" data-delay="400" src="/assets/Explore2.png" alt="" width={400} height={400}  data-aos="zoom-in"/>
        </div>
      </div>
    </div>
  )
}