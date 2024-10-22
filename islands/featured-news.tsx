import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";
import { useState } from "preact/hooks";
import AllNewsIsland from "site/islands/all-news.tsx";
import { BlogPost } from "apps/blog/types.ts";

export interface MainNews {
  title: string;
  image: ImageWidget;
  description: string;
}

export interface News {
  title: string;
  image: ImageWidget;
  tag: string;
}

export interface Info {
  title: string;
  image: ImageWidget;
}

export interface Props {
  tags: string[];
  mainNews?: MainNews;
  news: News[];
  title: string;
  info: Info;
  allNews:  BlogPost[] | null;
  pagination?: {
    page?: number;
    perPage?: number;
  };
}

export default function FeaturedNewsIsland({
  tags,
  mainNews,
  news,
  title,
  info,
  allNews,
  pagination
}: Props) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredNews =
    selectedTags.length === 0
      ? allNews
      : allNews?.filter((newsItem) =>
          selectedTags.some((tag) =>
            newsItem?.extraProps?.some((item) => item.value.includes(tag))
          )
        );

  return (
    <>
      <div class="lg:container text-sm px-5 p-16">
        <div class="space-y-10">
          <div class="flex gap-5 w-full items-center">
            <div className="relative w-full max-w-[457px]">
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

            <button className="md:hidden">
              <Icon id="FilterList" size={22} strokeWidth={2} />
            </button>

            <div class="hidden md:flex flex-wrap gap-2 w-full justify-center">
              {tags.map((item, i) => (
                <button
                  key={i}
                  onClick={() => handleTagClick(item)}
                  class={`badge badge-lg text-xs border border-gray-500 
        ${
          selectedTags.includes(item)
            ? "bg-gray-700 text-white"
            : "bg-white text-gray-700"
        }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div class="flex flex-col md:flex-row gap-5">
            <div class="relative w-full md:w-2/3 overflow-hidden rounded-2xl">
              <img
                src={mainNews?.image}
                alt={mainNews?.title}
                class="h-full w-full object-cover brightness-75"
              />
              <div class="absolute top-0 left-0 p-4 w-[65%]">
                <h2 class="text-3xl md:text-xl lg:text-5xl font-medium text-white">
                  {mainNews?.title}
                </h2>
              </div>
              <div class="absolute bottom-0 left-0 p-4 pr-16">
                <p class="text-base md:text-base lg:text-xl font-normal text-white">
                  {mainNews?.description}
                </p>
              </div>
              <a
                href="/news"
                class="absolute bottom-5 right-2 p-6 text-white w-4 h-4 flex items-center justify-center 
              text-white rounded-full bg-pink-500 hover:bg-pink-600"
              >
                Icon
              </a>
            </div>

            {/* Secondary news */}
            <div class="hidden md:flex flex-col gap-5">
              {news?.map((item, i) => (
                <div class="flex flex-col md:flex-row rounded-2xl w-full">
                  <Image
                    width={300}
                    height={274}
                    class="w-full object-fit z-10"
                    sizes="(max-width: 640px) 100vw, 35vw"
                    src={item.image}
                    alt={item.image}
                    decoding="async"
                    loading="lazy"
                  />
                  <div class="flex flex-col gap-5 p-4 w-full">
                    <div class="flex flex-wrap gap-2">
                      <div class="badge badge-lg text-xs border border-gray-700">
                        {item.tag}
                      </div>
                    </div>
                    <h3 class="text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <AllNewsIsland title={title} info={info} allNews={filteredNews} pagination={pagination} />
    </>
  );
}
