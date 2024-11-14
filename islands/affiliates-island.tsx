import { useEffect, useRef } from "preact/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "site/components/ui/Icon.tsx";

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

export default function AffiliatesIsland({
  title,
  description,
  button,
  logos,
}: Props) {
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("section") === "afiliadas" && boardRef.current) {
      boardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div class="lg:container lg:p-16 text-sm py-8 lg:py-20 px-5">
      <div class="space-y-10">
        <div class="flex w-full md:w-[350px] flex-col gap-4 justify-center">
          <h2 class="text-4xl font-black leading-snug">{title}</h2>
          <span class="text-lg font-medium leading-snug">{description}</span>
          <button
            class="w-[12rem] p-2 flex gap-2 items-center justify-center text-white rounded-md bg-pink-500 hover:bg-pink-600 transition duration-300"
            href={button.href}
          >
            {button.text}
            <Icon id="ArrowNorthEast" size={12} strokeWidth={1} />
          </button>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10 items-center justify-center">
          {logos?.map((logo) => (
            <div>
              <img src={logo} alt={logo} decoding="async" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
