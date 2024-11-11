import Image from "apps/website/components/Image.tsx";
import { BlogPost } from "apps/blog/types.ts";

export interface Props {
  title?: string;
  news: BlogPost[] | null;
}

export default function News({ title, news }: Props) {
  const newsFiltered = news
    ?.filter((news) =>
      news.categories?.some((category) => category.slug === "news")
    )
    .slice(0, 6);

  return (
    <div class="lg:container text-sm px-5 lg:p-16">
      <div class="space-y-10">
        <div class="flex flex-col lg:flex-row gap-4 justify-between">
          <div class="space-y-6 lg:w-1/2">
            <h2 class="text-4xl font-bold leading-snug">{title}</h2>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {newsFiltered?.map((news) => (
            <a href={`post/${news.slug}`}>
              <div class="rounded-lg overflow-hidden flex flex-col items-center w-full max-w-[400px]">
                <Image
                  width={380}
                  height={274}
                  class="h-54 object-cover z-10"
                  sizes="(max-width: 640px) 100vw, 30vw"
                  src={news.image || ""}
                  alt={news.image}
                  decoding="async"
                  loading="lazy"
                />
                <div class="p-1 py-4 space-y-4 text-start">
                  <div class="flex flex-wrap justify-start gap-2">
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
                  <div class="space-y-2">
                    <h3 class="text-2xl font-semibold">{news.title}</h3>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
