import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  src?: string;
  href: string;
  text?: string;
  alt?: string;
}

export interface Props {
  title: string;
  description: string;
  button: CTA;
  logos?: ImageWidget[];
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function BlogPosts({
  title, description, button, logos
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-8 lg:py-28">
      <div class="space-y-10">
        <div class="flex flex-col lg:flex-row gap-4 justify-between">
          <div class="space-y-6 lg:w-1/2">
            <h2 class="text-4xl font-bold leading-snug">
              {title}
            </h2>
            <span class="text-lg font-medium leading-snug">
              {description}
            </span>
            <button href={button.href}>{button.text}</button>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
          {logos?.map((logo) => (
            <div class="rounded-lg overflow-hidden">
              <Image
                width={100}
                class="w-full object-fit z-10"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={logo}
                alt={logo}
                decoding="async"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
