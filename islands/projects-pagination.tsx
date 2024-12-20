import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "site/components/ui/Icon.tsx";
import { BlogPost } from "apps/blog/types.ts";
import { usePagination } from "site/components/ui/Pagination.tsx";

export interface Project {
  title: string;
  date: string;
  image: ImageWidget;
  description: string;
  link: string;
}

interface Props {
  projects: BlogPost[] | null;
}

export default function ProjectsPagination({ projects }: Props) {
  const itemsPerPage = 13;
  const {
    currentItems,
    currentPage,
    totalPages,
    handlePrevPage,
    handleNextPage,
    goToPage,
  } = usePagination(projects ? projects : [], itemsPerPage);

  return (
    <div class="w-full flex flex-col gap-5 justify-center items-center">
      {currentItems?.map((project: BlogPost, i) => (
        <div
          key={i}
          class="w-full max-w-[1320px] flex flex-col-reverse md:flex-row rounded-2xl md:border border-gray-300"
        >
          <div class="flex flex-col justify-between py-5 md:py-12 md:px-12 w-full md:w-[65%]">
            <div>
              <p class="text-lg text-gray-500 font-normal">{project.date}</p>
              <h3 class="text-3xl font-semibold mb-5">{project.title}</h3>
              <p
                class="hidden md:flex text-lg text-gray-500 font-normal w-[70%]"
                dangerouslySetInnerHTML={{
                  __html: project.content,
                }}
              />
            </div>
            <div>
              <button class="hidden md:flex justify-center items-center gap-2 p-3 rounded-lg text-white bg-pink-500 hover:bg-pink-600 transition duration-300">
                Ver mais
                <Icon
                  id="ArrowNorthEast"
                  size={12}
                  strokeWidth={1}
                  class="text-white"
                />
              </button>
            </div>
          </div>
          <div class="w-full md:w-[55%]">
            <a href={"/"}>
              <Image
                width={300}
                height={274}
                class="w-full h-full object-cover rounded-2xl md:rounded-r-2xl md:rounded-l-none"
                sizes="(max-width: 640px) 100vw, 35vw"
                src={project?.image || ""}
                alt={project.image}
                decoding="async"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      ))}
      <div className="mt-10 flex justify-center items-center space-x-4">
        <button
          className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full disabled:opacity-50"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <Icon id="ArrowRight" size={24} strokeWidth={1} />
        </button>

        <div className="flex space-x-2 items-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                currentPage === index + 1
                  ? "bg-pink-500 text-white"
                  : "bg-transparent text-gray-700"
              }`}
              onClick={() => goToPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full disabled:opacity-50"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <Icon id="ArrowLeft" size={24} strokeWidth={1} />
        </button>
      </div>
    </div>
  );
}
