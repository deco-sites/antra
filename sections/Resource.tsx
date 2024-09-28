import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

export interface Card {
  title: string;
  image: ImageWidget;
  tags: string[];
}

export interface Props {
  title?: string;
  description: string;
  type: string[]
  topic: string[]
  year: string[]
  cards?: Card[];
}

const Card = ({ image, title, tags }: Card) => {
  return (
    <div
      class="relative w-[320px] h-[450px] bg-cover bg-center rounded-lg shadow-lg 
  overflow-visible transition-transform transform scale-100 hover:scale-105 hover:z-10"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div class="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between p-4 rounded-lg">
        <h3 class="text-lg font-semibold text-white">{title}</h3>
        <div class="flex flex-wrap gap-2">
          {tags.map((t, index) => (
            <span
              key={index}
              class="badge badge-lg text-xs border border-white text-white bg-transparent"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const Resource = ({ title, cards, description }: Props) => {
  return (
    <div class="lg:container text-sm px-5 lg:p-16">
      <div class="space-y-10">
        <div class="flex flex-col md:flex-row gap-5">
          <div class="">
            <h1>{title}</h1>
            <p>{description}</p>
            <div class="flex gap-5">
              <input type="text" placeholder="Pesquise aqui..." />
              <Icon
                id="FilterList"
                size={18}
                strokeWidth={2}
                class="flex md:flex-none"
              />
            </div>
          </div>
          <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards?.map((card, index) => (
              <Card 
                key={`${index}+${card.title}`}
                image={card.image} 
                title={card.title} 
                tags={card.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resource;