import type { ImageWidget } from "apps/admin/widgets.ts";
import AffiliatesIsland from "site/islands/affiliates-island.tsx";

export interface CTA {
  src?: string;
  href: string;
  text?: string;
  alt?: string;
}

export interface Props {
  title: string;
  description: string;
  button: CTA;
  logos?: ImageWidget[];
}

export default function Affiliates({
  title,
  description,
  button,
  logos,
}: Props) {
  return (
    <AffiliatesIsland
      title={title}
      description={description}
      button={button}
      logos={logos}
    />
  );
}
