import { FunctionalComponent } from 'preact';
import { useRef } from 'preact/hooks';

interface SliderIslandProps {
  children: preact.ComponentChildren;
}

const SliderIsland: FunctionalComponent<SliderIslandProps> = ({ children }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (event: WheelEvent) => {
    if (sliderRef.current) {
      event.preventDefault();
      // Normaliza a quantidade de scroll
      const scrollAmount = event.deltaY > 0 ? 200 : -200; // Ajuste conforme necessário
      sliderRef.current.scrollLeft += scrollAmount;
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      // Move um terço da largura do container por vez
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth / 3, // Move um card de cada vez
        behavior: 'smooth', // Suaviza a transição
      });
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth / 3, // Move um card de cada vez
        behavior: 'smooth', // Suaviza a transição
      });
    }
  };

  return (
    <div className="relative w-full">
      <div
        ref={sliderRef}
        className="flex scroll-auto snap-x snap-mandatory overflow-hidden"
        onWheel={handleScroll}
      >
        {children}
      </div>
      <div className="absolute bottom-[-2.5rem] left-0 right-0 flex justify-end gap-4">
        <button
          onClick={handlePrev}
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400"
        >
          &#9664;
        </button>
        <button
          onClick={handleNext}
          className="p-2 bg-gray-300 rounded-full hover:bg-gray-400"
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default SliderIsland;
