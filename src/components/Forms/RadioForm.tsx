"use client";

import Link from "next/link";

type Props = {
  name: string;
  title: string;
  description?: string;
  isSelected?: boolean;
  isDisable?: boolean;
};

export const InputRadio = ({ name, title, description, isDisable }: Props) => {
  return (
    <label
      className={`relative block items-center rounded-lg shadow px-[15px] border py-5 ${
        isDisable ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <div className="flex gap-4 ">
        <input
          type="radio"
          name={name}
          value={title}
          disabled={isDisable}
          className="w-6 h-6 accent-primaryColor"
        />
        <p className="text-lg text-textColor font-medium">{title}</p>
      </div>

      <div className="ml-[40px] mt-3">
        <p className="baseText">{description}</p>
        {isDisable && (
          <Link
            href="/settings/billing"
            className="block p-0 mt-3 baseText text-textColor hover:text-primaryColor"
          >
            Upgrade to Premium
          </Link>
        )}
      </div>
    </label>
  );
};
