import React from "react";

type Props = React.SVGProps<SVGSVGElement> & {};

export const IconMicro = ({ color = "#627480", ...props }: Props) => {
  return (
    <svg width="24px" height="24px" viewBox="0 0 64 104" {...props}>
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="Multimedia-(Color)"
          transform="translate(-918.000000, -702.000000)"
          stroke={color}
          strokeWidth="3.5"
        >
          <g
            id="35-multimeda-mic-show"
            transform="translate(920.000000, 704.000000)"
          >
            <rect
              id="Layer-1"
              fill="#CFD8DC"
              x="10"
              y="0"
              width="40"
              height="70"
              rx="20"
            ></rect>
            <path
              d="M60,49.9854735 C60,66.5580274 46.5721855,79.9927367 30,79.9927367 L30,79.9927367 C13.4314575,79.9927367 0,66.5601111 0,49.9854735"
              id="Layer-2"
            ></path>
            <path d="M30,80 L30,100" id="Layer-3" fill="#E2F3FB"></path>
            <path d="M10,100 L50,100" id="Layer-4" fill="#E2F3FB"></path>
            <path d="M0,50 L3,50" id="Layer-5" fill="#E2F3FB"></path>
            <path d="M57,50 L60,50" id="Layer-6" fill="#E2F3FB"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};
