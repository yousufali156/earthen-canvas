"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export const EmblaCarousel = ({ children, options, autoplayOptions }) => {
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {children}
      </div>
    </div>
  );
};

export function EmblaCarouselChild({ children }) {
  return <div className="embla__slide">{children}</div>;
}