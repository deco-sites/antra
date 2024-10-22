import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { usePagination } from "site/components/ui/Pagination.tsx";
import Icon from "site/components/ui/Icon.tsx";
import { BlogPost } from "apps/blog/types.ts";

export interface Info {
  title: string;
  image: ImageWidget;
}

export interface ExtraProps {
  key: string;
  value: string;
}

export interface Props {
  title: string;
  info: Info;
  allNews: BlogPost[] | null
}

export default function AllNewsIsland({ title, info, allNews }: Props) {
  const itemsPerPage = 13;
  const {
    currentItems,
    currentPage,
    totalPages,
    handlePrevPage,
    handleNextPage,
    goToPage,
  } = usePagination(allNews ? allNews : [], itemsPerPage);

  return (
    <div class="lg:container text-sm px-5 p-16 mb-40">
      <div class="space-y-10">
        <section class="w-full px-4 py-10">
          <h2 class="text-2xl md:text-4xl font-bold leading-snug mb-8">
            {title}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {currentItems?.map((news: BlogPost, index) => (
              <a href={`post/${news.slug}`}>
              <div
                class="relative w-full h-full col-span-1 flex justify-center"
                key={index}
              >
                <div class="overflow-hidden flex flex-col items-center w-full max-w-[400px]">
                  {news?.image && (
                    <Image
                      width={408}
                      height={232}
                      class="h-[232px] object-cover z-10 rounded-lg"
                      src={news?.image}
                      alt={news?.image}
                      decoding="async"
                      loading="lazy"
                    />
                  )}
                  <div class="p-1 py-4 space-y-4 text-start w-full">
                    <div class="flex flex-wrap gap-2">
                      {news.extraProps?.map((item, i) => {
                        return item.key === "tag" ? (
                          <div
                            className="badge badge-lg text-xs border border-gray-500 bg-transparent"
                            key={i}
                          >
                            {item.value}
                          </div>
                        ) : null;
                      })}
                    </div>
                    <h3 class="text-lg font-semibold mt-2">{news.title}</h3>
                  </div>
                </div>
              </div>
              </a>
            ))}

            <div
              class="hidden w-full col-span-1 md:row-start-2 md:row-span-2 md:col-start-3 
              md:flex flex-col items-start justify-start h-full"
            >
              <div class="relative md:h-full overflow-hidden rounded-2xl">
                <img
                  src={info.image}
                  alt={info.image}
                  class="h-full object-cover brightness-75"
                />
                <div class="absolute top-0 left-0 p-4 w-[65%]">
                  <h2 class="text-3xl md:text-xl lg:text-5xl font-medium text-white">
                    {title}
                  </h2>
                </div>
                <div class="absolute bottom-0 left-0 p-4 pr-16">
                  <p class="text-base md:text-base lg:text-xl font-normal text-white">
                    {info.title}
                  </p>
                </div>
                <a
                  href="/news"
                  class="absolute bottom-5 right-2 p-4 text-white flex items-center justify-center 
                    rounded-full bg-pink-500 hover:bg-pink-600"
                >
                  <Icon id="ArrowNorthEast" size={16} strokeWidth={1} />
                </a>
              </div>
            </div>
          </div>
          <div></div>

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
        </section>
      </div>
    </div>
  );
}
