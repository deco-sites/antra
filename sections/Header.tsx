import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";

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
      submenu?: {
        label: string;
        subLabel?: string;
        url: string;
        img?: string;
        imgLabel?: string;
      }[];
    }[];
    buttons?: CTA[];
  };
}


export default function Header({
  logo = {
    src:
      "https://deco-sites-assets.s3.sa-east-1.amazonaws.com/antra/7a170a54-a9aa-4470-b04f-95197d431345/antra-logo.png",
    alt: "Logo",
  },
  navigation
}: Nav) {
  return (
    <nav class="drawer drawer-end">
      <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />

      {/* Main content */}
      <div class="px-[50px] py-4 flex items-center justify-between">
        <a href="/">
          <Image src={logo.src || ""} width={81} height={58} alt={logo.alt} />
        </a>

        <label
          htmlFor="mobile-drawer-nav"
          class="lg:hidden cursor-pointer"
        >
          <Icon id="FilterList" size={24} strokeWidth={2} />
        </label>

        {/* Links and buttons for desktop */}
        <div class="hidden lg:flex">
          <ul class="flex justify-center gap-4">
            {navigation?.links.map((link, index) => (
              <li key={index} class="group relative">
                <a
                  href={link?.url}
                  aria-label={link?.label}
                  class="text-base font-normal leading-[22px] text-left link no-underline hover:underline p-2"
                >
                  {link?.label}
                </a>

                {/* Submenu */}
                {Array.isArray(link?.submenu) && link.submenu.length > 0 && (
                  <ul class="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-lg mt-2 p-2">
                    {link.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={subItem?.url}
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem?.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>


        <div class="hidden lg:flex items-center">
          <ul class="flex gap-5 items-center">
            {navigation?.buttons?.map((item, index) => (
              <li key={`${item.alt}-${index}`}>
                <a href={item?.href}>
                  <Image
                    src={item.src || ""}
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

      {/* Sidebar for mobile */}
      <aside class="drawer-side z-50 lg:hidden">
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

          <ul class="menu p-4">
            {navigation?.links.map((link, index) => (
              <li key={`${link.label}-${index}`}>
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
            {navigation?.buttons?.map((item, index) => (
              <li key={`${item.alt}-${index}`}>
                <a href={item?.href}>
                  <Image
                    src={item.src || ""}
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
