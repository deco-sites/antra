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
      class="relative w-[300px] h-[400px] bg-cover bg-center rounded-md"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h3 class="absolute top-0 left-0 w-full text-center text-lg font-semibold text-white p-2">
        {title}
      </h3>
      <div class="absolute bottom-0 left-0 p-2">
        {tag.map((t, index) => (
          <span key={index} class="text-sm bg-gray-200 rounded-full px-2 py-1 mr-2">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function PrimersSlider({ slides }: SliderProps) {
  return (
    <div class="w-screen text-sm pl-[16rem] text-sm py-8 lg:py-20 overflow-hidden">
      <SliderIsland>
        <div class="flex gap-5">
          {slides.map((slide, index) => (
            <div class="w-[300px]" key={index}>
              <Card image={slide.image} title={slide.title} tag={slide.tag} />
            </div>
          ))}
        </div>
      </SliderIsland>
    </div>
  );
}

export default PrimersSlider;
