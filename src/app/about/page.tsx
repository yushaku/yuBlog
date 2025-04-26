import AboutHero from "./components/AboutHero";
import AboutUs from "./components/AboutUs";
import { GithubContributions } from "./components/GithubContributions";

async function page() {
  return (
    <>
      <AboutHero />
      {/* <div className='flex items-center flex-col px-4 lg:px-10 xl:px-10 my-7 w-full'>
        <Skills />
      </div> */}
      <AboutUs />
      <GithubContributions />
      {/* <Tools /> */}
      {/* <CareerPath />
      <WhyUs />
      <WhatWeDo /> */}
    </>
  );
}

export default page;
