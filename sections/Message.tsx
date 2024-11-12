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

export default function Message({
  paragrafo1,
  paragrafo2,
  name,
  position,
  image,
  icon,
}: Props) {
  return (
    <div class="lg:max-h-[880px] bg-[#0459C5] flex flex-col md:flex-row justify-between items-center relative">
      <div class="w-full flex justify-center py-12 md:py-1">
        <div class="flex flex-col gap-8 w-[55%] z-10">
          <div class="flex flex-col gap-8">
            <h2 class="text-xl lg:text-4xl font-bold text-white leading-tight">
              {paragrafo1}
            </h2>
            <h2 class="text-xl lg:text-4xl font-bold text-white leading-tight">
              {paragrafo2}
            </h2>
          </div>

          <div class="flex items-center gap-6 mt-8">
            <span class="border border-white w-28"></span>
            <div class="flex-shrink-0">
              <Image
                width={48}
                height={48}
                class="w-[48px] h-[48px] object-cover rounded-full"
                src={icon || ""}
                alt="Imagem da ANTRA"
                decoding="async"
                loading="lazy"
              />
            </div>
            <div>
              <span class="block text-lg font-bold text-white">{name}</span>
              <span class="text-sm font-medium text-gray-300">{position}</span>
            </div>
          </div>

          <button class="mt-8 w-48 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition duration-300">
            Conhecer a ANTRA
          </button>
        </div>
      </div>

      <div class="w-full h-[400px] md:h-full md:w-[55%] rounded-lg overflow-hidden">
        <Image
          width={750}
          height={850}
          class="w-full h-full object-cover object-top"
          src={image || ""}
          alt="Imagem da ANTRA"
          decoding="async"
          loading="lazy"
        />
      </div>
    </div>
  );
}
