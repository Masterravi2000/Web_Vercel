'use client'
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const SportsMoments: React.FC = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (imageContainerRef.current) {
          const rect = imageContainerRef.current.getBoundingClientRect()
          const scrollPercentage = Math.min(Math.max((window.innerHeight - rect.top) / window.innerHeight, 0), 1)
          const movingImage = imageContainerRef.current.querySelector('#moving-image') as HTMLElement
          if (movingImage) {
            movingImage.style.transform = `translateY(${scrollPercentage * -50}px)`
          }
        }
      }

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e
        setMousePosition({ x: clientX, y: clientY })
      }

      AOS.init({
        duration: 1000,
        once: true,
        mirror: true,
      });

      window.addEventListener('scroll', handleScroll)
      window.addEventListener('mousemove', handleMouseMove)

      return () => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  const imageStyles = {
    transform: `translate(-5%, -5%) translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
    transition: 'transform 0.1s ease-out',
  }

  return (
    <div className="py-24 px-6 max-[550px]:px-2 max-[500px]:py-10 mx-[120px] max-[1496px]:mx-8 max-[900px]:mx-8 max-[800px]:mx-3 bg-[#121112] rounded-3xl border-[2px] border-[#303030]">
      <div className="w-full flex justify-around items-center max-[1024px]:flex-col-reverse max-[500px]:px-2">
        <div
          id="imagecontainer"
          ref={imageContainerRef}
          className="relative max-[1024px]:mt-[50px] max-[870px]:mx-auto max-[400px]:mt-20"
        >
          <Image
            id="moving-image"
            className="w-[600px] ml-16 max-[500px]:ml-10 relative z-20 max-[1320px]:w-[550px] max-[1230px]:w-[500px] max-[1090px]:w-[450px] max-[950px]:w-[430px] max-[870px]:w-[600px] max-[770px]:w-[90%]"
            src="/assets/posts.webp"
            alt="Sports moments collage"
            width={600}
            height={400}
            style={imageStyles}
          />
          <Image
            id="behind-moving-image"
            className="custom-fade-in w-[200px] absolute top-[-20px] left-0 z-10 max-[1090px]:w-[170px] max-[870px]:w-[200px] max-[600px]:w-[150px]"
            src="/assets/group.webp"
            alt="Group of athletes"
            width={200}
            height={200}
            data-delay="200"
            style={imageStyles}
          />
        </div>
        <div className="w-[400px] max-[1030px]:w-[90%] max-[870px]:w-[90%] max-[870px]:mx-auto">
          <h1
            className="custom-fade-up text-white text-4xl font-medium leading-[3rem] max-[910px]:text-right max-[900px]:text-left max-[500px]:text-3xl max-[500px]:leading-[2.5rem] max-[400px]:text-2xl" data-aos="fade-up"
            style={{ fontFamily: 'Krona One' }}>
            Share your <br className="max-[400px]:block hidden" /> sports moments
          </h1>
          <p
            className="custom-fade-up text-gray-400 mt-5 text-xl font-thin max-[910px]:text-right max-[900px]:text-left max-[400px]:mt-8"
            data-delay="200" data-aos="fade-up">
            Capture, post, and celebrate your achievements with our community. Connect with fellow athletes and inspire others!
          </p>
        </div>
      </div>
    </div>
  )
}

export default SportsMoments
