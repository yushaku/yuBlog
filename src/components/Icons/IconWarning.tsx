import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {};

export const IconWarning = (props: Props) => {
  return (
    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M12 16.99V17M12 7V14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
