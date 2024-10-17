import type { ImageWidget } from "apps/admin/widgets.ts";
import { BlogPost } from "apps/blog/types.ts";
import AllNewsIsland from "site/islands/all-news.tsx";

export interface Info {
  title: string;
  image: ImageWidget;
}

export interface Props {
  title: string;
  info: Info;
  allNews?: BlogPost[] | null;
}

export default function AllNews({ title, info, allNews }: Props) {
  return <AllNewsIsland title={title} info={info} allNews={allNews} />;
}
