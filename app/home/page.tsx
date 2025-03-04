'use client'
import "aos/dist/aos.css";
import SportsProfile from "./../components/app/app";
import SportsCommunitySection from "./../components/discover/discover";
import DynamicArena from "./../components/dynamicarena/dynamicarena";
import Footer from "./../components/footer/footer";
import MainSection from "./../components/hero/hero";
import Navbar from "./../components/navbar/navbar";
import CommunityWelcome from "./../components/prefooter/prefooter";
import SportsContainer from "./../components/sportscontainer/sports";
import SportsMoments from "./../components/sportsmoment/moment";
import AboutSection from "../components/about/about";

export default function Homescreen()
{
    return(
        <main className="bg-black">
        <Navbar />
        <MainSection />
        <SportsCommunitySection />
        <AboutSection />
          <DynamicArena />
          <SportsProfile />
          <SportsContainer />
          <SportsMoments />
          <CommunityWelcome />
        <Footer />
      </main>
    )
}