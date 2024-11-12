import { BlogPost, ExtraProps } from "apps/blog/types.ts";
import { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "site/components/ui/Icon.tsx";
import { usePagination } from "site/components/ui/Pagination.tsx";
import { useState, useEffect } from "preact/hooks";

export interface Card {
  title: string;
  image: ImageWidget;
  tag: ExtraProps[] | undefined;
  link: string[] | undefined;
}

interface FilterProps {
  type: string[];
  topic: string[];
  year: string[];
  onFilterChange: (filterType: keyof Filters, value: string) => void;
  selectedFilters: Filters;
}

interface Filters {
  type: string[];
  topic: string[];
  year: string[];
}

export interface Props {
  title?: string;
  description: string;
  type: string[];
  topic: string[];
  year: string[];
  cards?: BlogPost[] | null;
}

const Filter = ({
  type,
  topic,
  year,
  onFilterChange,
  selectedFilters,
}: FilterProps) => {
  return (
    <div class="flex flex-col gap-5">
      <div class="flex flex-col gap-2">
        <h2>Tipo de recurso</h2>
        <div class="flex flex-wrap gap-2 w-full">
          {type.map((item) => (
            <button
              key={item}
              onClick={() => onFilterChange("type", item)}
              class={`badge badge-lg text-xs border ${
                selectedFilters.type.includes(item)
                  ? "bg-gray-700 text-white"
                  : "bg-transparent border-gray-500"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <h2>Assunto</h2>
        <div class="flex flex-wrap gap-2 w-full">
          {topic.map((item) => (
            <button
              key={item}
              onClick={() => onFilterChange("topic", item)}
              class={`badge badge-lg text-xs border ${
                selectedFilters.topic.includes(item)
                  ? "bg-gray-700 text-white"
                  : "bg-transparent border-gray-500"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <h2>Ano de publicação</h2>
        <div class="flex flex-wrap gap-2 w-full">
          {year.map((item) => (
            <button
              key={item}
              onClick={() => onFilterChange("year", item)}
              class={`badge badge-lg text-xs border ${
                selectedFilters.year.includes(item)
                  ? "bg-gray-700 text-white"
                  : "bg-transparent border-gray-500"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ image, tag, title, link }: Card) => {
  const openNewWindow = (link: string[] | undefined) => {
    if (!link) return console.error("Vazio");

    globalThis.open(link[0], "_blank");
  };

  return (
    <div
      class="relative w-full min-w-[230px] sm:w-[48%] md:w-[30%] lg:w-[24%] aspect-[320/450] bg-cover bg-center rounded-lg shadow-lg 
           overflow-hidden transition-transform transform scale-100 hover:scale-105 hover:z-10"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div class="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between p-4 rounded-lg">
        <h3 class="text-xl lg:text-2xl font-normal text-white">{title}</h3>
        <div>
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
          <button
            onClick={() => openNewWindow(link)}
            class="flex bg-white rounded-lg p-2 gap-2 justify-center items-center mt-2"
          >
            <p>Baixar recurso</p>
            <Icon id="Download" size={16} strokeWidth={1} />
          </button>
        </div>
      </div>
    </div>
  );
};

const ResourceIsland = ({
  title,
  cards,
  description,
  type,
  topic,
  year,
}: Props) => {
  const cardsFiltered = cards?.filter((cards) =>
    cards.categories?.some((category) => category.slug === "guides")
  );
  const [filteredCardsSearch, setFilteredCardsSearch] = useState(cardsFiltered);

  const filterCards = (term: string) => {
    const filtered = cardsFiltered?.filter((card) =>
      card.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCardsSearch(filtered);
  };

  const [filters, setFilters] = useState<Filters>({
    type: [],
    topic: [],
    year: [],
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFilters({
      type: params.getAll("type"),
      topic: params.getAll("topic"),
      year: params.getAll("year"),
    });
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    filters.type.forEach((value) => params.append("type", value));
    filters.topic.forEach((value) => params.append("topic", value));
    filters.year.forEach((value) => params.append("year", value));
    window.history.replaceState(null, "", `?${params.toString()}`);
  }, [filters]);

  const handleFilterChange = (filterType: keyof Filters, value: string) => {
    setFilters((prevFilters) => {
      const currentValues = prevFilters[filterType];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];
      return { ...prevFilters, [filterType]: newValues };
    });
  };

  const filteredCards = filteredCardsSearch?.filter((card) => {
    const matchesType = filters.type.length
      ? filters.type.some((filterType) =>
          card.extraProps?.some(
            (prop) => prop.key === "tag" && prop.value === filterType
          )
        )
      : true;

    const matchesTopic = filters.topic.length
      ? filters.topic.some((filterTopic) =>
          card?.extraProps?.some(
            (prop) => prop.key === "topic" && prop.value === filterTopic
          )
        )
      : true;

    const matchesYear = filters.year.length
      ? filters.year.includes(card.date.slice(0, 4)) // Extrai o ano de "date"
      : true;

    return matchesType && matchesTopic && matchesYear;
  });

  const extractLinkToDownload = filteredCardsSearch
    ?.map(
      (card) => card?.extraProps?.find((item) => item.key === "link")?.value
    )
    .filter((value) => value !== undefined);
  console.log(extractLinkToDownload);
  const itemsPerPage = 9;
  const {
    currentItems,
    currentPage,
    totalPages,
    handlePrevPage,
    handleNextPage,
    goToPage,
  } = usePagination(filteredCards ? filteredCards : [], itemsPerPage);

  return (
    <div class="lg:container text-sm py-12 px-8 mb-40">
      <div class="space-y-10">
        <div class="flex flex-col justify-center items-center md:items-start md:flex-row gap-24">
          <div class="flex flex-col md:w-[60%] max-w-[440px] gap-5">
            <h1 class="text-5xl">{title}</h1>
            <p class="text-lg font-normal text-gray-400">{description}</p>
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquise aqui..."
                className="w-full h-[40px] px-4 py-2 rounded-full border border-gray-300 pr-10"
                onChange={(e: any) => filterCards(e.target.value)}
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
              topic={topic}
              year={year}
              onFilterChange={handleFilterChange}
              selectedFilters={filters}
            />
          </div>

          <div class="w-full min-w-[850] flex flex-col items-center justify-center">
            <div class="w-full flex flex-col items-center justify-center gap-y-8 gap-x-8 sm:gap-x-26">
              {currentItems && currentItems.length > 0 ? (
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8">
                  {currentItems.map((card, index) => (
                    <Card
                      key={`${index}+${card.title}`}
                      image={card.image || ""}
                      title={card.title}
                      tag={card.extraProps}
                      link={extractLinkToDownload && extractLinkToDownload}
                    />
                  ))}
                </div>
              ) : (
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8">
                  <p class="text-center text-gray-500">
                    Nenhum registro encontrado
                  </p>
                </div>
              )}
            </div>
            <div className="w-full mt-10 flex justify-center items-center space-x-4">
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

export default ResourceIsland;
