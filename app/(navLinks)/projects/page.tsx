"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { projectData } from "@/helpers/data";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProjectProps {
  imageSrc: string;
  title: string;
  designation: string;
  description: string;
  skills: string[];
  demo?: string;
  source?: string;
}
const Projects: React.FC = () => {
  const router = useRouter();
  return (
    <section className="m-5 mb-32">
      <h2 className="md:text-3xl text-2xl font-bold uppercase tracking-wide mb-2">
        Projects
      </h2>
      <p className="md:text-lg text:sm md:font-semibold md:tracking-wide text-foreground rounded-lg text-justify">
        {projectData.description}
      </p>
      <div className="flex flex-col">
        {projectData.projects.map((project: ProjectProps, index: number) => (
          <>
            <Separator className="bg-primary-foreground my-4" />
            <div className="flex flex-col gap-4" key={`${index}`}>
              <div className="flex items-center gap-4">
                <Image
                  src={project.imageSrc}
                  alt={project.imageSrc}
                  className="md:h-12 md:w-12 h-8 w-8 rounded-full self-start"
                  width={100}
                  height={100}
                />
                <div>
                  <h1 className="font-bold md:text-xl text-lg">
                    {project.title}
                  </h1>
                  <h1>{project.designation}</h1>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="mb-4">{project.description}</h1>
                <h1 className="flex gap-4 flex-wrap">
                  {project.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-input rounded-full px-3 py-1 text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </h1>
              </div>
              <div className="mt-3 flex gap-4">
                <Button
                  aria-label={`Demo link for ${project.title}`}
                  onClick={() => router.push(project.demo as string)}
                  className={`text-foreground ${!project.demo && "hidden"}`}
                >
                  Demo
                </Button>
                <Button
                  aria-label={`Demo link for ${project.title}`}
                  onClick={() => router.push(project?.source as string)}
                  className={`text-foreground ${!project?.source && "hidden"}`}
                >
                  Source
                </Button>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Projects;
