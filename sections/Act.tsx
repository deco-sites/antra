import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

interface Card {
  title: string;
  description: string;
  icon: ImageWidget;
}

interface Props {
  title: string;
  cards: Card[]
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function Act({
  title, cards
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-8 lg:py-20">
      <div class="space-y-10">
        <div class="flex w-[350px] flex-col gap-4 justify-center items-start">
          <h2 class="text-4xl font-black leading-snug">
            {title}
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 items-center justify-center pb-40">
          {cards?.map((card) => (
            <div class="h-full rounded-3xl flex flex-col gap-5 overflow-hidden p-5 border hover:bg-gray-100">
              <Image
                width={40}
                height={40}
                class="object-fit z-10"
                src={card.icon}
                alt={card.icon}
                decoding="async"
                loading="lazy"
              />
              <h2 class="text-xl font-bold">{card.title}</h2>
              <span class="text-base font-medium">{card.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
