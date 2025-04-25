import React from "react";
import { siteConfig } from "@/utils/siteConfig";

export const HeroSection = () => {
  return (
    <div className='relative h-[400px] w-full overflow-hidden'>
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-center px-4'>
        <h1 className='text-4xl font-bold text-white mb-4'>
          {siteConfig.name}
        </h1>
        <p className='text-gray-300 max-w-lg mb-8'>{siteConfig.description}</p>
      </div>
    </div>
  );
};
