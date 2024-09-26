import { h, FunctionalComponent } from 'preact';

interface SlideProps {
  image: string;
  title: string;
  description: string;
}

interface SliderProps {
  slides: SlideProps[];
}

const Slide: FunctionalComponent<SlideProps> = ({ image, title, description }) => {
  return (
    <div class="slide">
      <img src={image} alt={title} />
      <h2 class="slide-title">{title}</h2>
      <p class="slide-description">{description}</p>
    </div>
  );
};


const Slider: FunctionalComponent<SliderProps> = ({ slides }) => {
  return (
    <div class="slider">
      {slides.map((slide, index) => (
        <Slide key={index} {...slide} />
      ))}
    </div>
  );
};

export default Slider;