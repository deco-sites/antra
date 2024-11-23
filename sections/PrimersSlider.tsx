import { ImageWidget } from "apps/admin/widgets.ts";
import { BlogPost, ExtraProps } from "apps/blog/types.ts";
import SliderIsland from "site/islands/slider-island.tsx";
import SliderIslandMobile from "site/islands/slider-island-mobile.tsx";

interface SlideProps {
  image: ImageWidget;
  title: string;
  tag: ExtraProps[] | undefined;
}

interface SliderProps {
  slides: BlogPost[] | null;
}

function Card({ image, title, tag }: SlideProps) {
  return (
    <div
      class="relative w-[320px] h-[450px] bg-cover bg-center rounded-lg shadow-lg 
        overflow-visible transition-transform transform scale-100 hover:scale-105 hover:z-10"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div class="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between p-4 rounded-lg">
        <h3 class="text-4xl font-normal text-white">{title}</h3>
        <div class="flex flex-wrap gap-2">
          {tag?.map((item, i) => {
            return item.key === "tag" ? (
              <div
                className="badge badge-lg text-xs border border-white text-white bg-transparent 
                  hover:bg-white hover:text-custom-gray hover:border-white"
                key={i}
              >
                {item.value}
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
}

function PrimersSlider({ slides }: SliderProps) {
  const guidesFiltered = slides?.filter((slide) =>
    slide.categories?.some((category) => category.slug === "guides")
  );
  return (
    <div class="lg:container lg:p-16 w-full text-sm py-10 lg:py-24 overflow-visible">
      <div class="space-y-8 lg:w-1/2 mb-8 px-5">
        <h2 class="text-4xl font-bold leading-snug text-gray-800">
          Cartilhas e manuais
        </h2>
      </div>

      {/* Desktop Version */}
      <div class="hidden lg:block">
        <SliderIsland>
          <div class="flex gap-6 pl-10 pb-8 pt-12 overflow-visible">
            {guidesFiltered?.map((slide, index) => (
              <div class="w-[320px] mx-4 overflow-visible" key={index}>
                <Card
                  image={slide.image || ""}
                  title={slide.title}
                  tag={slide.extraProps}
                />
              </div>
            ))}
          </div>
        </SliderIsland>
      </div>

      {/* Mobile Version */}
      <div class="lg:hidden">
        <SliderIslandMobile>
          <div class="flex gap-6 pl-10 pb-8 pt-12 overflow-visible">
            {guidesFiltered?.map((slide, index) => (
              <div class="w-[320px] mx-4 overflow-visible" key={index}>
                <Card
                  image={slide.image || ""}
                  title={slide.title}
                  tag={slide.extraProps}
                />
              </div>
            ))}
          </div>
        </SliderIslandMobile>
      </div>
    </div>
  );
}

export default PrimersSlider;
