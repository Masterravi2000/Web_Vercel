"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Badminton from "@/public/sports/badminton.png";
import Basketball from "@/public/sports/basketball.png";
import Boxing from "@/public/sports/boxing.png";
import Bowling from "@/public/sports/bowling-game.png";
import Cricket from "@/public/sports/cricket.png";
import Cycling from "@/public/sports/bicycle.png";
import Football from "@/public/sports/football.png";
// import Golf from "@/public/sports/golf.svg";
// import Gym from "@/public/sports/gym.svg";
// import Hockey from "@/public/sports/hockey.svg";
// import Javelin from "@/public/sports/javelin.svg";
// import Kabaddi from "@/public/sports/kabaddi.svg";
// import Karate from"@/public/sports/karate.svg";
// import MotoGP from "@/public/sports/motogp.svg";
// import Rugby from "@/public/sports/rugby.svg";
// import Running from "@/public/sports/running.svg";
// import Tennis from "@/public/sports/tennis.svg";
// import Volleyball from "@/public/sports/volleyball.svg";
// import Wrestling from "@/public/sports/wrestling.svg";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="pt-8 pb-16 rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
      {
      name: "Badminton",
      icon: Badminton,
      },
      {
        name: "Basketball",
        icon: Basketball,
      },
      {
        name: "Bowling",
        icon: Bowling,
      },
      {
        name: "Boxing",
        icon: Boxing,
      },
      {
        name: "Cricket",
        icon: Cricket,
      },
      {
        name: "Cycling",
        icon: Cycling,
      },
      {
        name: "Football",
        icon: Football,
      },
      // {
      //   name: "Golf",
      //   icon: Golf,
      // },
      // {
      //   name: "Gym",
      //   icon: Gym,
      // },
      // {
      //   name: "Hockey",
      //   icon: Hockey,
      // },
      // {
      //   name: "Javelin",
      //   icon: Javelin,
      // },
      // {
      //   name: "Kabaddi",
      //   icon: Kabaddi,
      // },
      // {
      //   name: "Karate",
      //   icon: Karate,
      // },
      // {
      //   name: "MotoGP",
      //   icon: MotoGP,
      // },
      // {
      //   name: "Rugby",
      //   icon: Rugby,
      // },
      // {
      //   name: "Running",
      //   icon: Running,
      // },
      // {
      //   name: "Tennis",
      //   icon: Tennis,
      // },
      // {
      //   name: "Volleyball",
      //   icon: Volleyball,
      // },
      // {
      //   name: "Wrestling",
      //   icon: Wrestling,
      // },

  ];
  
  
