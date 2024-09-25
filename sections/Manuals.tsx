import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

interface Card {
  title: string
  image: ImageWidget
  tag: string[]
}

interface Props {
  cards: Card[]
}

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

export default function Manuals({
  cards
}: Props) {
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-8 lg:py-20">
      <div>
        <h1>Cartilhas e Manuais</h1>
      </div>
      
    </div>
  );
}
