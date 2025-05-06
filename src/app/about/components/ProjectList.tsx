import { GradientCard } from "@/components/cuicui/cards";
import { projectList } from "@/utils/constants";
import Link from "next/link";

export function ProjectList() {
  return (
    <div
      id='Experience_Section'
      className='mx-auto flex flex-col items-start justify-center p-8'
    >
      <div className='TITLE flex items-center gap-3 mb-[40px]'>
        <h3 className='text-3xl'>Some Projects I have Built</h3>
        <p className='h-[2px] w-[250px] bg-gray-600 translate-y-1'></p>
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
        {projectList.map((project, index) => {
          return (
            <Link
              href={project?.linkPage || project?.githubLink || ""}
              key={index}
              target='_blank'
            >
              <GradientCard
                title={project.title}
                description={project.description}
                withArrow={true}
              >
                <div
                  className='flex gap-2'
                  style={{
                    background: `url(${project.imageLink})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </GradientCard>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
