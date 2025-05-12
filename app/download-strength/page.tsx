'use client'

import React from 'react'
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import JoinWaitlistModal from '../components/modal/app'
import SportsCommunitySection from "./../components/discover2/discover2";
import DownloadSection from '../components/downloadCards/downloadCards';

const DownloadStrengthPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <Navbar />

      <SportsCommunitySection />
      <div className='mt-8 py-14'>
      <DownloadSection />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default DownloadStrengthPage
