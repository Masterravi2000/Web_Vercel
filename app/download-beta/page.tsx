'use client'

import React, { useRef } from 'react';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import SportsCommunitySection from "../components/discover2/discover2";
import DownloadSection from '../components/downloadCards/downloadCards';

const DownloadStrengthPage = () => {

  const downloadRef = useRef<HTMLDivElement>(null);

  const handleScrollToDownload = () => {
    downloadRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <Navbar />

      <SportsCommunitySection onDownloadClick={handleScrollToDownload} />
      <div ref={downloadRef} className='mt-8 py-14'>
        <DownloadSection />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default DownloadStrengthPage
