"use client";

import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./CarouselDotButtons";
import { cardsData } from "../../../cardsData";
import Mens from "../../Mens/Mens"
import classes from "./Carousel.module.css";
import Card from "../Card";

export default function CardCarousel({ options }) {
  const [emblaRef1, emblaApi1] = useEmblaCarousel(options);
  const { selectedIndex: selectedIndex1, scrollSnaps: scrollSnaps1, onDotButtonClick: onDotButtonClick1 } = useDotButton(emblaApi1);

  const [emblaRef2, emblaApi2] = useEmblaCarousel(options);
  const { selectedIndex: selectedIndex2, scrollSnaps: scrollSnaps2, onDotButtonClick: onDotButtonClick2 } = useDotButton(emblaApi2);

  const chunkedCards = [];
  for (let i = 0; i < cardsData.length; i += 4) {
    chunkedCards.push(cardsData.slice(i, i + 4));
  }

  return (
    <section className={classes.embla}>
      <div className={classes.embla__viewport} ref={emblaRef1}>
        <Mens />
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
          {scrollSnaps1.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick1(index)}
              className={classes.embla__dot.concat(
                index === selectedIndex1 ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
      <div className={classes.embla__viewport} ref={emblaRef2}>
        <Mens />
        <div className={classes.embla__container}>
          {chunkedCards.map((chunk, slideIndex) => (
            <div className={classes.embla__slide} key={slideIndex}>
              <div className="mt-10 grid bg-blue grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
          {scrollSnaps2.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick2(index)}
              className={classes.embla__dot.concat(
                index === selectedIndex2 ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
