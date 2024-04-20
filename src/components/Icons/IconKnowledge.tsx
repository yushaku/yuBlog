type Props = React.SVGProps<SVGSVGElement> & {};

export const IconKnowledge = ({ ...props }: Props) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#000000"
        d="M5.5 2A2.5 2.5 0 0 0 3 4.5v15A2.5 2.5 0 0 0 5.5 22h7.31a6.518 6.518 0 0 1-1.078-1.5H5.5a1 1 0 0 1-1-1h6.813a6.475 6.475 0 0 1-.294-1.5H4.5V4.5a1 1 0 0 1 1-1H17a1 1 0 0 1 1 1v6.519c.52.04 1.022.14 1.5.294V4.5A2.5 2.5 0 0 0 17 2H5.5ZM23 17.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0Zm-6.086-2.403l2.806 1.84a.609.609 0 0 1 .28.52a.654.654 0 0 1-.072.299a.574.574 0 0 1-.198.226l-2.807 1.915a.635.635 0 0 1-.158.077a.551.551 0 0 1-.395-.023a.686.686 0 0 1-.193-.135a.72.72 0 0 1-.13-.2a.613.613 0 0 1-.047-.237v-3.758a.622.622 0 0 1 .367-.57a.552.552 0 0 1 .547.045ZM6 6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6Zm1.5 1.5h7v-1h-7v1Z"
      />
    </svg>
  );
};