'use client'

import React, { useEffect } from 'react'

export default function ParallaxScreen() {
  useEffect(() => {
    const animateValue = (id: string, start: number, end: number, duration: number) => {
      const range = end - start;
      let current = start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration / range));
      const obj = document.getElementById(id);
      const timer = setInterval(function() {
        current += increment;
        if (obj) obj.innerHTML = current.toString();
        if (current == end) {
          clearInterval(timer);
        }
      }, stepTime);
    }

    animateValue("totalUsers", 0, 651, 3000);
    animateValue("totalUsers2", 0, 651, 3000);
    animateValue("totalConnections", 0, 9456, 12000);
    animateValue("totalConnections2", 0, 9456, 12000);
  }, []);

  return (
    <main className="flex flex-col bg-black items-center justify-center">
      <header className="container">
        {/* Navbar */}
      </header>
      {/* Hero */}
      <div className="h-120 bg-black w-full flex items-center">
        <section className="section bg-cover bg-center py-32 w-full" style={{backgroundImage: "url('/assets/earth.png')"}}>
          <div className="items-center flex-wrap">
            <div className="w-full md:w-5/12 ml-auto mr-auto px-2">
              <div className="md:pr-12">
                <h3 className="text-4xl text-center text-white font-bold">World&apos;s #1 Sports Network</h3>
                <p className="mt-4 text-1xl text-center leading-relaxed text-white"> Bringing Athletes closer than ever before </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container mx-auto w-full max-w-3xl p-4 sm:hidden">
        <div className="bg-[#111111] border border-gray-600 rounded-2xl p-4  w-full">
          <div className="flex flex-col items-center justify-between">
            <p id="totalUsers2" className="text-white text-4xl" style={{ fontFamily: 'Krona One' }}>0</p>
            <p className="text-white text-lg">Users</p>
          </div>
          <hr className="my-5 mx-auto" />
          <div className="flex flex-col items-center justify-between">
            <p id="totalConnections2" className="text-white text-4xl" style={{ fontFamily: 'Krona One' }}>0</p>
            <p className="text-white text-lg">Interaction</p>
          </div>
        </div>
      </div>
        <div className="dash bg-black w-full text-white py-4 px-6 flex flex-col md:flex-row items-center justify-between ">
          <div className="mb-2 my-4 md:mb-0 flex items-center  pl-4 ">
            <h3 className="text-lg font-semibold mr-2 hidden lg:block">Active Users:</h3>
            <p id="totalUsers" className="text-gray-300 font-semibold text-xl hidden lg:block">0</p>
          </div>
          <div className="mb-2 my-4 md:mb-0 flex items-center  pr-4">
            <h3 className="text-lg font-semibold mr-2 hidden lg:block">Total Interactions:</h3>
            <p id="totalConnections" className="text-gray-300 font-semibold text-center text-xl hidden lg:block">0</p>
          </div>
        </div>
      {/* Parallax Background */}
      <section className="flex flex-col w-full h-[450px] bg-cover overlay bg-fixed bg-center flex justify-center items-center filter grayscale" style={{
        backgroundImage: "url('/assets/sports.webp')",
      }}>
        <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl font-semibold mt-20 mb-10 pt-10"> Step into the world of Sports </h1>
        <span className="text-center font-bold my-20 text-white/90">
          <a target="_blank" className="text-white/90 hover:text-white"> Connect with Sports enthusiasts </a>
          <hr className="my-3 mx-auto" />
          <a target="_blank" className="text-white/90 hover:text-white"> Track Live Scores </a>
          <hr className="my-3 w-1/2 mx-auto" />
          <p>
            <a target="_blank" className="text-white/90 hover:text-white"> Explore everything about every sports </a>
          </p>
        </span>
      </section>
    </main>
  )
}

