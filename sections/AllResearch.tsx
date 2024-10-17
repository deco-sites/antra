import type { ImageWidget } from "apps/admin/widgets.ts";
import AllResearchPagination from "site/islands/all-research-pagination.tsx";

export interface Research {
  title: string;
  image: ImageWidget;
  tag: string;
}

export interface Props {
  title: string;
  AllResearch: Research[];
}

export default function AllResearch({ title, AllResearch }: Props) {
  return (
    <div class="lg:container text-sm px-5 p-16 mb-40">
      <div class="space-y-10">
        <AllResearchPagination title={title} research={AllResearch} />
      </div>
    </div>
  );
}
