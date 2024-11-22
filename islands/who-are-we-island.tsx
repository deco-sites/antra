import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { useEffect, useRef } from "preact/hooks";

export interface Props {
  title: string;
  links: string[];
  image: ImageWidget;
  imageDesktop: ImageWidget;
}

export default function WhoAreWeIsland({
  title,
  links,
  image,
  imageDesktop,
}: Props) {
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("section") === "quem-somos" && boardRef.current) {
      boardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleSetClick = (link: string) => {
    const redirects: Record<string, string[]> = {
      "O que fazemos": ["oque-fazemos", "WhoAreWe"],
      Diretoria: ["diretoria", "OurBoard"],
      Afiliadas: ["afiliadas", "Affiliates"],
      História: ["historia", "History"],
    };

    const redirect = redirects[link];

    if (!redirect) {
      console.warn(`Link desconhecido: ${link}`);
      return;
    }

    const params = new URLSearchParams(window.location.search);
    params.set("section", redirect[0]);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);
    const allElements = document.querySelectorAll(`[data-manifest-key]`);

    const sectionElement = Array.from(allElements).find((el) => {
      const key = el.getAttribute('data-manifest-key') || '';
      return key.includes(redirect[1]);
    });

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={boardRef} className="lg:container text-sm mb-10">
      <div className="space-y-10 px-6 md:px-16 py-12 md:py-16">
        <div class="w-full flex flex-col gap-8">
          <h1 class="text-3xl font-semibold w-[90%]">{title}</h1>
          <div className="grid grid-cols-2 justify-end md:flex gap-8">
            {links.map((link, index) => (
              <button
                onClick={() => handleSetClick(link)}
                class="underline text-base font-medium"
                key={index}
              >
                {link}
              </button>
            ))}
          </div>
          <div className="w-full">
            <Image
              className="md:hidden w-full rounded-2xl"
              width={327}
              height={245}
              src={image}
              alt={image}
              decoding="async"
              loading="lazy"
            />
            <Image
              className="hidden md:flex w-full max-h-[380px] rounded-2xl object-cover"
              width={1384}
              height={380}
              src={imageDesktop}
              alt={imageDesktop}
              decoding="async"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
