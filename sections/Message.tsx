import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

export interface Props {
  paragrafo1: string;
  paragrafo2: string;
  name: string;
  position: string;
  image?: ImageWidget;
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function Message({ paragrafo1, paragrafo2, name, position, image }: Props) {
  return (
    <div class="w-full text-sm bg-[#0459C5] flex justify-end gap-5 space-y-10">
      <div class="flex justify-center items-center lg:space-y-0">
        <div class="lg:w-1/2 text-white lg:pr-12">
          <h2 class="text-4xl lg:text-5xl font-black leading-snug">
            {paragrafo1}
          </h2>
          <h2 class="text-4xl lg:text-5xl font-black leading-snug mt-2">
            {paragrafo2}
          </h2>
          <div class="mt-6">
            <span class="block text-lg font-medium leading-snug">
              {name}
            </span>
            <span class="text-sm font-medium leading-snug text-gray-300">
              {position}
            </span>
          </div>
          <button class="mt-6 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-full">
            Conhecer a ANTRA
          </button>
        </div>
      </div>
      <div class="lg:w-1/2 rounded-lg overflow-hidden">
          <img
            class="object-cover w-full h-full"
            src={image || ""}
            alt="Imagem da ANTRA"
            decoding="async"
            loading="lazy"
          />
        </div>
    </div>
  );
}
