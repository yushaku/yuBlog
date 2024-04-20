type Props = React.SVGProps<SVGSVGElement> & {};

export const IconAdd = ({ color = "#fff" }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 16h16M16 24V8"
      ></path>
    </svg>
  );
};
