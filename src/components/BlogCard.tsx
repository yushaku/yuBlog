import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type BlogPost = {
  title: string;
  date: string;
  description: string;
  thumbnail: string;
  slug: string;
};

export const BlogCard = ({ title, date, description, thumbnail, slug }: BlogPost) => {
  return (
    <article className="group w-[300px] rounded-lg border border-gray-700 overflow-hidden">
      <Link href={`/${slug}`}>
        <div className="relative h-[200px] w-full overflow-hidden">
          <Image
            src={thumbnail ?? "/images/default-thumbnail.svg"}
            alt={title}
            placeholder="empty"
            object-fit="cover"
            sizes="384px"
            fill
          />
        </div>

        <div className="h-[224px] p-6">
          <p className="text-grayColor text-sm">
            <span>Posted on {moment(date).format("LL")}</span>
          </p>
          <h3 className="text-strokeColor group-hover:text-secondColor my-2 text-xl font-semibold line-clamp-2">
            {title}
          </h3>
          <p className="text-grayColor line-clamp-3 text-sm">{description}</p>
        </div>
      </Link>
    </article>
  );
};