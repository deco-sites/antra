import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

interface Card {
  title: string;
  description: string;
  imageDesk: ImageWidget;
  image: ImageWidget;
}
interface Props {
  primary?: boolean;
  card: Card;
}

export const CardWhatWeDo = ({ card, primary }: Props) => {
  return (
    <>
      {primary
        ? (
          <div class="max-w-[1320px] w-full flex flex-col md:flex-row gap-8 bg-gray-100 rounded-2xl">
            <div class="w-full h-full">
              <Image
                class="hidden md:flex rounded-2xl"
                width={380}
                height={274}
                src={card.imageDesk}
                alt={card.imageDesk}
                decoding="async"
                loading="lazy"
              />
              <Image
                class="md:hidden w-full rounded-2xl"
                width={327}
                height={274}
                src={card.image}
                alt={card.image}
                decoding="async"
                loading="lazy"
              />
            </div>
            <div class="p-12 flex flex-col justify-center items-start gap-4">
              <p class="text-2xl font-semibold">{card.title}</p>
              <p class="text-base">{card.description}</p>
            </div>
          </div>
        )
        : (
          <div class="w-full flex flex-col-reverse md:flex-row bg-gray-100 rounded-2xl">
            <div class="p-12 flex flex-col justify-center items-start gap-4">
              <p class="text-2xl font-semibold">{card.title}</p>
              <p class="text-base">{card.description}</p>
            </div>
            <Image
              class="hidden md:flex rounded-2xl"
              width={240}
              height={274}
              src={card.imageDesk}
              alt={card.imageDesk}
              decoding="async"
              loading="lazy"
            />
            <Image
              class="md:hidden w-full rounded-2xl"
              width={327}
              height={274}
              src={card.image}
              alt={card.image}
              decoding="async"
              loading="lazy"
            />
          </div>
        )}
    </>
  );
};
