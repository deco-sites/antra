import { ImageWidget } from "apps/admin/widgets.ts";
import { h, FunctionalComponent } from "preact";
import { clx } from "site/sdk/clx.ts";
import { useId } from "site/sdk/useId.ts";
import Slider from "site/components/ui/Slider.tsx";
import SliderJS from "apps/utils/components/SliderJS.tsx";

interface SlideProps {
  image: ImageWidget;
  title: string;
  tag: string[];
}

interface SliderProps {
  slides: SlideProps[];
}

const Slide: FunctionalComponent<SlideProps> = ({
  image,
  title,
  tag,
}: SlideProps) => {
  return (
    <div class="slide">
      <img src={image} alt={title} />
      <h2 class="slide-title">{title}</h2>
      <p class="slide-description">{tag}</p>
    </div>
  );
};

const PrimersSlider: FunctionalComponent<SliderProps> = ({
  slides,
}: SliderProps) => {
  const id = useId();
  return (
    <>
    <div
      id={id}
      class="grid grid-rows-1"
      style={{
        gridTemplateColumns: "min-content 1fr min-content",
      }}
    >
      <div class="col-start-1 col-span-3 row-start-1 row-span-1">
        <Slider
          rootId={id}
          class="carousel carousel-center sm:carousel-end gap-5 sm:gap-10 w-full"
        >
          {slides.map((slide, index) => (
            <Slider.Item
              index={index}
              class={clx(
                "carousel-item",
                "first:pl-5 first:sm:pl-0",
                "last:pr-5 last:sm:pr-0"
              )}
            >
              {slide}
            </Slider.Item>
          ))}
        </Slider>
      </div>{" "}
    </div>
    <SliderJS rootId={id} />
    </>
  );
};

export default PrimersSlider;
