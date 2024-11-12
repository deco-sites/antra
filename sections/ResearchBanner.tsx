import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

interface Banner {
  image: ImageWidget;
  title: string;
}

export interface Props {
  bannerDesk: Banner;
  bannerMob: Banner;
}

function BannerMobile({ image, title }: Banner) {
  return (
    <div class="relative w-full max-w-[450px] rounded-2xl overflow-hidden shadow-lg md:hidden">
      <Image
        width={450}
        height={420}
        class="w-full h-auto object-contain"
        sizes="100vw"
        src={image}
        alt={image}
        decoding="async"
        loading="lazy"
      />
      <div class="absolute inset-0 flex flex-col justify-start px-8 pt-8 text-start">
        <h2 class="text-4xl font-bold text-white">{title}</h2>
      </div>
      <a
        href="/news"
        class="absolute bottom-5 right-5 p-3 text-white rounded-full bg-pink-500 hover:bg-pink-600 transition duration-300"
      >
        <Icon id="ArrowNorthEast" size={16} strokeWidth={1} />
      </a>
    </div>
  );
}

function BannerDesktop({ image, title }: Banner) {
  return (
    <div class="relative w-full max-w-[1384px] rounded-2xl overflow-hidden shadow-lg hidden md:block">
      <Image
        width={1380}
        height={200}
        class="w-full h-auto object-contain"
        sizes="100vw"
        src={image}
        alt={image}
        decoding="async"
        loading="lazy"
      />
      <div class="absolute inset-0 flex flex-col justify-center px-8 text-start">
        <h2 class="text-4xl font-bold text-white">{title}</h2>
      </div>
      <a
        href="/news"
        class="absolute bottom-8 right-5 p-3 text-white rounded-full bg-pink-500 hover:bg-pink-600 transition duration-300"
      >
        <Icon id="ArrowNorthEast" size={16} strokeWidth={1} />
      </a>
    </div>
  );
}

export default function ResearchBanner({ bannerDesk, bannerMob }: Props) {
  return (
    <div class="lg:container text-sm px-5 p-16 mb-12">
      <div class="space-y-10">
        <div class="w-full flex justify-center items-center">
          <BannerDesktop image={bannerDesk.image} title={bannerDesk.title} />
          <BannerMobile image={bannerMob.image} title={bannerMob.title} />
        </div>
      </div>
    </div>
  );
}
