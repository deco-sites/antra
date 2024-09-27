import { ImageWidget } from "apps/admin/widgets.ts";
import SliderIsland from "site/islands/slider-island.tsx";

interface SlideProps {
  image: ImageWidget;
  title: string;
  tag: string[];
}

interface SliderProps {
  slides: SlideProps[];
}

function Card({ image, title, tag }: SlideProps) {
  return (
    <div
      class="relative w-[320px] h-[450px] bg-cover bg-center rounded-lg shadow-lg 
  overflow-visible transition-transform transform scale-100 hover:scale-105 hover:z-10"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div class="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-between p-4 rounded-lg">
        <h3 class="text-lg font-semibold text-white">{title}</h3>
        <div class="flex flex-wrap gap-2">
          {tag.map((t, index) => (
            <span
              key={index}
              class="badge badge-lg text-xs border border-white text-white bg-transparent"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function PrimersSlider({ slides }: SliderProps) {
  return (
    <div class="w-full text-sm lg:pl-[16rem] py-10 lg:py-24 overflow-visible">
      <div class="space-y-8 lg:w-1/2 mb-8 px-5">
        <h2 class="text-4xl font-bold leading-snug text-gray-800">
          Cartilhas e manuais
        </h2>
      </div>
      <SliderIsland>
        <div class="flex gap-6 pl-10 pb-8 pt-12 overflow-visible">
          {slides.map((slide, index) => (
            <div class="w-[320px] mx-4 overflow-visible" key={index}>
              <Card image={slide.image} title={slide.title} tag={slide.tag} />
            </div>
          ))}
        </div>
      </SliderIsland>
    </div>
  );
}

export default PrimersSlider;
