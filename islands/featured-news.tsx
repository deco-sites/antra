import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";
import { useState } from "preact/hooks";
import AllNewsIsland from "site/islands/all-news.tsx";
import { BlogPost } from "apps/blog/types.ts";

export interface Info {
  title: string;
  image: ImageWidget;
}

export interface Props {
  tags: {
    key: string
    value: string
  }[];
  title: string;
  info: Info;
  allNews: BlogPost[] | null;
}

interface MainNewsCardProps {
  mainNews?: BlogPost;
}

interface SecondaryNewsCardProps {
  news: BlogPost;
}

interface TagFilterProps {
  tags: {
    key: string
    value: string
  }[];
  selectedTags: string[];
  onTagClick: (tag: any) => void;
  setTagFilterMobile?: any;
  onSavedFilter?: any;
}

export function MainNewsCard({ mainNews }: MainNewsCardProps) {
  return (
    <div class="relative w-full md:w-2/3 overflow-hidden rounded-2xl">
      <Image
        width={667}
        height={400}
        class="w-full min-h-[582px] object-cover brightness-75"
        sizes="(max-width: 640px) 100vw, 45vw"
        src={mainNews?.image || ""}
        alt={mainNews?.image}
        decoding="async"
      />
      <div class="absolute top-0 left-0 p-4 w-[65%]">
        <h2 class="text-3xl md:text-xl lg:text-5xl font-medium text-white">
          {mainNews?.title}
        </h2>
      </div>
      <div class="absolute bottom-0 left-0 p-4 pr-16">
        <p class="text-base md:text-base lg:text-xl font-normal text-white">
          {mainNews?.excerpt}
        </p>
      </div>
      <a
        href="/news"
        class="absolute bottom-5 right-2 p-4 text-white flex items-center justify-center 
               rounded-full bg-pink-500 hover:bg-pink-600 transition duration-300"
      >
        <Icon id="ArrowNorthEast" size={16} strokeWidth={1} />
      </a>
    </div>
  );
}

export function SecondaryNewsCard({ news }: SecondaryNewsCardProps) {
  return (
    <a
      href={`post/${news.slug}`}
      class="flex flex-col md:flex-row rounded-2xl w-full h-full"
    >
      <Image
        width={358}
        height={279}
        class="h-full min-h-[279px] object-cover z-10 rounded-2xl"
        sizes="(max-width: 640px) 100vw, 35vw"
        src={news?.image || ""}
        alt={news.image}
        decoding="async"
        loading="lazy"
      />
      <div class="flex flex-col gap-5 p-4 w-full max-w-[300px] justify-center">
        <div class="flex flex-wrap gap-2">
          {news.extraProps?.map((item, i) => {
            return item.key === "tag" ? (
              <div
                className="badge badge-lg text-xs border border-gray-500 bg-transparent 
                hover:bg-custom-gray hover:text-white hover:border-white"
                key={i}
              >
                {item.value}
              </div>
            ) : null;
          })}
        </div>
        <h3 class="text-xl font-semibold">{news.title}</h3>
      </div>
    </a>
  );
}

export function TagFilter({ tags, selectedTags, onTagClick }: TagFilterProps) {
  return (
    <div class="hidden md:flex flex-wrap gap-2 w-full justify-end">
      {tags.map((item, i) => (
        <button
          key={i}
          onClick={() => onTagClick(item.key)}
          class={`badge badge-lg text-xs border border-gray-500 
          hover:bg-custom-gray hover:text-white hover:border-white 
          ${
            selectedTags.includes(item.key)
              ? "bg-gray-700 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          {item.value}
        </button>
      ))}
    </div>
  );
}

const TagFilterMobile = ({
  tags,
  selectedTags = [],
  onTagClick,
  setTagFilterMobile,
}: TagFilterProps) => {
  const [filters, setFilters] = useState<string[]>([...selectedTags]); // Inicializa com os tags selecionados

  const toggleFilter = (value: string) => {
    setFilters(
      (prevFilters) =>
        prevFilters.includes(value)
          ? prevFilters.filter((v) => v !== value) // Remove tag
          : [...prevFilters, value] // Adiciona tag
    );
  };

  const handleSavedAndClosed = () => {
    onTagClick(filters); // Envia os filtros selecionados
    setTagFilterMobile(false); // Fecha o modal
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col gap-5 overflow-y-auto z-50 px-8 py-10 md:hidden">
      <div className="flex py-4 items-center justify-between">
        <h2 className="text-xl font-semibold">Filtros</h2>
        <button onClick={() => setTagFilterMobile(false)}>
          <Icon id="XMark" size={24} strokeWidth={2} />
        </button>
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold">Tipo de recurso</h2>
        <div className="flex flex-wrap gap-2 w-full">
          {tags.map((item) => (
            <button
              key={item}
              onClick={() => toggleFilter(item.key)}
              className={`rounded-md badge badge-lg text-base border ${
                filters.includes(item.key)
                  ? "bg-gray-700 text-white"
                  : "bg-transparent border-gray-500"
              }`}
            >
              {item.value}
            </button>
          ))}
        </div>
      </div>
      <div>
        <button
          onClick={handleSavedAndClosed}
          className="p-2 bg-pink-500 text-base text-white rounded-md"
        >
          Salvar
        </button>
      </div>
    </div>
  );
};

export default function FeaturedNewsIsland({
  tags,
  title,
  info,
  allNews,
}: Props) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [tagFilterMobile, setTagFilterMobile] = useState(false);

  const allNewsFiltered = allNews?.filter((news) =>
    news.categories?.some((category) => category.slug === "news")
  );

  const topNews = allNewsFiltered?.slice(0, 3) || [];
  const mainNewsData = topNews[0];
  const secondaryNewsData = topNews.slice(1, 3);

  const filteredNews =
    selectedTags.length === 0
      ? allNewsFiltered
      : allNewsFiltered?.filter((newsItem) =>
          selectedTags.some((tag) =>
            newsItem?.extraProps?.some((item) => item.value.includes(tag))
          )
        );

  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const onSavedFilter = (filters: string[]) => {
    setSelectedTags(filters);
  };

  return (
    <>
      {tagFilterMobile && (
        <TagFilterMobile
          tags={tags}
          selectedTags={selectedTags}
          onTagClick={onSavedFilter}
          setTagFilterMobile={setTagFilterMobile}
        />
      )}
      <div class="lg:container text-sm px-5 p-16">
        <div class="space-y-10">
          <div class="flex gap-5 w-full items-center justify-between">
            <div className="relative w-full max-w-[457px]">
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

            <button
              className="md:hidden"
              onClick={() => setTagFilterMobile(true)}
            >
              <Icon id="FilterList" size={22} strokeWidth={2} />
            </button>

            <TagFilter
              tags={tags}
              selectedTags={selectedTags}
              onTagClick={handleTagClick}
            />
          </div>
          {selectedTags.length > 0 ? (
            <></>
          ) : (
            <div class="flex flex-col md:flex-row gap-5 justify-center min-h-[582px]">
              <MainNewsCard mainNews={mainNewsData} />

              <div class="hidden md:flex flex-col gap-5 min-h-[582px] h-full">
                {secondaryNewsData.map((item, i) => (
                  <SecondaryNewsCard key={i} news={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <AllNewsIsland title={title} info={info} allNews={filteredNews || []} />
    </>
  );
}
