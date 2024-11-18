import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";
import WhoAreWeIsland from "site/islands/who-are-we-island.tsx";

export interface Props {
  title: string;
  links: string[];
  image: ImageWidget;
  imageDesktop: ImageWidget;
}

export default function WhoAreWe({ title, links, image, imageDesktop }: Props) {
  return (
    <WhoAreWeIsland
      title={title}
      links={links}
      image={image}
      imageDesktop={imageDesktop}
    />
  );
}
