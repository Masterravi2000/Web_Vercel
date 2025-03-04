import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"
import { InfiniteMovingCardsDemo } from "../contactus/infinity"
import StrengthIntro from "./about"
import ParallaxScreen from "./parallax"

export default function Aboutus()
{
    return (
        <main className="bg-black">
            <Navbar/>
            <ParallaxScreen/>
            <StrengthIntro/>
            <InfiniteMovingCardsDemo/>
            <div className="flex flex-col max-w-6xl mx-auto text-left px-4 pb-8">
                <p className="pl-4 pb-4 text-white text-4xl font-bold ">We&apos;re a Global Company</p>
                <span className="pl-4 text-gray-50 text-left">Our headquarters is in Kolkata, India—building a platform that’s redefining how sports enthusiasts worldwide connect, compete, and celebrate the game they love.</span>
            </div>
            <Footer/>
        </main>
    )
}