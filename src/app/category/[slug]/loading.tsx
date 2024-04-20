import { LoadingSkeleton } from "@/components/sketton";
import React from "react";

function LoadingPage() {
  return (
    <div className="max-w-full">
      <LoadingSkeleton num={2} />
    </div>
  );
}

export default LoadingPage;
