import Link from "next/link";
import React from "react";

export const Pagination = ({
  hasMore,
  limit,
}: {
  hasMore: boolean;
  limit?: number;
}) => {
  return (
    <section className="mt-5 flex gap-5 justify-center flex-1">
      <Link className="dark:hover:text-secondColor" href={`?limit=${limit}`}>
        {hasMore ?? "Next page"}
      </Link>
    </section>
  );
};
