"use client";

import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./CarouselDotButtons";
import { cardsData } from "../../../cardsData";
import classes from "./Carousel.module.css";
import Card from "../Card";
import Men from "../../Gender/Men/Men";
import Women from "../../Gender/Women/Women";
import Kids from "../../Gender/Kids/Kids";

export default function CardCarousel({ options }) {
  const [emblaRef1, emblaApi1] = useEmblaCarousel(options);
  const {
    selectedIndex: selectedIndex1,
    scrollSnaps: scrollSnaps1,
    onDotButtonClick: onDotButtonClick1,
  } = useDotButton(emblaApi1);

  const [emblaRef2, emblaApi2] = useEmblaCarousel(options);
  const {
    selectedIndex: selectedIndex2,
    scrollSnaps: scrollSnaps2,
    onDotButtonClick: onDotButtonClick2,
  } = useDotButton(emblaApi2);

  const [emblaRef3, emblaApi3] = useEmblaCarousel(options);
  const {
    selectedIndex: selectedIndex3,
    scrollSnaps: scrollSnaps3,
    onDotButtonClick: onDotButtonClick3,
  } = useDotButton(emblaApi3);

  const chunkedCardsMen = [];
  if (cardsData[0] && cardsData[0].length > 0) {
    for (let i = 0; i < cardsData[0].length; i += 4) {
      chunkedCardsMen.push(cardsData[0].slice(i, i + 4));
    }
  }

  const chunkedCardsWomen = [];
  if (cardsData[1] && cardsData[1].length > 0) {
    for (let i = 0; i < cardsData[1].length; i += 4) {
      chunkedCardsWomen.push(cardsData[1].slice(i, i + 4));
    }
  }

  const chunkedCardsKids = [];
  if (cardsData[2] && cardsData[2].length > 0) {
    for (let i = 0; i < cardsData[2].length; i += 4) {
      chunkedCardsKids.push(cardsData[2].slice(i, i + 4));
    }
  }

  return (
    <section className={classes.embla}>
      <Men />
      <div className={classes.embla__viewport} ref={emblaRef1}>
        <div className={classes.embla__container}>
          {chunkedCardsMen.map((chunk, slideIndex) => (
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
          {scrollSnaps1?.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick1(index)}
              className={`${classes.embla__dot} ${
                index === selectedIndex1 ? "embla__dot--selected" : ""
              }`}
            />
          ))}
        </div>
      </div>

      <Women />
      <div className={classes.embla__viewport} ref={emblaRef2}>
        <div className={classes.embla__container}>
          {chunkedCardsWomen.map((chunk, slideIndex) => (
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
          {scrollSnaps2?.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick2(index)}
              className={`${classes.embla__dot} ${
                index === selectedIndex2 ? "embla__dot--selected" : ""
              }`}
            />
          ))}
        </div>
      </div>

      <Kids />
      <div className={classes.embla__viewport} ref={emblaRef3}>
        <div className={classes.embla__container}>
          {chunkedCardsKids.map((chunk, slideIndex) => (
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
          {scrollSnaps3?.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick3(index)}
              className={`${classes.embla__dot} ${
                index === selectedIndex3 ? "embla__dot--selected" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
