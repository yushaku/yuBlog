"use client";

import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  title: string;
};

export const CheckBox = ({ title, ...props }: Props) => {
  return (
    <label className="flexCenter gap-2">
      <input
        type="checkbox"
        className="accent-primaryColor h-5 w-5"
        {...props}
      />
      <p className="text-grayColor">{title}</p>
    </label>
  );
};

export const InputCheckbox = ({
  title,
  name,
  value,
  isChecked,
  onClick,
}: {
  title: string;
  name: string;
  value?: string;
  isChecked: boolean;
  onClick?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <label className="flex justify-start items-start">
      <input
        name={name}
        type="checkbox"
        onChange={onClick}
        checked={isChecked}
        value={value ? value : title}
        className="w-6 h-6 accent-primaryColor rounded"
      />
      <span className="select-none ml-4 text-textColor baseText">{title}</span>
    </label>
  );
};
