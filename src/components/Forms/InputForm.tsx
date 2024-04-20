"use client";

import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type Props<TType> = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  errors?: string;
  name: keyof TType;
  isTextArea?: boolean;
};

export function FormInput<TType>({
  errors,
  type,
  label,
  placeholder,
  isTextArea,
  className,
  ...props
}: Props<TType>) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const classes = twMerge(
    `mt-3 h-[52px] w-full appearance-none rounded-[8px] border bg-white px-[20px] py-[15px] text-sm text-[#627480] placeholder-[#A3A9B1] focus:outline-none md:text-base ${
      className ?? ""
    } ${errors && "border-red-700 text-red-700 placeholder-red-400"}`
  );

  return (
    <div className="relative">
      {label && (
        <label className="text-grayColor mb-3 text-base font-bold">
          {label}
        </label>
      )}

      {isTextArea ? (
        <textarea className={classes} placeholder={placeholder} />
      ) : (
        <input
          type={isShowPassword ? "text" : type}
          placeholder={placeholder}
          className={classes}
          {...props}
        />
      )}

      {type === "password" && (
        <span
          className="absolute right-5 top-[46px] z-20 w-7 h-7 cursor-pointer"
          onClick={() => setIsShowPassword(!isShowPassword)}
        >
          {isShowPassword ? (
            <EyeSlashIcon color="#234f66" />
          ) : (
            <EyeIcon color="#234f66" />
          )}
        </span>
      )}
    </div>
  );
}
