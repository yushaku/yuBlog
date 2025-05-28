import { Post } from "contentlayer/generated";

export const sharePost: Array<
  Omit<Post, "body" | "_id" | "_raw" | "type" | "status" | "tags">
> = [
  {
    title: "What do you do for a living?",
    thumbnail:
      "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd900429f-4eab-4391-b168-5eb6f88d589a_4800x4800.png",
    slug: "https://workchronicles.substack.com/p/comic-what-do-you-do-for-a-living?ref=dailydev",
    date: "2025-05-28",
  },
];
