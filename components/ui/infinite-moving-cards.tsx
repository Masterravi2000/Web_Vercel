"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    icon: string | StaticImageData | undefined;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-12xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, index) => (
          <li
          className="w-[350px] max-w-full relative rounded-2xl flex-shrink-0 px-8 py-6 md:w-[450px] border border-b-0 border-slate-700 px-8 py-6 md:w-[450px]"
          style={{ background: "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }} 
            key={`${item.name}-${index}`}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
          <div className="relative z-20 py-4 flex items-center justify-center">
            {item.icon && (
              <div className="h-20 w-20 flex items-center justify-center bg-transparent rounded-full p-2">
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  width={40}
                 height={18}
                />
              </div>
            )}
            <span className="flex flex-col items-center">
              <span className="text-3xl font-bold leading-[1.6] text-[#8a8a8a]" style={{ fontFamily: 'Krona One' }}>
                {item.name}
              </span>
            </span>
          </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

