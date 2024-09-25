import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

export interface Props {
  paragrafo1: string;
  paragrafo2: string;
  name: string;
  position: string;
  icon: ImageWidget;
  image?: ImageWidget;
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function Message({
  paragrafo1,
  paragrafo2,
  name,
  position,
  image,
  icon,
}: Props) {
  return (
    <div class="lg:max-h-[850px] bg-[#0459C5] flex justify-between items-center">
      <div class="w-full flex justify-center">
        <div class="flex flex-col gap-5 w-[55%]">
          <div class="mt-6 flex flex-col gap-10">
            <h2 class="text-4xl lg:text-4xl font-bold text-white leading-snug">
              {paragrafo1}
            </h2>
            <h2 class="text-4xl lg:text-4xl font-bold text-white leading-snug">
              {paragrafo2}
            </h2>
          </div>

          <div class="mt-6 flex items-center">
            <span class="border border-white w-28 mr-4"></span>
            <div>
              <Image
                width={48}
                height={48}
                class="w-[48px] h-[48px] object-cover rounded-full mr-4"
                src={icon || ""}
                alt="Imagem da ANTRA"
                decoding="async"
                loading="lazy"
              />
            </div>
            <div>
              <span class="block text-lg font-bold text-white leading-snug">
                {name}
              </span>
              <span class="text-sm font-medium leading-snug text-gray-300">
                {position}
              </span>
            </div>
          </div>

          <button class="mt-6 w-48 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg">
            Conhecer a ANTRA
          </button>
        </div>
      </div>
      <div class="lg:w-1/2 rounded-lg overflow-hidden">
        <Image
          width={660}
          height={850}
          class="object-cover"
          src={image || ""}
          alt="Imagem da ANTRA"
          decoding="async"
          loading="lazy"
        />
      </div>
    </div>
  );
}
