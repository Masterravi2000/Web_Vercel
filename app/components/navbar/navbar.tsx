'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import JoinWaitlistModal from '../modal/app'

const Navbar: React.FC = () => {
    const [isJoining] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const pathname = usePathname()
  
    const handleJoinWaitlist = () => {
      setIsModalOpen(true)
    }

    const closeModal = () => {
      setIsModalOpen(false)
    }

    const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
      const isActive = pathname === href
      return (
        <Link 
          href={href} 
          className={`text-[#D3D3D3] hover:text-white text-md cursor-pointer max-md:hidden relative
            ${isActive ? 'text-white' : ''}
          `}
        >
          {children}
          {isActive && (
            <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-gray-400"></span>
          )}
        </Link>
      )
    }

  return (
    <nav className="w-full pt-3 pb-2 flex items-center justify-between bg-black px-20 max-[900px]:px-10 max-sm:px-8 max-[450px]:px-4 sm:border-b sm:border-b-[#2B2A2A]">
      <div className="flex gap-x-2 text-white items-center cursor-pointer">
        <Image
          className="w-[50px] max-[1496px]:w-11 max-sm:w-10"
          src="/logo/logo.png"
          alt="Strength Logo"
          width={50}
          height={50}
        />
        <p className="max-[1496px]:text-2xl font-semibold text-4xl">Strength</p>
      </div>
      <div className="flex justify-between items-center gap-x-[4rem] max-[900px]:gap-x-[3rem]">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/contactus">Contact</NavLink>
        <NavLink href="/about">About us</NavLink>
        {/* <NavLink href="/c">Articles</NavLink> */}
        <div>
          <button
            onClick={handleJoinWaitlist}
            id="joinWaitlistButton1"
            className="text-xl text-white bg-[#12956B] rounded-lg py-2 px-8 mr-10 max-lg:mr-0 max-sm:text-md max-sm:px-4 max-sm:py-1 max-[450px]:text-[1rem]"
          >
            {isJoining ? 'Joining...' : 'Join Waitlist'}
          </button>
        </div>
  <JoinWaitlistModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </nav>
  )
}

export default Navbar

