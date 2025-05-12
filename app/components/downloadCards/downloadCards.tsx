import { FaApple } from 'react-icons/fa';
import { TbDownload } from "react-icons/tb";
import { DiAndroid } from "react-icons/di";

const DownloadCard = ({ type = 'iOS' }) => {
    const isIOS = type === 'iOS';

    return (
        <div
            className={`bg-gradient-to-br from-[#1f1f1f] to-[#111111] border border-[#191919] rounded-[20px] md:rounded-[20px] rounded-[10px] p-6 md:p-8 md:w-[574px] w-[357.88px] md:h-[500px] h-[326.71px] text-white flex flex-col justify-between`}
            style={{
                background: 'linear-gradient(215deg,rgb(48, 48, 48) 20%,rgb(0, 0, 0) 100%)',
            }}
        >
            <div>
                <div className="bg-[#111111] rounded-full w-16 h-16 md:w-24 md:h-24 flex items-center justify-center shadow-lg mb-6">
                    {isIOS ? (
                        <FaApple className="text-white text-3xl md:text-6xl" />
                    ) : (
                        <DiAndroid className="text-white text-3xl md:text-6xl" />
                    )}
                </div>
                {/* Mobile Phone Text */}
                <p className="text-gray-400 text-[12px] md:text-[20px]">Mobile Phone</p>

                {/* iOS or Android Title */}
                <h2 className="mt-1 text-[30px] md:text-[48px]">
                    {isIOS ? 'iOS' : 'Android'}
                </h2>

                {/* Description Text */}
                <p className="text-gray-400 mt-4 text-[12px] md:text-[17px]">
                    Join Strength today and take your sports experience to the next level.
                </p>
            </div>
            <button
                className="mt-6 bg-[#F0F0F0] text-black text-14 md:text-24 font-bold flex items-center justify-start px-6 gap-4 
             w-[193px] h-[44px] rounded-[26px] 
             md:w-[310px] md:h-[72px] md:rounded-[41px] 
             hover:scale-105 transition"
            >
                {/* <FaDownload className="text-lg" /> */}
                <TbDownload className="text-xl md:text-3xl" />
                Download
            </button>

        </div>
    );
};

export default function DownloadSection() {
    return (
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center p-6">
            <DownloadCard type="iOS" />
            <DownloadCard type="Android" />
        </div>
    );
}
