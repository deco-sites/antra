import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";
import { useState } from "preact/hooks";

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

export const HeaderMobileSite = ({ logo, navigation }: Nav) => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const toggleSubmenu = (index: any) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <nav className="drawer drawer-end lg:hidden">
      <input id="mobile-drawer-nav" type="checkbox" className="drawer-toggle" />

      <aside className="drawer-side z-50">
        <div className="flex flex-col gap-8 min-h-full w-full bg-base-100 text-base-content">
          <div className="flex px-[50px] py-4 items-center justify-between">
            <a href="/">
              <Image
                src={logo?.src || ""}
                width={81}
                height={58}
                alt={logo?.alt}
              />
            </a>
            <label
              htmlFor="mobile-drawer-nav"
              aria-label="close sidebar"
              className="drawer-overlay"
            >
              <Icon id="XMark" size={24} strokeWidth={2} />
            </label>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquise aqui..."
                className="w-[327px] h-[40px] px-4 py-2 rounded-full border border-gray-300 pr-10"
              />
              <Icon
                id="Search"
                size={18}
                strokeWidth={2}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              />
            </div>
          </div>

          <ul className="menu px-[30px]">
            {navigation?.links.map((link, index) => (
              <li key={`${link.label}-${index}`} className="relative">
                <label
                  onClick={() => toggleSubmenu(index)}
                  className="text-base flex cursor-pointer items-center"
                >
                  {link?.label}

                  {link?.submenu &&
                  link?.submenu.length > 0 &&
                  openMenuIndex === index ? (
                    <Icon
                      id="ChevronUp"
                      size={16}
                      strokeWidth={2}
                      className="ml-2"
                    />
                  ) : link?.submenu && link?.submenu.length > 0 ? (
                    <Icon
                      id="ChevronDown"
                      size={16}
                      strokeWidth={2}
                      className="ml-2"
                    />
                  ) : null}
                </label>

                {link.submenu && openMenuIndex === index && (
                  <ul
                    id={`submenu-${index}`}
                    className="submenu-class flex flex-col ml-4 mb-4 bg-white"
                  >
                    {link?.submenu?.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="flex flex-col block px-4 cursor-pointer hover:bg-gray-100"
                      >
                        <a
                          href={subItem?.url}
                          className="text-base text-gray-700"
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
      </aside>
    </nav>
  );
};
