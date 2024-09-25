import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

export interface Props {
  message: string;
  name: string;
  position: string;
  image?: ImageWidget;
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function Message({
  message, name, position, image
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-8 lg:py-20">
      <div class="flex w-full justify-center items-center space-y-10">
        <div class="">
          <h2 class="text-4xl font-black leading-snug">
            {message}
          </h2>
          <span class="text-lg font-medium leading-snug text-white">
            {name}
          </span>
          <span class="text-sm font-medium leading-snug text-gray-500">
            {position}
          </span>
        </div>
        <div class="rounded-lg overflow-hidden">
          <Image
            width={660}
            class="object-fit z-10 h-full"
            src={image || ''}
            alt={image}
            decoding="async"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
