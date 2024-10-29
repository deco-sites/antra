import type { ImageWidget } from "apps/admin/widgets.ts";
import { BlogPost } from "apps/blog/types.ts";
import ProjectsIsland from "site/islands/projects-island.tsx";

export interface Project {
  title: string;
  date: string;
  image: ImageWidget;
  description: string;
  link: string;
}

export interface Props {
  title: string;
  subtitle: string;
  projects: BlogPost[] | null;
}

export default function Projects({ title, subtitle, projects }: Props) {
  return (
    <>
      <ProjectsIsland title={title} subtitle={subtitle} projects={projects}/>
    </>
  );
}
