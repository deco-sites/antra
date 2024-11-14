import type { ImageWidget } from "apps/admin/widgets.ts";
import OurBoardIsland from "site/islands/our-board-island.tsx";

interface Member {
  name: string;
  role: string;
  description: string;
  image: ImageWidget;
}
export interface Props {
  title: string;
  members: Member[];
}

export default function OurBoard({ title, members }: Props) {
  return <OurBoardIsland title={title} members={members} />;
}
