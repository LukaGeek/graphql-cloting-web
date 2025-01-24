"use client";

import { useEffect, useState } from "react";
import classes from "./Carousel.module.css";
import Card from "../Card";

export default function CardCarousel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/products", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    };

    fetchProducts();
  }, []);

  const chunkedCards = [];
  if (products && products.length > 0) {
    for (let i = 0; i < products.length; i++) {
      chunkedCards.push([products[i]]);
    }
  }

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
          {chunkedCards.map((chunk, slideIndex) => (
            <div className={classes.embla__slide} key={slideIndex}>
              <div className="mt-10 grid bg-blue grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {chunk.map((card) => (
                  <Card key={card._id} card={card} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
