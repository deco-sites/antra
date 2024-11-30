import type { ImageWidget } from "apps/admin/widgets.ts";
import FeaturedNewsIsland from "site/islands/featured-news.tsx";
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

export default function FeaturedNews({ tags, title, info, allNews }: Props) {
  return (
    <>
      <FeaturedNewsIsland
        tags={tags}
        title={title}
        info={info}
        allNews={allNews}
      />
    </>
  );
}
