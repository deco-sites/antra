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
      {primary ? (
        <div className="w-full flex flex-col md:flex-row gap-8 bg-gray-100 rounded-2xl">
          <div>
            <Image
              className="hidden md:flex w-full rounded-2xl"
              width={380}
              src={card.imageDesk}
              alt={card.imageDesk}
              decoding="async"
              loading="lazy"
            />
            <Image
              className="md:hidden w-full rounded-2xl"
              width={380}
              src={card.image}
              alt={card.image}
              decoding="async"
              loading="lazy"
            />
          </div>
          <div>
            <p>{card.title}</p>
            <p>{card.description}</p>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col md:flex-row gap-8 bg-gray-100 rounded-2xl">
          <div>
            <p>{card.title}</p>
            <p>{card.description}</p>
          </div>
          <div>
            <Image
              className="hidden md:flex w-full rounded-2xl"
              width={380}
              src={card.imageDesk}
              alt={card.imageDesk}
              decoding="async"
              loading="lazy"
            />
            <Image
              className="md:hidden w-full rounded-2xl"
              width={380}
              src={card.image}
              alt={card.image}
              decoding="async"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </>
  );
};
