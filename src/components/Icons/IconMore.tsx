import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {};

export const IconMore = ({ color = "#051320", ...props }: Props) => {
  return (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill={color}
        d="M10 19c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zM10 5c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zM10 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"
      ></path>
    </svg>
  );
};
