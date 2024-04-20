import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {};

export const IconLoading = (props: Props) => {
  return (
    <svg viewBox="0 0 128 128" {...props}>
      <path
        className="cls-1"
        d="M109.03607,21.704l-8.45032,8.4507a47.86366,47.86366,0,0,1,.00078,67.68986l8.45032,8.45032a59.81426,59.81426,0,0,0-.00078-84.59088Z"
      />
      <circle className="cls-1" cx="9.84936" cy="64" r="8.40538" />
      <circle
        className="cls-1"
        cx="25.61837"
        cy="25.93024"
        r="8.40538"
        transform="translate(-10.832 25.70971) rotate(-45)"
      />
      <circle className="cls-1" cx="63.68813" cy="10.16123" r="8.40537" />
      <circle className="cls-1" cx="63.68813" cy="117.83878" r="8.40537" />
      <circle
        className="cls-1"
        cx="25.61837"
        cy="102.06976"
        r="8.40538"
        transform="translate(-64.67077 48.01046) rotate(-45)"
      />
    </svg>
  );
};
