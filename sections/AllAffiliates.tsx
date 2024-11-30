import { ImageWidget } from "apps/admin/widgets.ts";
import { BlogPost } from "apps/blog/types.ts";
import AllAffiliatesIsland from "site/islands/all-affiliates-island.tsx";

export interface Props {
  affiliate: BlogPost[] | null;
  region: {
    title: string
    options: string[]
  }
  state: {
    title: string
    options: string[]
  }
  theme: {
    title: string
    options: string[]
  }
  targetAudience: {
    title: string
    options: string[]
  }
}

export default function AllAffiliates({ affiliate, region, state, theme, targetAudience }: Props) {
  const cardsAffiliate = affiliate?.filter((affiliate) =>
    affiliate.categories?.some((affiliate) => affiliate.slug === "affiliation")
  );
  return (
    <AllAffiliatesIsland
      affiliate={cardsAffiliate}
      region={region}
      state={state}
      theme={theme}
      targetAudience={targetAudience}
    />
  );
}
