import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

interface List {
  title: string;
  paragraph: string;
}

interface Topic {
  title: string;
  paragraph?: string[];
  list: List[];
  image?: ImageWidget;
}

interface RelatedPosts {
  title: string;
  tag: string;
  image?: ImageWidget;
}

interface Props {
  title: string;
  image: ImageWidget;
  author: string;
  date: string;
  social: ("Instagram" | "Linkedin" | "Facebook" | "Twitter")[];
  topic: Topic[];
  tags: string[];
  relatedPosts: RelatedPosts[];
}

export default function History({
  title,
  image,
  author,
  date,
  social,
  topic,
  tags,
  relatedPosts,
}: Props) {
  return (
    <div className="lg:container text-sm mb-40">
      <div className="space-y-10">
        <div class="px-6 flex flex-col items-center gap-8">
          <div class="w-full max-w-[650px] flex flex-col gap-5">
            {topic.map((item, i) => (
              <>
                <h3 class="text-2xl font-bold text-black leading-snug text-justify">
                  {item.title}
                </h3>
                {item.paragraph?.map((paragraph, item) => (
                  <p
                    key={`${item}+${paragraph}`}
                    class="text-base text-justify"
                  >
                    {paragraph}
                  </p>
                ))}
                <div class="flex gap-5 w-full">
                  <Image
                    className="w-full object-contain rounded-2xl"
                    width={380}
                    src={item?.image}
                    alt={item?.image}
                    decoding="async"
                    loading="lazy"
                  />
                  </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
