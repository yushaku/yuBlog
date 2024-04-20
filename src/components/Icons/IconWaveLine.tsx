import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {};
export const IconWaveLine = ({ color = "#a55eea", ...props }: Props) => {
  return (
    <svg width="35" height="6" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color}></stop>
          <stop offset="100%" stopColor={color}></stop>
        </linearGradient>
      </defs>
      <path
        d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5"
        stroke="url(#gradient)"
        strokeWidth="2"
        fill="none"
      ></path>
    </svg>
  );
};
