import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {};
export const IconMessage = ({ color = "#627480", ...props }: Props) => {
  return (
    <svg
      height="20px"
      width="20px"
      version="1.1"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill={color}
        d="M428.528,474.464l-133.92-107.296H110.192C49.44,367.168,0,317.664,0,256.816V147.888
  C0,87.04,49.44,37.536,110.192,37.536h291.616C462.56,37.536,512,87.04,512,147.888v108.944c0,51.2-35.008,94.928-83.472,107.008
  V474.464z M110.192,69.536C67.088,69.536,32,104.672,32,147.888v108.944c0,43.2,35.072,78.336,78.192,78.336h195.664l90.672,72.64
  v-71.584l14.176-1.632C450.192,330.048,480,296.608,480,256.816V147.888c0-43.2-35.072-78.336-78.192-78.336H110.192V69.536z"
      />
    </svg>
  );
};
