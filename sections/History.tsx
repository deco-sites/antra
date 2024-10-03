import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import { Text1 } from "site/islands/text1-history.tsx";
import { Text2 } from "site/islands/text2-history.tsx";
interface Props {
  image1: ImageWidget;
  image2: ImageWidget;
}
export default function History({ image1, image2 }: Props) {
  return (
    <div className="lg:container text-sm mb-40">
      <div className="space-y-10">
        <div class="flex flex-col items-center gap-8">
          <div class="w-full max-w-[850px] flex flex-col">
            <h2 class="text-6xl font-bold text-black leading-snug">
              E assim nasceu o
            </h2>
            <h2 class="text-6xl font-bold text-black leading-snug text-center">
              <span class="text-blue-400">movimento</span>{" "}
              <span class="text-pink-500">nacional</span>
            </h2>
            <h2 class="text-6xl font-bold text-black leading-snug text-right">
              de <span class="text-black">Travestis e Transexuais</span>.
            </h2>
            <p class="text-gray-500 mt-2 text-right">Keila Simpson Sousa</p>
          </div>
          <Text1 />
          <Text2 />
          <div class="flex max-w-[800px]">
            <Image
              className="w-full rounded-2xl"
              width={380}
              src={image1}
              alt={image1}
              decoding="async"
              loading="lazy"
            />
            <Image
              className="w-full rounded-2xl"
              width={380}
              src={image2}
              alt={image2}
              decoding="async"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
