import React from 'react'

const CardSkeleton = () => {
  return (
    <div id="ArticleContainerItem" className="relative rounded-2xl w-[300px] h-[440px] ">
      <section
        id="ArticleItem"
        className="absolute flex flex-col animate-pulse px-4 rounded-2xl border p-6 border-slate-500"
      >
        <div>
          <div className="rounded-full bg-slate-700 h-5 w-[150px] mb-5"></div>
          <div className="rounded-lg bg-slate-700 h-[200px] w-[310px] my-5"></div>
          <div className="rounded-full bg-slate-700 h-5 w-[300px] my-2"></div>
        </div>

        <div>
          <ul className="flex gap-4 items-start justify-start">
            <li className="rounded-full bg-slate-700 h-5 w-[50px] my-2"></li>
            <li className="rounded-full bg-slate-700 h-5 w-[50px] my-2"></li>
            <li className="rounded-full bg-slate-700 h-5 w-[50px] my-2"></li>
            <li className="rounded-full bg-slate-700 h-5 w-[50px] my-2"></li>
          </ul>
        </div>
        <div className="rounded-full bg-slate-700 h-5 w-[300px] my-5"></div>
      </section>
    </div>
  )
}

export default CardSkeleton
