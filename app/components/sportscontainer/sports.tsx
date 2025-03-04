'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './SportsContainer.module.css'

interface Sport {
  name: string
  icon: string
  iconWidth: string
}

const sports1: Sport[] = [
  { name: "Cricket", icon: "/svg/cricket.svg", iconWidth: "30px" },
  { name: "Football", icon: "/svg/football.svg", iconWidth: "30px" },
  { name: "Basketball", icon: "/svg/basketball.svg", iconWidth: "30px" },
  { name: "Tennis", icon: "/svg/tennis.svg", iconWidth: "30px" },
  { name: "Volleyball", icon: "/svg/volleyball.svg", iconWidth: "30px" },
  { name: "Gym", icon: "/svg/gym.svg", iconWidth: "30px" },
  { name: "Hockey", icon: "/svg/hockey.svg", iconWidth: "30px" },
]

const sports2: Sport[] = [
  { name: "Badminton", icon: "/svg/badminton.svg", iconWidth: "40px" },
  { name: "Karate", icon: "/svg/karate.svg", iconWidth: "30px" },
  { name: "Kabaddi", icon: "/svg/kabaddi.svg", iconWidth: "30px" },
  { name: "Cycling", icon: "/svg/cycling.svg", iconWidth: "30px" },
  { name: "Boxing", icon: "/svg/boxing.svg", iconWidth: "30px" },
  { name: "Wrestling", icon: "/svg/wrestling.svg", iconWidth: "30px" },
]

const sports3: Sport[] = [
  { name: "Bowling", icon: "/svg/bowling.svg", iconWidth: "30px" },
  { name: "Golf", icon: "/svg/golf.svg", iconWidth: "40px" },
  { name: "Running", icon: "/svg/running.svg", iconWidth: "30px" },
  { name: "Javelin", icon: "/svg/javelin.svg", iconWidth: "30px" },
  { name: "Rugby", icon: "/svg/rugby.svg", iconWidth: "30px" },
  { name: "F1", icon: "/svg/f1.svg", iconWidth: "40px" },
  { name: "Motogp", icon: "/svg/motogp.svg", iconWidth: "30px" },
]

const SportsContainer: React.FC = () => {
  const [shouldInsertAfterFootball, setShouldInsertAfterFootball] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setShouldInsertAfterFootball(window.innerWidth < 1260)
      }

      handleResize() // Call once on mount
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  const createWidth0Div = (text: string) => (
    <div className={`${styles.width0} py-4 expand hover:cursor-pointer max-[840px]:py-2`}>
      <p className="text-white text-3xl font-semibold max-[500px]:text-base max-[840px]:text-lg max-[500px]:text-base max-[470px]:text-xs max-[500px]:font-bold">
        {text}
      </p>
    </div>
  )

  const renderSportsRow = (sports: Sport[], index: number) => (
    <div key={index} className={`flex justify-center gap-x-2 w-max ${styles.sportItemContainer} ${styles.row}`}>
      {[...Array(3)].map((_, j) => (
        <React.Fragment key={j}>
          {sports.map((sport) => (
            <React.Fragment key={`${sport.name}-${j}`}>
              <div className="sport-item w-max border-[1px] border-[#838383] rounded-md py-3 px-6 flex justify-around items-center gap-x-6 hover:cursor-pointer max-[840px]:py-1 max-[840px]:px-3 max-[840px]:gap-x-2" data-aos="zoom-in-up">
                <Image src={sport.icon} alt={sport.name} width={parseInt(sport.iconWidth)} height={parseInt(sport.iconWidth)} />
                <p className="text-white text-2xl font-bold max-[500px]:text-base max-[470px]:text-xs">{sport.name}</p>
              </div>
              {shouldInsertAfterFootball ? (
                (index === 0 && sport.name === "Football" && createWidth0Div("Explore everything")) ||
                (index === 1 && sport.name === "Karate" && createWidth0Div("about")) ||
                (index === 2 && sport.name === "Golf" && createWidth0Div("every sports"))
              ) : (
                (index === 0 && sport.name === "Basketball" && createWidth0Div("Explore everything")) ||
                (index === 1 && sport.name === "Cycling" && createWidth0Div("about")) ||
                (index === 2 && sport.name === "Rugby" && createWidth0Div("every sports"))
              )}
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </div>
  )

  return (
    <div id="sports-container" className="flex flex-col gap-y-2 py-[8rem] lg:py-[10rem] overflow-x-hidden ml-[-70px] max-[500px]:mt-[8rem] max-[600px]:border-b-[1px] max-[600px]:border-[#808080] max-[600px]:border-t-[1px] max-[600px]:my-[8rem] max-[600px]:py-10">
      {[sports1, sports2, sports3].map((sports, index) => renderSportsRow(sports, index))}
    </div>
  )
}

export default SportsContainer
