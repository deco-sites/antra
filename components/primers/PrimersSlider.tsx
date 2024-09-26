import { Product } from "apps/commerce/types.ts";
import Icon from "../ui/Icon.tsx";
import { useId } from "../../sdk/useId.ts";
import { clx } from "../../sdk/clx.ts";
import Slider from "site/components/ui/Slider.tsx";
import SliderJS from "apps/utils/components/SliderJS.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
interface SlideProps {
     image: ImageWidget;
     title: string;
     tag: string[];
   }
interface Props {
  products: SlideProps[];
  itemListName?: string;
  children: any;
}

function PrimersSlider({ products }: Props) {
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
          <Slider rootId={id} class="carousel carousel-center sm:carousel-end gap-5 sm:gap-10 w-full">
            {products?.map((product, index) => (
              <Slider.Item
                index={index}
                class={clx(
                  "carousel-item",
                  "first:pl-5 first:sm:pl-0",
                  "last:pr-5 last:sm:pr-0",
                )}
              >
              </Slider.Item>
            ))}
          </Slider>
        </div>

        <div class="col-start-1 col-span-1 row-start-1 row-span-1 z-10 self-center p-2 relative bottom-[15%]">
          <Slider.PrevButton class="hidden sm:flex disabled:invisible btn btn-outline btn-sm btn-circle no-animation">
            <Icon id="ChevronRight" class="rotate-180" />
          </Slider.PrevButton>
        </div>

        <div class="col-start-3 col-span-1 row-start-1 row-span-1 z-10 self-center p-2 relative bottom-[15%]">
          <Slider.NextButton class="hidden sm:flex disabled:invisible btn btn-outline btn-sm btn-circle no-animation">
            <Icon id="ChevronRight" />
          </Slider.NextButton>
        </div>
      </div>
      <SliderJS rootId={id} />
    </>
  );
}

export default PrimersSlider;
