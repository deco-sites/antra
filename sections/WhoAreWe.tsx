import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

export interface Props {
  title: string;
  links: string[];
  image: ImageWidget;
  imageDesktop: ImageWidget;
}

export default function WhoAreWe({ title, links, image, imageDesktop }: Props) {
  return (
    <div className="lg:container text-sm mb-10">
      <div className="space-y-10 px-6 md:px-16 py-12 md:py-16">
        <div class="w-full flex flex-col gap-8">
          <h1 class="text-3xl font-semibold w-[90%]">{title}</h1>
          <div className="grid grid-cols-2 justify-end md:flex gap-8">
            {links.map((link, index) => (
              <a class="underline text-base font-medium" key={index}>
                {link}
              </a>
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
