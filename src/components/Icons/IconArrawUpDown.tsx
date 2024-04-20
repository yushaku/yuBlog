import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  upColor?: string;
  downColor?: string;
};

export const IconArrowUpDown = ({
  upColor = "#627480",
  downColor = "#627480",
  ...props
}: Props) => {
  return (
    <svg width="20" height="20" viewBox="0 0 13 18" fill="none" {...props}>
      <path
        d="M12 12L7.47222 16.5932C6.9375 17.1356 6.0625 17.1356 5.52778 16.5932L1 12"
        stroke={upColor}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M12 6L7.47222 1.40683C6.9375 0.864389 6.0625 0.864389 5.52778 1.40683L1 6"
        stroke={downColor}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
