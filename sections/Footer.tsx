import type { ImageWidget } from "apps/admin/widgets.ts";
import FooterIsland from "site/islands/footer-island.tsx";

export interface Subscribe {
  title: string;
  description: string;
  /** @format rich-text */
  instructions: string;
}

export interface Social {
  network: "Facebook" | "Instagram" | "Linkedin" | "Twitter";
  href: string;
}

export interface Props {
  background?: {
    src?: ImageWidget;
  };
  title?: string;
  links?: {
    label: string;
    href: string;
  }[];
  subscribe?: Subscribe;
  copyright?: string;
  social?: Social[];
  privacyPolicy:string
}

export default function Footer({
  background,
  subscribe,
  copyright,
  social,
  links,
  title,
  privacyPolicy
}: Props) {
  return (
    <FooterIsland
      background={background}
      subscribe={subscribe}
      copyright={copyright}
      title={title}
      social={social}
      links={links}
      privacyPolicy={privacyPolicy}
    />
  );
}
