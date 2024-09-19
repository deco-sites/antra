import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";

export interface CTA {
  src?: string;
  href: string;
  text?: string;
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
    buttons: CTA[]
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
      { label: "A ANTRA", url: "/" },
      { label: "A ANTRA", url: "/" },
      { label: "A ANTRA", url: "/" },
    ],
    buttons:[]
  },
}: Nav) {
  return (
    <nav class="drawer drawer-end">
      <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />

      {/* main content */}
      <div class="px-12 py-4 flex items-center justify-between">
        <a href="/">
          <Image src={logo.src || ""} width={81} height={58} alt={logo.alt} />
        </a>

        <div class="hidden lg:flex">
          <ul class="flex justify-center gap-4">
            {navigation?.links.map((link) => (
              <li key={link?.label}>
                <a
                  href={link?.url}
                  aria-label={link?.label}
                  class="text-base font-normal leading-[22px] text-left link no-underline hover:underline p-2"
                >
                  {link?.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div class="hidden lg:flex items-center">
          <ul class="flex gap-5 items-center">
            {navigation.buttons.map((item, index) => (
              <li key={index}>
                <a href={item?.href}>
                  <Image
                    src={item.src || ''}
                    width={18}
                    height={18}
                    alt={logo.alt}
                  />
                </a>                
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
              <li key={link?.label}>
                <a
                  href={link?.url}
                  aria-label={link?.label}
                >
                  {link?.label}
                </a>
              </li>
            ))}
          </ul>

          <ul class="p-4 flex items-center gap-3">
            {navigation.buttons?.map((item, index) => (
              <li key={index}>
              <a href={item?.href}>
                <Image
                  src={item.src || ''}
                  width={18}
                  height={18}
                  alt={logo.alt}
                />
              </a>                
            </li>
            ))}
          </ul>

        </div>
      </aside>
    </nav>
  );
}
