import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {};

export const IconEyeSlash = ({ color = "#BBBBC7" }: Props) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7407 10.2591L10.2591 15.7408C9.55492 15.0366 9.12158 14.0725 9.12158 13C9.12158 10.855 10.8549 9.12164 12.9999 9.12164C14.0724 9.12164 15.0366 9.55498 15.7407 10.2591Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.3051 6.25083C17.4092 4.82083 15.2426 4.04083 13.0001 4.04083C9.17591 4.04083 5.61174 6.29417 3.13091 10.1942C2.15591 11.7217 2.15591 14.2892 3.13091 15.8167C3.98674 17.16 4.98341 18.3192 6.06674 19.2508"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.12158 21.1575C10.3566 21.6775 11.6674 21.9592 12.9999 21.9592C16.8241 21.9592 20.3882 19.7058 22.8691 15.8058C23.8441 14.2783 23.8441 11.7108 22.8691 10.1833C22.5116 9.61999 22.1216 9.08915 21.7207 8.59082"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.8026 13.7584C16.5209 15.2859 15.2751 16.5317 13.7476 16.8134"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2592 15.7408L2.16675 23.8333"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.8332 2.16669L15.7407 10.2592"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
