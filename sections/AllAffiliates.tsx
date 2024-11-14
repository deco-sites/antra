import { ImageWidget } from "apps/admin/widgets.ts";
import { BlogPost } from "apps/blog/types.ts";
import AllAffiliatesIsland from "site/islands/all-affiliates-island.tsx";

export interface Props {
  affiliate: BlogPost[] | null;
}

export default function AllAffiliates({ affiliate }: Props) {
  const cardsAffiliate = affiliate?.filter((affiliate) =>
    affiliate.categories?.some((affiliate) => affiliate.slug === "affiliation")
  );
  return <AllAffiliatesIsland affiliate={cardsAffiliate} />;
}
