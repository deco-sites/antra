import { h, FunctionalComponent } from 'preact';

interface Item {
  image: string;
  title: string;
  description?: string;
  link: string;
}

interface Props {
  items: Item[];
}

const NewsItem: FunctionalComponent<Item> = ({ image, title, description, link }) => {
  return (
    <div class="relative h-64 w-full overflow-hidden">
      <img src={image} alt={title} class="h-full w-full object-cover" />
      <div class="absolute top-0 left-0 p-4">
        <h2 class="text-xl font-bold text-white">{title}</h2>
      </div>
      <div class="absolute bottom-0 left-0 p-4">
        <p class="text-sm text-white">{description}</p>
      </div>
      <a href={link} class="absolute bottom-0 right-0 p-4 text-white">
        Saiba Mais
      </a>
    </div>
  );
};

const NewsFeed: FunctionalComponent<Props> = ({ items }) => {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-8 lg:py-20">
      <div class="space-y-10">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <NewsItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;