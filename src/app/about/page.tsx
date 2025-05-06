import { AboutHero } from "./components/AboutHero";
import { AboutUs } from "./components/AboutUs";
import { GithubContributions } from "./components/GithubContributions";
import { ProjectList } from "./components/ProjectList";
import { Skills } from "./components/Skills";
import { WhatWeDo } from "./components/what-we-do";
import { WhyUs } from "./components/WhyUs";
import { CareerPath } from "./components/CareerPath";

async function page() {
  return (
    <section className='max-w-7xl mx-auto'>
      <AboutHero />
      <div className='flex items-center flex-col px-4 lg:px-10 xl:px-10 my-7 w-full'>
        <Skills />
      </div>
      <AboutUs />
      <GithubContributions />
      {/* <Tools /> */}
      <CareerPath />
      <ProjectList />
      <WhyUs />
      <WhatWeDo />
    </section>
  );
}

export default page;
