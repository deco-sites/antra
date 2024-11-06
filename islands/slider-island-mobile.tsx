import { FunctionalComponent } from "preact";
import { useRef, useState } from "preact/hooks";

interface SliderIslandMobileProps {
  children: preact.ComponentChildren;
}

const SliderIslandMobile: FunctionalComponent<SliderIslandMobileProps> = ({ children }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleTouchStart = (e: TouchEvent) => {
    if (!sliderRef.current) return;
    setIsSwiping(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isSwiping || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => setIsSwiping(false);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={sliderRef}
        className="flex scroll-auto snap-x snap-mandatory overflow-x-hidden pb-4"
        onTouchStart={(e) => handleTouchStart(e as unknown as TouchEvent)}
        onTouchMove={(e) => handleTouchMove(e as unknown as TouchEvent)}
        onTouchEnd={handleTouchEnd}
        style={{
          userSelect: "none",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default SliderIslandMobile;
