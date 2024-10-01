import type { ImageWidget } from "apps/admin/widgets.ts";
import Icon from "site/components/ui/Icon.tsx";

interface Social {
  name: string;
  endereço: string;
  link: string;
}
export interface Props {
  background: ImageWidget;
  title: string;
  subtitle: string;
  social: Social[];
}

export default function About({ background, title, subtitle, social }: Props) {
  return (
    <div class="lg:container text-sm px-5 p-16">
      <div class="space-y-10">
        <div
          class="relative w-full bg-cover bg-center rounded-lg p-12"
          style={`background-image: url(${background})`}
        >
          <div class="p-5 flex flex-col gap-10">
            <div class="flex flex-col gap-5">
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </div>
            <div class="flex flex-col">
              {social.map((item, i) => (
                <div class="flex border border-gray-300">
                  <div class="flex flex-col">
                    <Icon id={item.name} size={16} strokeWidth={1} />
                    <p>{item.name}:</p>
                    <p>{item.endereço}</p>
                  </div>
                  <button>
                    <Icon id="ArrowNorthEast" size={16} strokeWidth={1} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
