import { PinContainer } from "@/components/ui/3d-pin";

export const projectList = [
  {
    title: "Yu DEX",
    imageLink: "/dex1.png",
    description:
      "All in one marketplace for trading crypto, with a decentralized exchange. Built on top of the BSC blockchain. Users can trade crypto on the BSC network and receive crypto in their wallets. And NFts made easy with the use of the NFT Marketplace.",
    tools: ["React", "BSC blockchain", "DEX", "Wagmi", "Token"],
    linkPage: "https://yushaku-dex.vercel.app/",
  },
  {
    title: "Yu AI",
    imageLink: "/ai.png",
    description:
      "Experience the future of data interaction with our AI app. Powered by OpenAI and advanced vector database technology, users can effortlessly upload files and ask natural language questions. Whether it's extracting insights from documents or analyzing images, our app makes data analysis intuitive and efficient. Revolutionize your workflow with seamless AI integration",
    tools: ["NextJs", "Vercel", "OpenAI", "Vector Database", "OAuth"],
    githubLink: "https://github.com/yushaku/ai-assistant",
  },
  {
    title: "developer's blog",
    imageLink:
      "https://user-images.githubusercontent.com/72312124/199775184-02c78337-f0cf-4786-8227-43cd58982536.png",
    description:
      "It is this one! my blog where I share my thoughts and ideas about web development.",
    tools: ["NextJs", "Vercel", "Notion", "GraphGl"],
    githubLink: "https://github.com/yushaku/yuBlog",
  },
  {
    title: "Pomodoro focus app",
    imageLink:
      "https://user-images.githubusercontent.com/72312124/200182685-3a0595f1-c949-49f1-964b-9735f2f3c69f.png",
    description:
      "The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo.",
    tools: ["html", "css", "javascript", "github"],
    linkPage: "https://yushaku.github.io/pomodoro/",
  },
];

export function ProjectList() {
  return (
    <div
      id='Experience_Section'
      className='mx-auto flex flex-col items-center justify-center p-8'
    >
      <div className='flex items-center gap-3 mb-12'>
        <h3 className='text-3xl text-primary'>Some Projects I have Built</h3>
      </div>

      <div className='grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-14'>
        {projectList.map((project, index) => {
          return (
            <PinContainer
              title={project.title}
              href={project.linkPage || project.githubLink || ""}
              key={index}
              pinClassName='w-96 h-80'
            >
              <div className='flex basis-full flex-col tracking-tight w-full h-[20rem]'>
                <h3 className='pb-2 font-bold text-lg text-foreground'>
                  {project.title}
                </h3>
                <div className='text-base !m-0 !p-0 font-normal'>
                  <span className='text-foreground/80 line-clamp-2'>
                    {project.description}
                  </span>
                </div>
                <div
                  className='flex-1 w-full rounded-lg mt-4'
                  style={{
                    background: `url(${project.imageLink})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </PinContainer>
          );
        })}
      </div>
    </div>
  );
}
