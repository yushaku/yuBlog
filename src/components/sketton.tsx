import React from "react";

const CardSkeleton = () => {
  return (
    <article className="border w-fit border-gray-700 p-4 animate-pulse rounded-2xl">
      <div>
        <div className="rounded-full bg-slate-700 h-5 w-[150px] mb-5"></div>
        <div className="rounded-full bg-slate-700 h-5 w-[310px] my-2"></div>
        <div className="rounded-lg bg-slate-700 h-[200px] w-[310px] my-5"></div>
      </div>

      <div>
        <ul className="flex gap-4 items-start">
          <li className="rounded-full bg-slate-700 h-7 w-[80px] my-2"></li>
          <li className="rounded-full bg-slate-700 h-7 w-[80px] my-2"></li>
          <li className="rounded-full bg-slate-700 h-7 w-[80px] my-2"></li>
        </ul>
      </div>
    </article>
  );
};

export const LoadingSkeleton = ({ num = 3 }) => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[...Array(num)].map((_it, index) => {
          return <CardSkeleton key={index} />;
        })}
      </div>
    </div>
  );
};
