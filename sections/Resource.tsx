import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "site/components/ui/Icon.tsx";

export interface Card {
  title: string;
  image: ImageWidget;
  tags: string[];
}

export interface Props {
  title?: string;
  description: string;
  type: string[];
  topic: string[];
  year: string[];
  cards?: Card[];
}

const Filter = ({ type, description, topic, year }: Props) => {
  return (
    <div class="flex flex-col gap-5">
      <div class="flex flex-col gap-2">
        <h2>Tipo de recurso</h2>
        <div class="flex flex-wrap gap-2 w-full">
          {type.map((item, i) => (
            <div
              key={i}
              class="badge badge-lg text-xs border border-gray-500 bg-transparent"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h2>Assunto</h2>
        <div class="flex flex-wrap gap-2 w-full">
          {topic.map((item, i) => (
            <div
              key={i}
              class="badge badge-lg text-xs border border-gray-500 bg-transparent"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <h2>Ano de publicação</h2>
        <div class="flex flex-wrap gap-2 w-full">
          {year.map((item, i) => (
            <div
              key={i}
              class="badge badge-lg text-xs border border-gray-500 bg-transparent"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ image, title, tags }: Card) => {
  return (
    <div
      class="relative w-full h-72 bg-cover bg-center rounded-lg shadow-lg 
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
};

const Resource = ({ title, cards, description, type, topic, year }: Props) => {
  return (
    <div class="lg:container text-sm px-5 p-16 mb-40">
      <div class="space-y-10">
        <div class="px-4 flex flex-col justify-center items-center md:items-start md:flex-row gap-24">
          <div class="flex flex-col px-5 md:w-[60%] max-w-[440px] gap-5">
            <h1 class="text-5xl">{title}</h1>
            <p class="text-lg font-normal text-gray-400">{description}</p>
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquise aqui..."
                className="w-full h-[40px] px-4 py-2 rounded-full border border-gray-300 pr-10"
              />
              <Icon
                id="Search"
                size={18}
                strokeWidth={2}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              />
            </div>
            <Filter
              type={type}
              description={description}
              topic={topic}
              year={year}
            />
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
};

export default Resource;
