import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Card {
  title: string;
  image: ImageWidget;
  tags: string[];
}

export interface Props {
  title?: string;
  description: string;
  type: string[]
  topic: string[]
  year: string[]
  cards?: Card[];
}

export default function Resource({ title, cards }: Props) {
  return (
    <div class="lg:container text-sm px-5 lg:p-16">
      <div class="space-y-10">
        <div class="flex flex-col md:flex-row gap-5"></div>

      </div>
    </div>
  );
}
