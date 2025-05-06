import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export const sleep = (ms: number | `${number}ms`) => {
  let duration: number;
  if (typeof ms === "string") {
    duration = Number.parseInt(ms);
  } else {
    duration = ms;
  }
  return new Promise((resolve) => setTimeout(resolve, duration));
};
