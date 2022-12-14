import {
  React,
  useState,
  useEffect,
  useRef,
} from 'react';

import '../../../styles/styles.scss';
import img1 from '../../../assets/images/carousel/1.jpg';
import img2 from '../../../assets/images/carousel/2.jpg';
import img12 from '../../../assets/images/carousel/12.jpg';
import img8 from '../../../assets/images/carousel/8.jpg';
import img5 from '../../../assets/images/carousel/5.jpg';
import img10 from '../../../assets/images/carousel/10.jpg';
import img13 from '../../../assets/images/carousel/13.jpg';
import img16 from '../../../assets/images/carousel/16.jpg';
import CarouselItem from './CarouselItem/CarouselItem';
import CarouselControls from './CarouselControls/CarouselControls';
import CarouselIndicators from './CarouselIndicators/CarouselIndicators';

function Carousel() {
  const slides = [
    img5,
    img1,
    img2,
    img12,
    img8,
    img10,
    img13,
    img16,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef();

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      // eslint-disable-next-line no-confusing-arrow
      setCurrentSlide((slide) => slide < slides.length - 1 ? slide + 1 : 0);
    }, 3000);
  };

  const prev = () => {
    startSlideTimer();
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };

  const next = () => {
    startSlideTimer();
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  const switchIndex = (index) => {
    startSlideTimer();
    setCurrentSlide(index);
  };

  useEffect(() => {
    startSlideTimer();

    return () => stopSlideTimer();
  }, []);

  return (
    // <div className="container">
    <div className="Carousel">
      <div
        className="Carousel_inner"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <CarouselItem
            slide={slide}
            key={slide}
            stopSlide={stopSlideTimer}
            startSlide={startSlideTimer}
          />
        ))}
      </div>
      <CarouselIndicators slides={slides} currentIndex={currentSlide} switchIndex={switchIndex} />
      <CarouselControls prev={prev} next={next} />
    </div>
    // </div>
  );
}

export default Carousel;
