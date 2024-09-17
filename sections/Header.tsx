import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";

export interface CTA {
  src?: string;
  href: string;
  text: string;
  alt?: string
}

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
    icon: CTA[];
  };
}

export default function Header({
  logo = {
    src:
      "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/antra/7a170a54-a9aa-4470-b04f-95197d431345/antra-logo.png",
    alt: "Logo",
  },
  navigation = {
    links: [
      { label: "A ANTRA", url: "/" },
      { label: "Cartilhas e Manuais", url: "/" },
      { label: "Pesquisas", url: "/" },
      { label: "Notícias", url: "/" },
      { label: "Afiliação", url: "/" },
      { label: "Projetos", url: "/" },
      { label: "Eleições", url: "/" },
      { label: "Apoio", url: "/" },
      { label: "Contato", url: "/" },
    ],
    icon: [
      { 
        src: "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/antra/99f7eb8e-3532-4b69-9084-d46986b4aa52/contrast.svg", 
        href: "/", 
        text: "Contrast", 
        alt: "Contrast" 
      },
      { 
        src: "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/antra/6a3d6385-02c0-4da9-820c-a4d652a121f5/globe.svg", 
        href: "/", 
        text: "Globe", 
        alt: "Globe" 
      },
      { 
        src: "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/antra/eadb9435-c20f-40d7-8e03-89d647170001/search.svg", 
        href: "/", 
        text: "Search", 
        alt: "Search" 
      },
    ],
  },
}: Nav) {
  return (
    <nav class="drawer drawer-end">
      <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />

      {/* main content */}
      <div class="px-16 py-4 flex items-center justify-between">
        <a href="/">
          <Image src={logo.src || ""} width={81} height={58} alt={logo.alt} />
        </a>

        <div class="hidden lg:flex w-full">
          <ul class="flex justify-center gap-8 w-full">
            {navigation.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.url}
                  aria-label={link.label}
                  class="link no-underline hover:underline p-4"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div class="hidden lg:flex items-center">
          <ul class="flex gap-4 items-center">
            {navigation.icon?.map((item, index) => (
              <li key={index}>
                <Image
                  src={item.src || ''}
                  width={18}
                  height={18}
                  alt={logo.alt}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>


      {/* sidebar */}
      <aside class="drawer-side z-50">
        {/* Close when clicking on overlay */}
        <label
          htmlFor="mobile-drawer-nav"
          aria-label="close sidebar"
          class="drawer-overlay"
        />

        <div class="flex flex-col gap-8 min-h-full w-80 bg-base-100 text-base-content">
          <a class="p-4" href="/">
            <Image
              src={logo.src || ""}
              width={100}
              height={28}
              alt={logo.alt}
            />
          </a>

          <ul class="menu">
            {navigation?.links.map((link) => (
              <li>
                <a href={link.url} aria-label={link.label}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ul class="p-4 flex items-center gap-3">
            {/* {navigation.buttons?.map((item) => (
              <a
                key={item?.id}
                id={item?.id}
                href={item?.href ?? "#"}
                target={item?.href.includes("http") ? "_blank" : "_self"}
                class={`font-normal btn btn-primary ${
                  item.outline && "btn-outline"
                }`}
              >
                {item?.text}
              </a>
            ))} */}
          </ul>
        </div>
      </aside>
    </nav>
  );
}
