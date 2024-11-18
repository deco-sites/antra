import { useEffect, useRef } from "preact/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { CardWhatWeDo } from "site/islands/card-what-we-do.tsx";

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

export default function WhatWeDoIsland({ title, cards }: Props) {
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("section") === "oque-fazemos" && boardRef.current) {
      boardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <div ref={boardRef} className="lg:container text-sm mb-10">
      <div className="space-y-10 px-6 md:px-24 py-8 md:py-24">
        <div class="w-full flex flex-col gap-8">
          <h1 class="text-4xl md:text-5xl font-semibold">{title}</h1>
          <CardWhatWeDo card={cards[0]} primary />
          <div class="w-full flex flex-col md:flex-row justify-between gap-5">
            <CardWhatWeDo card={cards[1]} />
            <CardWhatWeDo card={cards[2]} />
          </div>
        </div>
      </div>
    </div>
  );
}
