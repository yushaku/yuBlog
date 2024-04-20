import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {};

export const IconSend = ({ color = "#0e1d25", ...props }: Props) => {
  return (
    <svg width={20} height={20} viewBox="0 0 25 25" {...props}>
      <title>Send</title>
      <path
        id="Send"
        d="M24.72.18a.75.75,0,0,0-.83-.1L.57,11.61A1,1,0,0,0,0,12.5a1.07,1.07,0,0,0,.47,1l0,0,6.62,3.71A.5.5,0,0,0,7,17.5v7a.5.5,0,0,0,.89.32L12,19.9l5,2.78a1,1,0,0,0,.89.11,1,1,0,0,0,.64-.68L25,1A.79.79,0,0,0,24.72.18ZM.74,13,1,12.51,22.62,1.83,7.85,16.45,1,12.6ZM8,23.11V17.7l0,0,3.06,1.71Zm9.44-1.29L8.76,17,23.5,2.36Z"
        fill={color}
      />
    </svg>
  );
};
