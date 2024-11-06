import { FunctionalComponent } from "preact";
import { useRef, useState } from "preact/hooks";
import Icon from "site/components/ui/Icon.tsx";

interface SliderIslandProps {
  children: preact.ComponentChildren;
}

const SliderIsland: FunctionalComponent<SliderIslandProps> = ({ children }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (event: WheelEvent) => {
    if (sliderRef.current) {
      event.preventDefault();
      const scrollAmount = event.deltaY > 0 ? 200 : -200;
      sliderRef.current.scrollLeft += scrollAmount;
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth / 3,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth / 3,
        behavior: "smooth",
      });
    }
  };

  // Funções para arraste
  const handleMouseDown = (e: MouseEvent) => {
    if (!sliderRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Ajuste da sensibilidade do arraste
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={sliderRef}
        className="flex scroll-auto snap-x snap-mandatory overflow-x-hidden pb-4 cursor-grab"
        onWheel={handleScroll}
        onMouseDown={(e) => handleMouseDown(e as unknown as MouseEvent)}
        onMouseMove={(e) => handleMouseMove(e as unknown as MouseEvent)}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
        }}
      >
        {children}
      </div>
      <div className="absolute mt-2 bottom-0 right-12 flex gap-5">
        <button
          onClick={handlePrev}
          className="p-3 rounded-full hover:bg-gray-400 flex items-center justify-center"
        >
          <Icon id="ArrowRight" size={20} strokeWidth={1} />
        </button>
        <button
          onClick={handleNext}
          className="p-3 rounded-full hover:bg-gray-400 flex items-center justify-center"
        >
          <Icon id="ArrowLeft" size={20} strokeWidth={1} />
        </button>
      </div>
    </div>
  );
};

export default SliderIsland;
