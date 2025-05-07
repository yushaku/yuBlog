"use client";

import anime from "animejs";
import { useState, useEffect } from "react";

const StarrySky = () => {
  const [stars, setStars] = useState<
    Array<{ x: string; y: string; r: number }>
  >([]);
  const [wishes, setWishes] = useState<Array<{ x: string; y: string }>>([]);
  const [dimensions, setDimensions] = useState({ vw: 0, vh: 0 });

  const randomRadius = () => Math.random() * 0.7 + 0.6;

  const getRandomX = () =>
    Math.floor(Math.random() * Math.floor(dimensions.vw)).toString();
  const getRandomY = () =>
    Math.floor(Math.random() * Math.floor(dimensions.vh)).toString();

  useEffect(() => {
    const updateDimensions = () => {
      const vw = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
      );
      const vh = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      );
      setDimensions({ vw, vh });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.vw === 0 || dimensions.vh === 0) return;

    // Generate stars
    const newStars = Array.from({ length: 60 }, () => ({
      x: getRandomX(),
      y: getRandomY(),
      r: randomRadius(),
    }));
    setStars(newStars);

    // Generate wishes
    const newWishes = Array.from({ length: 60 }, () => ({
      x: getRandomX(),
      y: getRandomY(),
    }));
    setWishes(newWishes);
  }, [dimensions]);

  useEffect(() => {
    if (stars.length === 0 || wishes.length === 0) return;

    const starryNight = () => {
      anime({
        targets: "#sky .star",
        opacity: [
          {
            duration: 700,
            value: "0",
          },
          {
            duration: 700,
            value: "1",
          },
        ],
        easing: "linear",
        loop: true,
        delay: (el, i) => 50 * i,
      });
    };

    const shootingStars = () => {
      anime({
        targets: "#shootingstars .wish",
        easing: "linear",
        loop: true,
        delay: (el, i) => 1000 * i,
        opacity: [
          {
            duration: 700,
            value: "1",
          },
        ],
        width: [
          {
            value: "150px",
          },
          {
            value: "0px",
          },
        ],
        translateX: 350,
      });
    };

    starryNight();
    shootingStars();
  }, [stars, wishes]);

  if (dimensions.vw === 0 || dimensions.vh === 0) {
    return null; // Return null on initial render to prevent hydration mismatch
  }

  return (
    <div id='StarrySky'>
      <svg id='sky'>
        {stars.map((star, index) => (
          <circle
            cx={star.x}
            cy={star.y}
            r={star.r}
            stroke='none'
            strokeWidth='0'
            fill='white'
            key={index}
            className='star'
          />
        ))}
      </svg>
      <div id='shootingstars'>
        {wishes.map((wish, index) => (
          <div
            key={index}
            className='wish'
            style={{
              left: `${wish.x}px`,
              top: `${wish.y}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StarrySky;
