import React from 'react'
import CardSkeleton from './CardSkeleton'

const LoadingSkeletonPage = () => {
  return (
    <div className="container px-4 lg:px-[100px] mx-auto min-h-[65vh] mt-[12vh]">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[6rem] items-center">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  )
}

export default LoadingSkeletonPage
