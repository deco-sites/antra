import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

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
  title,
  description,
  button,
  logos,
}: Props) {
  return (
    <div class="lg:container lg:p-16 text-sm py-10 lg:py-24"> {/* Added more spacing for better breathing room */}
  <div class="space-y-12"> {/* Increased spacing between sections */}
    <div class="flex w-[350px] flex-col gap-4 justify-center items-start">
      <h2 class="text-4xl font-black leading-snug">{title}</h2>
      <span class="text-lg font-medium leading-snug">{description}</span>
      <button
        class="w-[12rem] p-2 flex gap-2 items-center justify-center text-white rounded-md bg-pink-500 hover:bg-pink-600"
        href={button.href}
      >
        {button.text}
        <Icon id="ArrowRight" size={14} strokeWidth={1} />
      </button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-10 items-center justify-center"> {/* Increased gap for logos */}
      {logos?.map((logo) => (
        <div class="rounded-lg overflow-hidden">
          <Image
            width={88}
            class="object-fit z-10 h-full"
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
