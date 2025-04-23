"use client";

import "dracula-prism/dist/css/dracula-prism.min.css";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "next-share";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Prism from "prismjs";
import "prismjs/components/prism-bash.min";
import "prismjs/components/prism-json.min";
import "prismjs/components/prism-solidity.min";
import "prismjs/components/prism-typescript.min";
// import "prismjs/themes/prism-tomorrow.css";
import React, { useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import { IconCopy, IconMoon, IconSun } from "./Icons";

export const TwitterShareBtn = ({ url }: { url: string }) => {
  return (
    <TwitterShareButton
      url={url}
      title={"next-share is a social share buttons for your next React apps."}
    >
      <TwitterIcon size={32} round />
    </TwitterShareButton>
  );
};

export const LinkedinShareBtn = ({
  url,
  title,
}: {
  url: string;
  title: string;
}) => {
  return (
    <LinkedinShareButton url={url} title={title}>
      <LinkedinIcon size={32} round />
    </LinkedinShareButton>
  );
};

export const FaceBookShareBtn = ({ url }: { url: string }) => {
  return (
    <FacebookShareButton
      url={url}
      quote={"next-share is a social share buttons for your next React apps."}
      hashtag={"#yushaku"}
    >
      <FacebookIcon size={32} round />
    </FacebookShareButton>
  );
};

export const ContentWarper = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const path = process.env.BLOG_URL + pathname;

  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  return (
    <div className='relative grid max-w-[1100px] mx-auto'>
      <ul className='order-2 animate-fade-right animate-once animate-delay-200 lg:fixed left-5 botton-1/2 translate-y-1/2 z-20 flex gap-2 lg:flex-col justify-center lg:justify-start'>
        <li>
          <FacebookShareButton url={path} quote={title} hashtag={"#yushaku"}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </li>
        <li>
          <LinkedinShareButton url={path} title={title}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </li>
        <li>
          <TwitterShareButton url={path} title={title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </li>
        <li
          className='flexCenter bg-foreground/20 h-8 w-8 cursor-pointer rounded-full border border-grayColor/70'
          onClick={() => {
            navigator.clipboard.writeText(path);
            toast.success("Copied!");
          }}
        >
          <IconCopy
            color={theme === "dark" ? "white" : "#234f66"}
            width='25px'
            height='25px'
          />
        </li>

        <li
          className='flexCenter bg-foreground/20 h-8 w-8 cursor-pointer rounded-full border border-grayColor/70'
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          {theme === "dark" ? (
            <IconMoon color='#ffffff' width='20px' height='20px' />
          ) : (
            <IconSun color='#234f66' width='20px' height='20px' />
          )}
        </li>
      </ul>
      <div className='order-1'>{children}</div>
    </div>
  );
};

export const Bubble = () => {
  const isDragging = useRef<boolean>(false);
  const position = useRef({ x: 150, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isDragging) {
      position.current = { x: e.clientX, y: e.clientY };
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      className='absolute h-12 w-12 rounded-full bg-blue-500 transition-all duration-300'
      style={{
        top: position.current.y,
        left: position.current.x,
      }}
      onMouseDown={handleMouseUp}
      onMouseUp={handleMouseUp}
      onMouseOut={handleMouseUp}
      onMouseMove={handleMouseMove}
    />
  );
};
