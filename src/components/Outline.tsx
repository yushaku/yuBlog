"use client";

import { Warper } from "./IntroBlock";
import { TopicTitle } from "./TopicTitle";
import { TableOfContent } from "@/app/[slug]/page";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IconDot, IconArrowRight } from "./Icons";

const BlogOutline = ({ outline }: { outline: TableOfContent[] }) => {
  const [active, setActive] = useState(outline[0]?.href);

  const handleClick = (event: any, el: TableOfContent) => {
    event.preventDefault();
    const a = document.getElementById(el.href);
    setActive(el.href);
    a?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = outline.map(({ href }) =>
        document.getElementById(href),
      );

      const visibleHeadings = headingElements.filter((el) =>
        isElementInViewport(el),
      );

      if (visibleHeadings[0]) {
        setActive(visibleHeadings[0].id);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, [outline]);

  const isElementInViewport = (el: HTMLElement | null) => {
    if (!el) return;

    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
    <Warper className="sticky animate-fade-left animate-once animate-delay-200 top-20">
      <TopicTitle title="Table of Contents" />
      <ul className="w-full">
        {outline.map((el) => {
          const styledActive =
            active === el.href
              ? "text-primaryColor dark:text-secondColor bg-secondColor/10 rounded-r-lg"
              : "hover:text-primaryColor dark:hover:text-secondColor";

          return (
            <li
              key={el.id}
              className={`group ${styledActive} text-start ${
                el.type === "heading_3" ? "pl-3" : "pl-0"
              }`}
            >
              <Link
                href={`#${el.href}`}
                className="flex items-center py-2"
                onClick={(e) => handleClick(e, el)}
              >
                {el.type === "heading_3" ? (
                  <IconDot
                    width="10px"
                    height="10px"
                    className="animationShow stroke-primaryColor dark:stroke-teal-200 mr-1 group-hover:mr-3"
                  />
                ) : (
                  <IconArrowRight
                    className="animationShow mr-2 rotate-180 w-3 h-3 
                    stroke-primaryColor dark:stroke-teal-200 group-hover:mr-4"
                  />
                )}
                <span className={`animationShow group-hover:font-medium`}>
                  {el.title}
                </span>
              </Link>
            </li>
          );
        })}

        <li className="group pl-0">
          <Link href="#related_posts" className="flex items-center py-2">
            <IconArrowRight className="animationShow mr-2 rotate-180 w-3 h-3 stroke-primaryColor dark:stroke-teal-200 group-hover:mr-4" />
            <span className="group-hover:text-primaryColor dark:group-hover:text-secondColor animationShow group-hover:font-medium">
              Related Posts
            </span>
          </Link>
        </li>
      </ul>
    </Warper>
  );
};
export default BlogOutline;
