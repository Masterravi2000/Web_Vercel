'use client'
import { useEffect, useState } from "react";
import AOS from "aos";
import Image from 'next/image';
import JoinWaitlistModal from '../modal/app'


export default function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
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
    <section className="w-full py-8 md:mt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1650px] mx-auto">
        <div className="grid grid-cols-12 gap-1">
          {/* Hero Section - Left 4 columns */}
          <div className="col-span-12 lg:col-span-4 relative aspect-[9/16] lg:aspect-auto lg:h-[650px] overflow-hidden rounded-[40px]" id="info" data-aos="zoom-in-up">
            <Image
              src="/assets/running.webp"
              alt="Runner on track"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <button 
              onClick={handleJoinWaitlist}
              className="inline-flex items-center gap-2 text-white border border-white/50 rounded-full px-6 py-2 w-fit hover:bg-white/10 transition-colors">
                {isJoining ? 'Joining...' : 'Join Waitlist'}
                <Image
                  src="/svg/arrow_white.svg"
                  alt="Sports Community Icon"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </button>
              <h2
                className="text-white text-2xl lg:text-4xl font-bold mt-4 max-w-xl"
                style={{ fontFamily: 'Krona One' }}>
                A place where knowledge and ideas empower all sports enthusiasts
              </h2>
            </div>
          </div>
  <JoinWaitlistModal isOpen={isModalOpen} onClose={closeModal} />
          {/* Middle 4 columns - Two cards stacked */}
          <div className="col-span-12 lg:col-span-4 grid grid-rows-2 gap-1" data-aos="zoom-in-up">
            <FeatureCard
              title="Sports Community"
              description="Strengthen the global sports community by connecting individuals, teams, and clubs through a centralized platform."
              icon={
                <Image
                  src="/assets/fans.png"
                  alt="Sports Community Icon"
                  width={48}
                  height={48}
                  className="w-18 h-18"
                />
              }
            />
            <FeatureCard
              title="Latest in Sports"
              description="Stay updated with the latest news, trends, and events in the sports world."
              icon={
                <Image
                  src="/assets/newspaper.png"
                  alt="Latest in Sports Icon"
                  width={48}
                  height={48}
                  className="w-18 h-18"
                />
              }
            />
          </div>

          {/* Right 4 columns - Two cards stacked */}
          <div className="col-span-12 lg:col-span-4 grid grid-rows-2 gap-1" data-aos="zoom-in-up">
            <FeatureCard
              title="Purposeful Connections"
              description="Connect with like-minded athletes, potential mentors, and sponsors who supports your sport journey."
              icon={
                <Image
                  src="/assets/support.png"
                  alt="Purposeful Connections Icon"
                  width={48}
                  height={48}
                  className="w-18 h-18"
                />
              }
            />
            <FeatureCard
              title="Explore and Discover"
              description="Explore clubs, academies, and sports events to find the best fit for your athletic journey."
              icon={
                <Image
                  src="/svg/explore.svg"
                  alt="Explore and Discover Icon"
                  width={48}
                  height={48}
                  className="w-18 h-18"
                />
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, icon, description }: { title: string; icon: React.ReactNode; description: string }) {
  return (
    <div className="relative rounded-[40px] p-6 flex flex-col items-center justify-center text-center h-[325px] border-4 border-[#1d1d1d]">
      <div className="rounded-full bg-zinc-900 p-8 mb-4">{icon}</div>
      <h3 className="text-white text-3xl font-semibold" >{title}</h3>
      <span className="text-gray-300 text-sm font-bold block sm:hidden">{description}</span>
    </div>
  );
}
