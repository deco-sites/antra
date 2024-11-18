import { useEffect, useRef, useState } from "preact/hooks";
import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import { Text1 } from "site/islands/text1-history.tsx";
import { Text2 } from "site/islands/text2-history.tsx";
import { Text3 } from "site/islands/text3-history.tsx";
interface Props {
  image1: ImageWidget;
  image2: ImageWidget;
}
export default function HistoryIsland({ image1, image2 }: Props) {
  const boardRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState(window.location.search);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("section") === "historia" && boardRef.current) {
      boardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [query]);

  useEffect(() => {
    const handleUrlChange = () => setQuery(window.location.search);

    window.addEventListener("popstate", handleUrlChange);
    return () => {
      window.removeEventListener("popstate", handleUrlChange);
    };
  }, []);

  return (
    <div ref={boardRef} className="lg:container text-sm mb-40">
      <div className="space-y-10">
        <div class="px-6 flex flex-col items-center gap-8">
          <div class="w-full max-w-[850px] flex flex-col">
            <h2 class="text-6xl font-bold text-black leading-snug">
              E assim nasceu o
            </h2>
            <h2 class="text-6xl font-bold text-black leading-snug text-center">
              <span class="text-blue-400">movimento</span>{" "}
              <span class="text-pink-500">nacional</span>
            </h2>
            <h2 class="text-6xl font-bold text-black leading-snug text-right">
              de <span class="text-black">Travestis e Transexuais</span>.
            </h2>
            <p class="text-gray-500 mt-2 text-right">Keila Simpson Sousa</p>
          </div>
          <Text1 />
          <Text2 />
          <div class="flex gap-5 max-w-[800px] w-full">
            <Image
              className="w-1/2 object-contain rounded-2xl"
              width={380}
              height={274}
              src={image1}
              alt={image1}
              decoding="async"
              loading="lazy"
            />
            <Image
              className="w-1/2 object-contain rounded-2xl"
              width={380}
              height={274}
              src={image2}
              alt={image2}
              decoding="async"
              loading="lazy"
            />
          </div>
          <Text3 />
        </div>
      </div>
    </div>
  );
}
