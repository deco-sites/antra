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

        <label htmlFor="mobile-drawer-nav" class="lg:hidden cursor-pointer">
          <Icon id="FilterList" size={24} strokeWidth={2} />
        </label>

        {/* Links and buttons for desktop */}
        <div class="hidden lg:flex">
          <ul class="flex justify-center gap-4">
            {navigation?.links.map((link, index) => (
              <li key={index} class="group relative">
                {/* Link principal */}
                <a
                  href={link?.url}
                  aria-label={link?.label}
                  class="text-base font-normal leading-[22px] text-left link no-underline px-2"
                >
                  {link?.label}
                </a>

                {/* Submenu com imagem */}
                {link?.submenu && (
                  <div
                    class="min-w-60 max-w-lg absolute hidden group-hover:flex gap-4 bg-white shadow-lg 
                  p-2 z-50 rounded-[8px] shadow-2xl bg-gray-200 border"
                  >
                    {/* Imagem no submenu */}
                    {link?.img && (
                      <div class="w-[20rem] h-auto flex justify-center">
                        <img
                          src={link.img}
                          alt={link.imgLabel || link.label}
                          class="object-cover w-full h-full rounded-[16px]"
                        />
                        <div class="absolute w-44 h-[80%] flex flex-col justify-between px-5 py-2 mt-2 items-center">
                          <span class="text-white top-4 left-4 text-lg leading-5">
                            {link.imgLabel || link.label}
                          </span>
                          {link.label === "Cartilha e Manuais" && (
                            <button class="flex items-center gap-[10px] bg-white w-full rounded-[8px] p-1">
                              Baixar recurso{" "}
                              <Icon id="FilterList" size={12} strokeWidth={2} />
                            </button>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Itens do submenu */}
                    <ul class="flex flex-col w-full gap-2">
                      {link.submenu.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          class="flex flex-col block px-4 py-2 cursor-pointer hover:bg-gray-100"
                        >
                          <a
                            href={subItem?.url}
                            class="text-base text-gray-700"
                          >
                            {subItem?.label}
                          </a>
                          <span class="text-xs text-gray-500">
                            {subItem.subLabel}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
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

        <div class="flex flex-col gap-8 min-h-full w-full bg-base-100 text-base-content">
          <div class="flex px-[50px] py-4 items-center justify-between">
            <a href="/">
              <Image
                src={logo.src || ""}
                width={81}
                height={58}
                alt={logo.alt}
              />
            </a>
            <label
              htmlFor="mobile-drawer-nav"
              aria-label="close sidebar"
              class="drawer-overlay"
            >
              <Icon id="XMark" size={24} strokeWidth={2} />
            </label>
          </div>

          <div class="flex justify-center items-center">
            <div class="relative">
              <input
                type="text"
                placeholder="Pesquise aqui..."
                class="w-[327px] h-[40px] px-4 py-2 rounded-full border border-gray-300 pr-10"
              />
              <Icon
                id="XMark"
                size={24}
                strokeWidth={2}
                class="absolute right-3 top-1/2 transform -translate-y-1/2"
              />
            </div>
          </div>

          <ul class="menu px-[30px]">
            {navigation?.links.map((link, index) => (
              <li key={`${link.label}-${index}`} class="relative">
                <input
                  type="checkbox"
                  id={`submenu-toggle-${index}`}
                  class="hidden"
                />

                <label
                  htmlFor={`submenu-toggle-${index}`}
                  aria-label="tabDropdown submenu"
                  class="text-base flex cursor-pointer"
                >
                  {link?.label}
                  <Icon id="ChevronDown" size={16} strokeWidth={2} />
                </label>

                <ul id={`submenu-${index}`} class="submenu-class hidden">
                  {link?.submenu?.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      class="flex flex-col block px-4 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      <a href={subItem?.url} class="text-base text-gray-700">
                        {subItem?.label}
                      </a>
                      <span class="text-xs text-gray-500">
                        {subItem.subLabel}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </nav>
  );
}
