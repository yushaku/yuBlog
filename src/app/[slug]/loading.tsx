import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-3 animate-pulse rounded-2xl gap-10 max-w-7xl mx-auto h-[50vh] ">
      <article className="col-span-3 md:col-span-2">
        <div className="rounded-2xl bg-slate-700 h-8 w-4/5 mb-5"></div>
        <div className="rounded-2xl bg-slate-700 h-3 w-[310px] my-2"></div>
        <div className="rounded-2xl bg-slate-700 h-64 w-full my-2"></div>
        <div className="rounded-2xl bg-slate-700 h-[200px] w-full my-5"></div>

        <ul className="flex gap-4 items-start">
          <li className="rounded-full bg-slate-700 h-7 w-[80px] my-2"></li>
          <li className="rounded-full bg-slate-700 h-7 w-[80px] my-2"></li>
          <li className="rounded-full bg-slate-700 h-7 w-[80px] my-2"></li>
        </ul>
      </article>

      <article className="col-span-3 md:col-span-1">
        <div className="rounded-lg bg-slate-700 h-8 w-4/5 mb-5"></div>
        <div className="rounded-lg bg-slate-700 h-[200px] w-full my-5"></div>
      </article>
    </div>
  );
};

export default loading;
