"use client";

import { FaGooglePlay, FaApple } from "react-icons/fa";
import Image from "next/image";
import { useEffect } from "react";

interface JoinWaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinWaitlistModal2({ isOpen, onClose }: JoinWaitlistModalProps) {
  useEffect(() => {
    // Reset scroll or any modal-specific state here if needed
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
      <div className="relative bg-black rounded-3xl shadow-2xl p-6 sm:p-8 max-w-lg w-full text-white">
        {/* App Banner */}
        <div className="mb-6 w-full aspect-[16/9] relative rounded-xl overflow-hidden">
          <Image
            src="/assets/phonesSet.png"
            alt="App Banner"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Message */}
        <h2 className="text-2xl font-bold mb-2 text-center">Unleash Your Sports World!</h2>
        <p className="text-center text-sm text-gray-300 mb-6 px-4">
          Dive into real-time action, stories, and connections. Strength is live download now and be part of it.
        </p>

        {/* Store Buttons */}
        <div className="flex flex-row justify-center items-center gap-4 flex-wrap sm:flex-nowrap">
          <a
            href="https://play.google.com/store/apps/details?id=strength.net.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gradient-to-br from-green-500 to-green-700 hover:from-green-400 hover:to-green-600 transition-all px-6 py-3 rounded-2xl shadow-lg hover:scale-105 w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            <FaGooglePlay size={28} className="text-white transition" />
            <div className="flex flex-col">
              <span className="text-xs text-white/80">GET IT ON</span>
              <span className="text-lg font-semibold text-white leading-5">Play Store</span>
            </div>
          </a>

          <a
            href="https://apps.apple.com/us/app/strength-ultimate-sports-app/id6738089180"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gradient-to-br from-gray-100 to-gray-300 hover:from-gray-200 hover:to-gray-400 transition-all px-6 py-3 rounded-2xl shadow-lg hover:scale-105 w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            <FaApple size={28} className="text-black transition" />
            <div className="flex flex-col">
              <span className="text-xs text-black/60">Download on the</span>
              <span className="text-lg font-semibold text-black leading-5">App Store</span>
            </div>
          </a>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:bg-white/10 transition text-2xl w-10 h-10 flex items-center justify-center rounded-full border border-white/20"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
