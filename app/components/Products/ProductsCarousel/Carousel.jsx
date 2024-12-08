"use client";

import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./CarouselDotButtons";
import { cardsData } from "../../../cardsData";
import classes from "./Carousel.module.css";
import Card from "../Card";

export default function CardCarousel({ options }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const chunkedCards = [];
  for (let i = 0; i < cardsData[0].length; i += 4) {
    chunkedCards.push(cardsData[0].slice(i, i + 4));
  }

  return (
    <section className={classes.embla}>
      <div className={classes.embla__viewport} ref={emblaRef}>
        <div className={classes.embla__container}>
          {chunkedCards.map((chunk, slideIndex) => (
            <div className={classes.embla__slide} key={slideIndex}>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {chunk.map((card) => (
                  <Card key={card.id} card={card} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.embla__controls}>
        <div className={classes.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={classes.embla__dot.concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
