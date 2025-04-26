import { GradientCard } from "@/components/cuicui/cards";
import { TopicTitle } from "@/components/TopicTitle";
import { topics } from "@/utils/constants";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maps of content | Yushaku",
  description: "Detailed learning roadmap and knowledge map.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='min-h-screen bg-background'>
      <TopicTitle title='Map of Contents' className='mb-12' />

      <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
        {topics.map(({ title, logo: Logo }) => (
          <Link href={`/mocs/${title.toLocaleLowerCase()}`}>
            <GradientCard
              key={title}
              title={title}
              withArrow={true}
              circleSize={400}
              className='flex items-center justify-center h-20'
            >
              <Logo className='size-10' />
            </GradientCard>
          </Link>
        ))}
      </div>

      <div className='container mx-auto px-4 py-8'>{children}</div>
    </main>
  );
}
