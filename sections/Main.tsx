import { BlogPost } from "apps/blog/types.ts";
import { FunctionalComponent, h } from "preact";
import Icon from "site/components/ui/Icon.tsx";

interface Item {
  image: string;
  title: string;
  description?: string;
  link: string;
}

interface Props {
  items: Item[];
  main: BlogPost[] | null;
}

const NewsItem = ({ image, title, description, link }: any) => {
  return (
    <div class="relative h-[450px] md:h-[700px] w-full overflow-hidden rounded-2xl">
      <img
        src={image}
        alt={title}
        class="h-full w-full object-cover brightness-75"
      />
      <div class="absolute top-0 left-0 p-4 w-[65%]">
        <h2 class="text-3xl md:text-xl lg:text-5xl font-medium text-white">
          {title}
        </h2>
      </div>
      <div class="absolute bottom-0 left-0 p-4 pr-16">
        <p class="text-base md:text-base lg:text-xl font-normal text-white">
          {description}
        </p>
      </div>
      <a
        href={`post/${link}`}
        class="absolute bottom-5 right-2 p-4 text-white flex items-center justify-center 
          rounded-full bg-pink-500 hover:bg-pink-600 transition duration-300"
      >
        <Icon id="ArrowNorthEast" size={16} strokeWidth={1} />
      </a>
    </div>
  );
};

const NewsFeed: FunctionalComponent<Props> = ({ items, main }: Props) => {
  const newsFiltered = main?.filter((main) =>
    main.categories?.some((category) => category.slug === "news")
  );
  return (
    <div class="lg:container h-auto text-sm lg:p-16 py-10 px-5">
      <div class="">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-[70%_30%] lg:grid-cols-[75%_25%]">
          <NewsItem
            image={newsFiltered && newsFiltered[0]?.image}
            title={newsFiltered && newsFiltered[0]?.title}
            description={newsFiltered && newsFiltered[0]?.excerpt}
            link={newsFiltered && newsFiltered[0]?.slug}
          />
          <NewsItem {...items[1]} />
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
