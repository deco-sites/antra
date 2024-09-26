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

const NewsItem = ({ image, title, description, link }: Item) => {
  return (
    <div class="relative lg:h-[700px] h-full w-full overflow-hidden rounded-2xl">
      <img src={image} alt={title} class="h-full w-full object-cover brightness-75"/>
      <div class="absolute top-0 left-0 p-4 w-[65%]">
        <h2 class="text-5xl font-medium text-white">{title}</h2>
      </div>
      <div class="absolute bottom-0 left-0 p-4 pr-16">
        <p class="text-xl font-normal text-white">{description}</p>
      </div>
      <a href={link} class="absolute bottom-5 right-2 p-6 text-white w-4 h-4 flex items-center justify-center 
      text-white rounded-full bg-pink-500 hover:bg-pink-600">
        Icon
      </a>
    </div>
  );
};

const NewsFeed: FunctionalComponent<Props> = ({ items }: Props) => {
  return (
    <div class="lg:container h-[830px] text-sm lg:p-16">
      <div class="">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-[70%_30%] lg:grid-cols-[75%_25%]">
          {items.map((item, index) => (
            <NewsItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;