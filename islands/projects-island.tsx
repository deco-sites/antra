import { BlogPost } from "apps/blog/types.ts";
import Icon from "site/components/ui/Icon.tsx";
import ProjectsPagination from "site/islands/projects-pagination.tsx";

export interface Props {
  title: string;
  subtitle: string;
  projects: BlogPost[] | null;
}

export default function ProjectsIsland ({ title, subtitle, projects }: Props)  {
     const allProjectsFiltered = projects?.filter((news) =>
          news.categories?.some((category) => category.slug === "projects")
        );
  return (
    <div class="lg:container text-sm px-5 p-16">
      <div class="space-y-10">
        <section class="w-full px-4 py-10 mb-20">
          <div class="flex flex-col justify-center items-center mb-12">
            <h1 class="text-5xl font-bold">{title}</h1>
            <h2 class="hidden md:flex text-lg text-center lg:w-[30%] md:w-[40%] mt-5">
              {subtitle}
            </h2>
            <div class="w-full mt-5 flex gap-5 justify-center items-center">
              <div className="relative w-full max-w-[457px] md:hidden">
                <input
                  type="text"
                  placeholder="Pesquise aqui..."
                  className="w-full h-[40px] px-4 py-2 rounded-full border border-gray-300 pr-10"
                />
                <Icon
                  id="Search"
                  size={18}
                  strokeWidth={2}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                />
              </div>
              <Icon
                id="FilterList"
                class="md:hidden"
                size={18}
                strokeWidth={2}
              />
            </div>
          </div>
          <ProjectsPagination projects={allProjectsFiltered || []} />
        </section>
      </div>
    </div>
  );
}
