import React from "react";
import { SocialMedia } from "./SocialMedia";

export const Footer = () => {
  return (
    <footer className="max-w-7xl mt-[50px] mx-auto flex h-20 items-center justify-between p-4">
      <div className="text-grayColor flex gap-6">
        <span className="text-primaryColor dark:text-secondColor">
          © 2023 yushaku Code
        </span>
      </div>

      <div>
        <SocialMedia />
      </div>
    </footer>
  );
};
