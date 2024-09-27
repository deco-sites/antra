import { HeaderSite } from "site/islands/header-site.tsx";
import { HeaderMobileSite } from "site/islands/header-mobile-site.tsx";

export interface CTA {
  src?: string;
  href: string;
  text?: string;
  alt?: string;
}

export interface Nav {
  logo?: {
    src?: string;
    alt?: string;
  };
  navigation?: {
    links: {
      label: string;
      url?: string;
      img?: string;
      imgLabel?: string;
      submenu?: {
        label: string;
        subLabel?: string;
        url: string;
      }[];
    }[];
    buttons?: CTA[];
  };
}

export default function Header({
  logo = {
    src: "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/antra/7a170a54-a9aa-4470-b04f-95197d431345/antra-logo.png",
    alt: "Logo",
  },
  navigation,
}: Nav) {
  return (
    <>
      <HeaderSite logo={logo} navigation={navigation} />
      <HeaderMobileSite logo={logo} navigation={navigation} />
    </>
  );
}
