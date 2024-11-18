import type { ImageWidget } from "apps/admin/widgets.ts";
import WhatWeDoIsland from "site/islands/what-we-do-island.tsx";

interface Card {
  title: string;
  description: string;
  imageDesk: ImageWidget;
  image: ImageWidget;
}
export interface Props {
  title: string;
  cards: Card[];
}

export default function WhatWeDo({ title, cards }: Props) {
  return <WhatWeDoIsland title={title} cards={cards} />;
}
