import React from "react";
import { IconWaveLine } from "./Icons";

type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  title: string;
};
export const TopicTitle = ({ className, title, ...props }: Props) => {
  return (
    <h3
      className={`text-foreground flex flex-col items-center text-xl font-semibold ${className}`}
      {...props}
    >
      {title}
      <IconWaveLine className='mt-2' />
    </h3>
  );
};
