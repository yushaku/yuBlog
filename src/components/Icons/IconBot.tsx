type Props = React.SVGProps<SVGSVGElement> & {};

export const IconBot = ({ ...props }: Props) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#000000"
        d="M16 25a6.99 6.99 0 0 1-5.833-3.129l1.666-1.107a5 5 0 0 0 8.334 0l1.666 1.107A6.99 6.99 0 0 1 16 25zm4-11a2 2 0 1 0 2 2a1.98 1.98 0 0 0-2-2zm-8 0a2 2 0 1 0 2 2a1.98 1.98 0 0 0-2-2z"
      />
      <path
        fill="#000000"
        d="M30 16v-2h-2v-4a4.005 4.005 0 0 0-4-4h-2V2h-2v4h-8V2h-2v4H8a4.005 4.005 0 0 0-4 4v4H2v2h2v5H2v2h2v3a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4v-3h2v-2h-2v-5Zm-4 10a2.002 2.002 0 0 1-2 2H8a2.002 2.002 0 0 1-2-2V10a2.002 2.002 0 0 1 2-2h16a2.002 2.002 0 0 1 2 2Z"
      />
    </svg>
  );
};
