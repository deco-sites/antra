import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface News {
  title: string;
  image: ImageWidget;
  tags: string[];
}

export interface Props {
  title?: string;
  posts?: News[];
}

export default function News({ title, posts }: Props) {
  return (
    <div class="lg:container text-sm px-5 lg:p-16">
      <div class="space-y-10">
        <div class="flex flex-col lg:flex-row gap-4 justify-between">
          <div class="space-y-6 lg:w-1/2">
            <h2 class="text-4xl font-bold leading-snug">{title}</h2>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {posts?.map((post) => (
            <div class="rounded-lg overflow-hidden flex flex-col items-center w-full max-w-[400px]">
              <Image
                width={380}
                class="h-54 object-cover z-10"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={post.image}
                alt={post.image}
                decoding="async"
                loading="lazy"
              />
              <div class="p-1 py-4 space-y-4 text-start">
                <div class="flex flex-wrap justify-start gap-2">
                  {post.tags?.map((tag) => (
                    <div class="badge badge-lg text-xs border border-gray-700">
                      {tag}
                    </div>
                  ))}
                </div>
                <div class="space-y-2">
                  <h3 class="text-2xl font-semibold">{post.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
