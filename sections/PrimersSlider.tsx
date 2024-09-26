import { ImageWidget } from "apps/admin/widgets.ts";
import { h, FunctionalComponent } from "preact";
import { clx } from "site/sdk/clx.ts";
import { useId } from "site/sdk/useId.ts";
import Slider from "site/components/ui/Slider.tsx";
import Icon from "site/components/ui/Icon.tsx";

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
    <div class="p-4">
      <img src={image} alt={image} class="w-full h-48 object-cover rounded-md" />
      <h3 class="mt-2 text-lg font-semibold">{title}</h3>
      <div class="mt-2">
        {tag.map((t) => (
          <span class="text-sm bg-gray-200 rounded-full px-2 py-1 mr-2">{t}</span>
        ))}
      </div>
    </div>
  );
}

function PrimersSlider({ slides }: SliderProps) {
  const id = useId()
  return (
    <div class="lg:container md:max-w-6xl lg:mx-auto mx-4 text-sm py-8 lg:py-20 border-2 border-gray-700">
      <div class="space-y-10">
    <Slider rootId="card-slider">
      {slides.map((slide, index) => (
        <Slider.Item key={index} index={index}>
          <Card image={slide.image} title={slide.title} tag={slide.tag} />
        </Slider.Item>
      ))}
      <Slider.PrevButton class="transform -translate-y-1/2 p-2 bg-gray-300 rounded-full">
      <Icon id="ChevronRight" size={24} strokeWidth={2} />
      </Slider.PrevButton>
      <Slider.NextButton class="transform -translate-y-1/2 p-2 bg-gray-300 rounded-full">
      <Icon id="ChevronLeft" size={24} strokeWidth={2} />
      </Slider.NextButton>
    </Slider>
      </div>
    </div>
  );
}

export default PrimersSlider;
