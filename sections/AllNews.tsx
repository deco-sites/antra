import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { BlogPost } from "apps/blog/types.ts";

export interface Info {
  title: string;
  image: ImageWidget;
}

export interface Props {
  title: string;
  info: Info;
  allNews?: BlogPost[] | null;
  posts: BlogPost[] | null;
}

export default function AllNews({ title, info, posts }: Props) {
  return (
    <div class="lg:container text-sm px-5 p-16 mb-40">
      <div class="space-y-10">
        <section class="w-full px-4 py-10">
          <h2 class="text-2xl md:text-4xl font-bold leading-snug mb-8">
            {title}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {posts?.map((news, index) => (
              <div
                class="relative w-full h-full col-span-1 flex justify-center"
                key={index}
              >
                <div class="rounded-lg overflow-hidden flex flex-col items-center w-full max-w-[400px]">
                  {news?.image && (
                    <Image
                      width={380}
                      height={274}
                      class="h-54 object-cover z-10"
                      sizes="(max-width: 640px) 100vw, 30vw"
                      src={news?.image}
                      alt={news?.image}
                      decoding="async"
                      loading="lazy"
                    />
                  )}
                  <div class="p-1 py-4 space-y-4 text-start w-full">
                    <div class="flex flex-wrap gap-2">
                      <span class="badge badge-lg text-xs border border-gray-700 bg-transparent">
                        {news.extraProps?.find(item => {
                          return item.key === 'tag' && item.value
                        })
                        }
                      </span>
                    </div>
                    <h3 class="text-lg font-semibold mt-2">{news.title}</h3>
                  </div>
                </div>
              </div>
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
                  href={"/news"}
                  class="absolute bottom-5 right-2 p-6 text-white w-4 h-4 flex items-center justify-center 
                  text-white rounded-full bg-pink-500 hover:bg-pink-600"
                >
                  Icon
                </a>
              </div>
            </div>
          </div>

          <div class="mt-10 flex justify-center">
            <button class="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600">
              Carregar mais
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
