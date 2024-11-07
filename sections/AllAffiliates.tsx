import { ImageWidget } from "apps/admin/widgets.ts";
import { BlogPost } from "apps/blog/types.ts";
import AllAffiliatesIsland from "site/islands/all-affiliates-island.tsx";

export interface Props {
  affiliate: BlogPost[] | null
}

export default function AllAffiliates({ affiliate }: Props) {
  return <AllAffiliatesIsland affiliate={affiliate}/>;
}
