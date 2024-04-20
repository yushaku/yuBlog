import Link from "next/link";
import React from "react";

export const metadata = {
  title: "404 not found",
};

const NotFoundPage = () => {
  return (
    <div className="flex h-[75vh] flex-col items-center justify-center">
      <h1 className="text-[200px]">404</h1>
      <p className="text-2xl">oh, sorry this page note found</p>
      <Link href="/">
        <span className="dark:text-dark_accentColor text-light_accentColor text-2xl">
          go to home page
        </span>
      </Link>
    </div>
  );
};

export default NotFoundPage;
