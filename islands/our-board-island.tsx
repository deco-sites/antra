import { useEffect, useRef } from "preact/hooks";
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Member {
  name: string;
  role: string;
  description: string;
  image: ImageWidget;
}
export interface Props {
  title: string;
  members: Member[];
}

export default function OurBoardIsland({ title, members }: Props) {
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("section") === "diretoria" && boardRef.current) {
      boardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div ref={boardRef} className="lg:container text-sm mb-10">
      <div className="space-y-10 px-6 md:px-24 py-8 md:py-24">
        <div class="w-full flex flex-col gap-8">
          <h1 class="text-4xl md:text-5xl font-semibold">{title}</h1>
          <div className="flex flex-col md:flex-row gap-8">
            {members.map((member, index) => (
              <div class="flex flex-col gap-6" key={index}>
                <Image
                  className="w-full rounded-2xl"
                  width={380}
                  height={274}
                  src={member.image}
                  alt={member.image}
                  decoding="async"
                  loading="lazy"
                />
                <div class="md:px-6">
                  <p class="text-xl font-semibold">{member.name}</p>
                  <p class="text-lg">{member.role}</p>
                </div>
                <p class="md:px-6">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
