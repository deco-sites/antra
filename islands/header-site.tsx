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
      download?: string;
      submenu?: {
        label: string;
        subLabel?: string;
        url: string;
      }[];
    }[];
    buttons?: CTA[];
  };
}

export const HeaderSite = ({ logo, navigation }: Nav) => {
  const openNewWindow = (link: string) => {
    if (!link) return console.error("Vazio");

    globalThis.open(link[0], "_blank");
  };

  return (
    <nav className="drawer drawer-end border-b border-gray-300">
      <div className="absolute top-0 left-0 w-full h-2.5 bg-gradient-to-r from-[#3AB4F6] via-[#FCA5B3] to-[#3AB4F6]"></div>

      <div className="px-[50px] py-4 flex items-center justify-between">
        <a href="/">
          <Image src={logo?.src || ""} width={81} height={58} alt={logo?.alt} />
        </a>

        <label htmlFor="mobile-drawer-nav" className="lg:hidden cursor-pointer">
          <Icon id="FilterList" size={24} strokeWidth={2} />
        </label>

        <div className="hidden lg:flex">
          <ul className="flex justify-center gap-4">
            {navigation?.links.map((link, index) => (
              <li key={index} className="group relative">
                <a
                  href={link?.url}
                  aria-label={link?.label}
                  className="text-base font-normal leading-[22px] text-left link no-underline px-2"
                >
                  {link?.label}
                </a>

                {link?.submenu && link?.submenu.length > 0 && (
                  <div
                    className="min-w-60 max-w-lg absolute hidden group-hover:flex gap-4 bg-white shadow-lg p-2 z-50 
                  rounded-[8px] shadow-2xl bg-gray-200 border"
                  >
                    {link?.img && (
                      <div className="w-[20rem] h-auto flex justify-center">
                        <img
                          src={link.img}
                          alt={link.imgLabel || link.label}
                          className="object-cover w-full h-full rounded-[16px]"
                        />
                        <div className="absolute w-44 h-[80%] flex flex-col justify-between px-5 py-2 mt-2 items-center">
                          <span className="text-white top-4 left-4 text-lg leading-5">
                            {link.imgLabel || link.label}
                          </span>
                          {link.label === "Cartilha e Manuais" && (
                            <button
                              onClick={() =>
                                openNewWindow(link?.download || "")
                              }
                              class="flex bg-white rounded-lg p-2 gap-2 justify-center items-center mt-2"
                            >
                              <p class="text-xs">Baixar recurso</p>
                              <Icon id="Download" size={16} strokeWidth={1} />
                            </button>
                          )}
                        </div>
                      </div>
                    )}

                    <ul className="flex flex-col w-full gap-2">
                      {link.submenu.map((subItem, subIndex) => (
                        <li
                          key={subIndex}
                          className="flex flex-col block px-4 py-2 cursor-pointer hover:bg-gray-100"
                        >
                          <a
                            href={subItem?.url}
                            className="text-base text-gray-700"
                          >
                            {subItem?.label}
                          </a>
                          <span className="text-xs text-gray-500">
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

        <div className="hidden lg:flex items-center">
          <ul className="flex gap-5 items-center">
            {navigation?.buttons?.map((item, index) => (
              <li key={`${item.alt}-${index}`}>
                <a href={item?.href}>
                  <Image
                    src={item.src || ""}
                    width={18}
                    height={18}
                    alt={item?.alt}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
