import { BlogPost, ExtraProps } from "apps/blog/types.ts";
import { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "site/components/ui/Icon.tsx";
import { usePagination } from "site/components/ui/Pagination.tsx";
import { useState, useEffect } from "preact/hooks";

export interface Card {
  title: string;
  image: ImageWidget;
  tag: ExtraProps[] | undefined;
  link: ExtraProps[];
}

interface FilterProps {
  typeTitle: string
  topicTitle: string
  yearTitle: string
  type: {
    key: string
    value:string
  }[];
  topic: {
    key: string
    value: string
  }[];
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
  typeTitle: string
  type: {
    key: string
    value:string
  }[];
  topicTitle: string
  topic: {
    key: string
    value: string
  }[];
  yearTitle: string
  year: string[];
  cards?: BlogPost[] | null;
}

const Filter = ({
  type,
  topic,
  year,
  onFilterChange,
  selectedFilters,
  typeTitle
}: FilterProps) => {
  return (
    <div class="hidden md:flex flex-col gap-5">
      <div class="flex flex-col gap-2">
        <h2>{typeTitle}Tipo de recurso</h2>
        <div class="flex flex-wrap gap-2 w-full">
          {type.map((item) => (
            <button
              key={item}
              onClick={() => onFilterChange("type", item.key)}
              class={`badge badge-lg text-xs border border-gray-500 
                hover:bg-custom-gray hover:text-white hover:border-white 
                ${
                  selectedFilters.type.includes(item.key)
                    ? "bg-gray-700 text-white"
                    : "bg-white text-gray-700"
                }`}
            >
              {item.value}
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
              onClick={() => onFilterChange("topic", item.key)}
              class={`badge badge-lg text-xs border border-gray-500 
                hover:bg-custom-gray hover:text-white hover:border-white 
                ${
                  selectedFilters.topic.includes(item.key)
                    ? "bg-gray-700 text-white"
                    : "bg-white text-gray-700"
                }`}
            >
              {item.value}
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
              class={`badge badge-lg text-xs border border-gray-500 
                hover:bg-custom-gray hover:text-white hover:border-white 
                ${
                  selectedFilters.year.includes(item)
                    ? "bg-gray-700 text-white"
                    : "bg-white text-gray-700"
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

const FilterMobile = ({
  setFilterMobile,
  type,
  topic,
  year,
  onSavedFilter,
  selectedFilters,
}: any) => {
  const [filters, setFilters] = useState({
    type: [...selectedFilters.type],
    topic: [...selectedFilters.topic],
    year: [...selectedFilters.year],
  });

  const toggleFilter = (
    filterType: "type" | "topic" | "year",
    value: string
  ) => {
    setFilters((prevFilters) => {
      const currentValues = prevFilters[filterType];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];
      return { ...prevFilters, [filterType]: newValues };
    });
  };

  const handleSavedAndClosed = () => {
    onSavedFilter(filters);
    setFilterMobile(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col gap-5 overflow-y-auto z-50 px-8 py-10 md:hidden">
      <div className="flex py-4 items-center justify-between">
        <h2 className="text-xl font-semibold">Filtros</h2>
        <button onClick={() => setFilterMobile(false)}>
          <Icon id="XMark" size={24} strokeWidth={2} />
        </button>
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold">Tipo de recurso</h2>
        <div className="flex flex-wrap gap-2 w-full">
          {type.map((item: string) => (
            <button
              key={item}
              onClick={() => toggleFilter("type", item)}
              className={`rounded-md badge badge-lg text-base border ${
                filters.type.includes(item)
                  ? "bg-gray-700 text-white"
                  : "bg-transparent border-gray-500"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold">Assunto</h2>
        <div className="flex flex-wrap gap-2 w-full">
          {topic.map((item: string) => (
            <button
              key={item}
              onClick={() => toggleFilter("topic", item)}
              className={`rounded-md badge badge-lg text-base border ${
                filters.topic.includes(item)
                  ? "bg-gray-700 text-white"
                  : "bg-transparent border-gray-500"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5 mb-8">
        <h2 className="text-2xl font-semibold">Ano de publicação</h2>
        <div className="flex flex-wrap gap-2 w-full">
          {year.map((item: string) => (
            <button
              key={item}
              onClick={() => toggleFilter("year", item)}
              className={`rounded-md badge badge-lg text-base border ${
                filters.year.includes(item)
                  ? "bg-gray-700 text-white"
                  : "bg-transparent border-gray-500"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div>
        <button
          onClick={() => handleSavedAndClosed()}
          className="p-2 bg-pink-500 text-base text-white rounded-md"
        >
          Salvar
        </button>
      </div>
    </div>
  );
};

const Card = ({ image, tag, title, link }: Card) => {
  const extractLinkToDownload =
    link.find((item) => item.key === "link")?.value || "";

  const openNewWindow = (link: string | undefined) => {
    if (!link) return console.error("Vazio");

    globalThis.open(link, "_blank");
  };

  return (
    <div
      class="relative w-full min-w-[300px] md:min-w-[230px] sm:w-[48%] md:w-[30%] lg:w-[24%] aspect-[320/450] bg-cover bg-center rounded-lg shadow-lg 
           overflow-hidden transition-transform transform scale-100 hover:scale-105 hover:z-10"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div class="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between p-4 rounded-lg">
        <h3 class="text-xl lg:text-2xl font-normal text-white">{title}</h3>
        <div class="flex md:flex-col justify-between items-center md:items-start">
          <div class="flex flex-wrap gap-2">
            {tag?.map((item, i) => {
              return item.key === "tag" ? (
                <div
                  class="badge badge-lg text-xs border border-white text-white bg-transparent 
                  hover:bg-white hover:text-custom-gray hover:border-white"
                  key={i}
                >
                  {item.value}
                </div>
              ) : null;
            })}
          </div>
          <button
            onClick={() => openNewWindow(extractLinkToDownload)}
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
  typeTitle,
  topicTitle,
  yearTitle
}: Props) => {
  const cardsFiltered = cards?.filter((cards) =>
    cards.categories?.some((category) => category.slug === "guides")
  );
  const [filteredCardsSearch, setFilteredCardsSearch] = useState(cardsFiltered);
  const [filterMobile, setFilterMobile] = useState(false);

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

  const onSavedFilter = (filters: Filters) => {
    setFilters(filters);
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
      ? filters.year.includes(card.date.slice(0, 4))
      : true;

    return matchesType && matchesTopic && matchesYear;
  });

  const itemsPerPage = 9;
  const {
    currentItems,
    currentPage,
    totalPages,
    handlePrevPage,
    handleNextPage,
    goToPage,
  } = usePagination(filteredCards ? filteredCards : [], itemsPerPage);
  console.log(currentItems);
  return (
    <div class="lg:container text-sm py-12 px-8 mb-40">
      {filterMobile && (
        <FilterMobile
          setFilterMobile={setFilterMobile}
          type={type}
          topic={topic}
          year={year}
          onSavedFilter={onSavedFilter}
          selectedFilters={filters}
          filterCards={filterCards}
        />
      )}
      <div class="space-y-10">
        <div class="flex flex-col justify-center items-center md:items-start md:flex-row gap-24">
          <div class="flex flex-col md:w-[60%] max-w-[440px] gap-5">
            <h1 class="text-5xl">{title}</h1>
            <p class="text-lg font-normal text-gray-400">{description}</p>

            <div class="flex md:flex-col gap-5 w-full items-center">
              <div className="relative w-full max-w-[457px]">
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

              <button
                className="md:hidden"
                onClick={() => setFilterMobile(true)}
              >
                <Icon id="FilterList" size={22} strokeWidth={2} />
              </button>

              <Filter
                typeTitle={typeTitle}
                topicTitle={topicTitle}
                yearTitle={yearTitle}
                type={type}
                topic={topic}
                year={year}
                onFilterChange={handleFilterChange}
                selectedFilters={filters}
              />
            </div>
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
                      link={card.extraProps}
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
