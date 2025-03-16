"use client";

import { useQuery } from "@apollo/client";
import classes from "./Carousel.module.css";
import Card from "../Card";
import { GET_PRODUCTS } from "@/graphql/queries";
import CardSkeleton from "../CardSkeleton";

export default function CardCarousel() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <CardSkeleton />;
  if (error) return <p>Error loading products: {error.message}</p>;

  const products = data?.products || [];

  return (
    <section className={classes.embla}>
      <div>
        <div className={classes.mainDiv}>
          <div className={classes.word}></div>
          <span className={classes.divider}></span>
        </div>
      </div>
      <div className={classes.embla__viewport}>
        <div className={classes.embla__container}>
          {products.map((product) => (
            <div className={classes.embla__slide} key={product.id}>
              <div className="mt-10 grid bg-blue grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                <Card key={product.id} card={product} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
