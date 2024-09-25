import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";
import Slider from "site/components/ui/Slider.tsx";

interface Card {
  title: string;
  image: ImageWidget;
  tag: string[];
}

interface Props {
  cards: Card[];
}

export default function Manuals({ cards }: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-8 lg:py-20">
      <div>
        <h1>Cartilhas e Manuais</h1>
      </div>

      <Slider rootId="manuals-slider" scroll="smooth" interval={5000} infinite>
        {cards.map((card, index) => (
          <Slider.Item key={card.title} index={index} class="flex justify-center items-center">
            <Image
              src={card.image}
              alt={card.image}
              width={300}
              height={200}
              class="object-cover"
              decoding="async"
              loading="lazy"
            />
            <div class="p-4">
              <h3 class="text-lg font-bold">{card.title}</h3>
              {/* Exibindo tags */}
              <div class="text-gray-500">
                {card.tag.map((tag) => (
                  <span key={tag} class="mr-2">{tag}</span>
                ))}
              </div>
            </div>
          </Slider.Item>
        ))}
      </Slider>
    </div>
  );
}
