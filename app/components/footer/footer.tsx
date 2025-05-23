'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaApple, FaGooglePlay } from 'react-icons/fa'

export default function Footer() {
  const [waitingemail, setWaitingEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWaitingEmail(e.target.value)
    setIsValidEmail(true)
    setError(null)
    setSuccess(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(waitingemail)) {
      setIsValidEmail(false)
      return
    }

    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ waitingemail }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || 'Failed to submit email.')
      }

      setSuccess(true)
      setWaitingEmail('')
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unknown error occurred.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mt-32 pt-25">
      <footer id="contact" className="relative pt-48 flex flex-col bg-[#1B1B1B]">
        <div className="px-20 mr-0 flex mr-20 pb-20 justify-between max-[1100px]:mt-20 max-[800px]:flex-col max-[800px]:items-center max-[800px]:gap-y-10 max-[800px]:pb-4 max-lg:mr-10 max-[800px]:mr-0 max-[500px]:px-4 max-[1496px]:text-[15px] text-[20px]">
          <div className="w-fit flex flex-col justify-center items-center max-[686px]:mt-10 max-[600px]:mt-20">
            <div className="flex gap-x-4 items-center w-fit">
              <Image
                className="w-[70px] py-2 max-lg:w-[55px] rounded-[10px]"
                src="/assets/Logo28.png"
                alt="Strength Logo"
                width={80}
                height={80}
              />
              <h1 className="text-white text-5xl max-lg:text-4xl">Strength</h1>
            </div>
            <div>
              <h1 className="text-white pt-4 text-center mt-6 border-t-[1px]">Step into the world of sports</h1>
            </div>
          </div>
          <ul className="w-fit flex flex-col justify-center items-center text-gray-300 font-bold gap-y-6 max-[800px]:mt-4">
            <li>
              <Link href="/about" className="capitalize hover:cursor-pointer max-[800px]:text-xl">about us</Link>
            </li>
            <li>
              <Link href="/contactus" className="capitalize hover:cursor-pointer max-[800px]:text-xl">contact</Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="capitalize hover:cursor-pointer max-[800px]:text-xl">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/user-agreement" className="capitalize hover:cursor-pointer max-[800px]:text-xl">User Agreement</Link>
            </li>
            {/* <li>
              <Link ref="/articles" className="capitalize hover:cursor-pointer max-[800px]:text-xl">articles</Link>
            </li> */}
          </ul>
          <div className="w-fit flex gap-x-6 my-auto max-[800px]:mt-10">
            <a href="https://www.instagram.com/_yourstrength_?igsh=aHJnNDgwd2k3Njg%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <Image className="w-[25px]" src="/svg/instagram.svg" alt="Instagram" width={25} height={25} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image className="w-[25px]" src="/svg/facebook.svg" alt="Facebook" width={25} height={25} />
            </a>
            <a href="https://www.linkedin.com/company/yourstrength/" target="_blank" rel="noopener noreferrer">
              <Image className="w-[25px]" src="/svg/linkedin.svg" alt="LinkedIn" width={25} height={25} />
            </a>
            <a href="https://twitter.com/yourstrength0" target="_blank" rel="noopener noreferrer">
              <Image className="w-[25px]" src="/svg/twitter.svg" alt="Twitter" width={25} height={25} />
            </a>
          </div>
        </div>
        <h1 className="text-[#CFD3D7] border-t-2 border-black text-center py-4 max-[1496px]:text-sm text-[18px]">
          Copyright {currentYear}
        </h1>

        <div className="absolute w-full top-[-80px] px-24 max-[900px]:px-4">
  <div className="bg-white mx-auto rounded-2xl px-12 py-8 flex items-center justify-between gap-x-10 max-w-8xl w-full shadow-xl max-[1100px]:flex-col max-[1100px]:justify-center max-[1100px]:w-[90%] max-[400px]:px-4 max-[400px]:w-[95%] max-[400px]:mx-auto">
    
    {/* Text Section */}
    <div className="w-full text-left">
      <h1
        className="text-4xl font-medium max-[900px]:text-3xl max-[400px]:text-xl text-black"
        style={{ fontFamily: 'Krona One' }}
      >
       Strength is more than a platform!
      </h1>
      <p className="font-medium mt-5 max-[400px]:text-sm text-black">
        It’s where the entire sports world comes together.<br className="max-[400px]:hidden" />
      </p>
    </div>

    {/* Download Buttons */}
<div className="flex gap-6 justify-center mt-6 max-w-full px-4 sm:px-8 md:px-0">
  <a
    href="https://apps.apple.com/app/id000000000" // Replace with real App Store link
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 bg-black text-white rounded-xl shadow-md
               py-3 px-6 sm:py-4 sm:px-10 md:px-12
               hover:bg-gray-900 transition-colors duration-200
               min-w-[140px]"
  >
    <FaApple className="text-2xl sm:text-3xl" />
    <div className="text-left leading-tight">
      <p className="text-sm font-semibold whitespace-nowrap">App Store</p>
    </div>
  </a>

  <a
    href="https://play.google.com/store/apps/details?id=com.yourapp.package" // Replace with real Play Store link
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 bg-black text-white rounded-xl shadow-md
               py-3 px-6 sm:py-4 sm:px-10 md:px-12
               hover:bg-gray-900 transition-colors duration-200
               min-w-[140px]"
  >
    <FaGooglePlay className="text-2xl sm:text-3xl" />
    <div className="text-left leading-tight">
      <p className="text-sm font-semibold whitespace-nowrap">Play Store</p>
    </div>
  </a>
</div>

  </div>
</div>
      </footer>
    </div>
  )
}
