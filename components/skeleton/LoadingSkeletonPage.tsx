import React from 'react'
import CardSkeleton from './CardSkeleton'

const LoadingSkeletonPage = () => {
  return (
    <div className="container mx-auto min-h-[65vh] mt-[5vh]">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-32 gap-y-8">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />

        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  )
}

export default LoadingSkeletonPage
