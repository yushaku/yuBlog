import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {};
export const IconSearch = ({ color = "#627480", ...props }: Props) => {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11.5 21a9.5 9.5 0 100-19 9.5 9.5 0 000 19zM22 22l-2-2"
      ></path>
    </svg>
  );
};
