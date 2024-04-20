import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {};

export const IconMenu = ({ color = "#ffffff", ...props }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="18"
      fill="none"
      viewBox="0 0 20 18"
      {...props}
    >
      <rect width="20" height="2" fill={"ffffff"} rx="1"></rect>
      <rect width="20" height="2" y="8" fill={"ffffff"} rx="1"></rect>
      <rect width="20" height="2" y="16" fill={"ffffff"} rx="1"></rect>
    </svg>
  );
};
