import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {};

export const IconArrowRight = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={20}
      height={20}
      viewBox="0 0 9 18"
      stroke="#000000"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M8.094 16.92l-6.52-6.52c-.77-.77-.77-2.03 0-2.8l6.52-6.52"
      ></path>
    </svg>
  );
};

export const IconArrowDown = (props: Props) => {
  return (
    <svg width={20} height={20} viewBox="0 0 42.67 64" {...props}>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className="cls-1"
            d="M23.1,63.22,41.88,44.5a2.67,2.67,0,1,0-3.76-3.78L24,54.79V2.67a2.67,2.67,0,1,0-5.33,0V55L4.56,40.73a2.67,2.67,0,0,0-3.77,0A2.63,2.63,0,0,0,0,42.61a2.68,2.68,0,0,0,.77,1.88L19.32,63.21a2.67,2.67,0,0,0,3.78,0Z"
          />
        </g>
      </g>
    </svg>
  );
};
