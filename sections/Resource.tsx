import type { ImageWidget } from "apps/admin/widgets.ts";
import { BlogPost, ExtraProps } from "apps/blog/types.ts";
import Icon from "site/components/ui/Icon.tsx";
import { usePagination } from "site/components/ui/Pagination.tsx";

export interface Card {
  title: string;
  image: ImageWidget;
  tag: ExtraProps[] | undefined;
}

export interface Props {
  title?: string;
  description: string;
  type: string[];
  topic: string[];
  year: string[];
  cards?: BlogPost[] | null;
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

const Card = ({ image, tag, title }: Card) => {
  return (
    <div
      class="relative w-full min-w-[260px] sm:w-[48%] md:w-[30%] lg:w-[24%] aspect-[320/450] bg-cover bg-center rounded-lg shadow-lg 
        overflow-hidden transition-transform transform scale-100 hover:scale-105 hover:z-10"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div class="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between p-4 rounded-lg">
        <h3 class="text-2xl sm:text-3xl lg:text-4xl font-normal text-white">{title}</h3>
        <div class="flex flex-wrap gap-2">
          {tag?.map((item, i) => {
            return item.key === "tag" ? (
              <div
                class="badge badge-lg text-xs border border-white text-white bg-transparent"
                key={i}
              >
                {item.value}
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};


const Resource = ({ title, cards, description, type, topic, year }: Props) => {
  const itemsPerPage = 9;
  const {
    currentItems,
    currentPage,
    totalPages,
    handlePrevPage,
    handleNextPage,
    goToPage,
  } = usePagination(cards ? cards : [], itemsPerPage)

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
          <div class="w-full flex flex-col items-center justify-center gap-y-8 gap-x-8 sm:gap-x-26 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {currentItems?.map((card, index) => (
              <Card
                key={`${index}+${card.title}`}
                image={card.image || ""}
                title={card.title}
                tag={card.extraProps}
              />
            ))}
            <div className="mt-10 flex justify-center items-center space-x-4">
            <button
              className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full disabled:opacity-50"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <Icon id="ArrowRight" size={24} strokeWidth={1} />
            </button>

            <div className="flex space-x-2 items-center">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${
                    currentPage === index + 1
                      ? "bg-pink-500 text-white"
                      : "bg-transparent text-gray-700"
                  }`}
                  onClick={() => goToPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full disabled:opacity-50"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <Icon id="ArrowLeft" size={24} strokeWidth={1} />
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resource;
