import { ImageWidget } from "apps/admin/widgets.ts";
import { h, FunctionalComponent } from 'preact';

interface SlideProps {
  image: ImageWidget;
  title: string;
  tag: string[];
}

interface SliderProps {
  slides: SlideProps[];
}

const Slide: FunctionalComponent<SlideProps> = ({ image, title, tag }: SlideProps) => {
  return (
    <div class="slide">
      <img src={image} alt={title} />
      <h2 class="slide-title">{title}</h2>
      <p class="slide-description">{tag}</p>
    </div>
  );
};


const Slider: FunctionalComponent<SliderProps> = ({ slides }: SliderProps) => {
  return (
    <div class="slider">
      {slides.map((slide, index) => (
        <Slide key={index} {...slide} />
      ))}
    </div>
  );
};

export default Slider;