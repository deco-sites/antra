import { ImageWidget } from "apps/admin/widgets.ts";
import HistoryIsland from "site/islands/history-island.tsx";

interface Props {
  image1: ImageWidget;
  image2: ImageWidget;
}
export default function History({ image1, image2 }: Props) {
  return <HistoryIsland image1={image1} image2={image2} />;
}
