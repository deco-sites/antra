import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

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
  title: string
  allNews: News[]
  info: Info;
}


export default function AllNews({ title, info, allNews }: Props) {
  return (
    <div class="lg:container text-sm px-5 p-16 mb-40">
      <div class="space-y-10">
      <section class="w-full px-4 py-10">
  <h1>{title}</h1>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    {allNews?.slice(0, 15).map((news, index) => (
      <div class="relative w-full h-full col-span-1" key={index}>
        <div class="flex flex-col rounded-lg overflow-hidden">
          <img
            src={news.image}
            alt={news.title}
            class="w-full h-[200px] object-cover"
          />
          <div class="p-4">
            <div class="flex flex-wrap gap-2">
              <span class="badge badge-lg text-xs border border-gray-700 bg-transparent">
                {news.tag}
              </span>
            </div>
            <h3 class="text-lg font-semibold mt-2">{news.title}</h3>
          </div>
        </div>
      </div>
    ))}


    {/* Publicidade na linha 3, coluna 3 */}
    <div class="col-span-1 md:row-start-2 md:row-span-2 md:col-start-3 flex flex-col items-center justify-center bg-gray-200 h-[300px]">
  <p class="text-center text-lg font-semibold">Publicidade</p>
  <p class="text-center text-lg font-semibold">Publicidade</p>
  <p class="text-center text-lg font-semibold">Publicidade</p>
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
