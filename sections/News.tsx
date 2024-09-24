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

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function BlogPosts({
  title, posts
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-8 lg:py-18">
      <div class="space-y-10">
        <div class="flex flex-col lg:flex-row gap-4 justify-between">
          <div class="space-y-6 lg:w-1/2">
            <h2 class="text-4xl font-bold leading-snug">
              {title}
            </h2>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts?.map((post) => (
            <div class="rounded-lg overflow-hidden">
              <Image
                width={410}
                class="w-full object-fit z-10"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={post.image}
                alt={post.image}
                decoding="async"
                loading="lazy"
              />
              <div class="p-1 py-4 space-y-4">
                <div class="flex flex-wrap gap-2">
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
