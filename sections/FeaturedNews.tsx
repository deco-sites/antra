import type { ImageWidget } from "apps/admin/widgets.ts";
import FeaturedNewsIsland from "site/islands/featured-news.tsx";
import { BlogPost } from "apps/blog/types.ts";

export interface MainNews {
  title: string;
  image: ImageWidget;
  description: string;
}

export interface News {
  title: string;
  image: ImageWidget;
  tag: string;
}

export interface Info {
  title: string;
  image: ImageWidget;
}

export interface Props {
  tags: string[];
  mainNews?: MainNews;
  news: News[];
  title: string;
  info: Info;
  allNews: BlogPost[]
}

export default function FeaturedNews(
  { tags, mainNews, news, title, info, allNews }: Props,
) {
  return (
    <>
      <FeaturedNewsIsland
        tags={tags}
        mainNews={mainNews}
        news={news}
        title={title}
        info={info}
        allNews={allNews}
      />
    </>
  );
}
