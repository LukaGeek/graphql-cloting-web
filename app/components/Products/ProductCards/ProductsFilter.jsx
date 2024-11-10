"use client"

import { useState } from "react";
import NewProductCards from "./NewProductCards";
import classes from "./ProductsFilter.module.css";

const products = [
    {
        id: 1,
        icon: "/Products/1.webp",
        name: "Fujifilm X100T 16 MP Digital Camera (Silver)",
        cost: "520.00",
        category: "accessories"
      },
      {
        id: 2,
        icon: "/Products/2.webp",
        name: "Samsung CF591 Series Curved 27-Inch FHD Monitor",
        cost: "610.00",
        category: "accessories"
      },
      {
        id: 3,
        icon: "/Products/3.webp",
        name: "Blue Yeti USB Microphone Blackout Edition",
        cost: "120.00",
        category: "accessories"
      },
      {
        id: 4,
        icon: "/Products/4.webp",
        name: "DYMO LabelWriter 450 Turbo Thermal Label Printer",
        cost: "410.00",
        category: "accessories"
      },
      {
        id: 5,
        icon: "/Products/5.webp",
        name: "Pryma Headphones, Rose Gold Wite & Grey",
        cost: "180.00",
        category: "accessories"
      },
      {
        id: 6,
        icon: "/Products/6.webp",
        name: "Sony WH-1000XM4 Wireless Headphones",
        cost: "350.00",
        category: "accessories"
      },
      {
        id: 7,
        icon: "/Products/7.webp",
        name: "Pryma Headphones, Rose Gold & Grey",
        cost: "999.00",
        category: "women's"
      },
      {
        id: 8,
        icon: "/Products/8.webp",
        name: "Nikon D5600 E567 Digital SLR Camera",
        cost: "700.00",
        category: "men's"
      },
      {
        id: 9,
        icon: "/Products/9.webp",
        name: "Razer Blade 15 I5 12400 Gaming Laptop",
        cost: "1799.00",
        category: "accessories"
      },
      {
        id: 10,
        icon: "/Products/10.webp",
        name: "Logitech MX 100NC 3-120 Wireless Mouse",
        cost: "99.00",
        category: "men's"
      },
];

export default function NewProductCardsList() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [filteredProducts, setFilteredProducts] = useState(products);
  
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
      if (category === "all") {
        setFilteredProducts(products);
      } else {
        const filtered = products.filter((product) => product.category === category);
        setFilteredProducts(filtered);
      }
    };
  
    return (
      <div>
        <div className={classes.filterBar}>
          <ul className={classes.categories}>
            <li
              className={`${classes.category} ${selectedCategory === "all" ? classes.active : ""}`}
              onClick={() => handleCategoryChange("all")}
            >
              All
            </li>
            <li
              className={`${classes.category} ${selectedCategory === "women's" ? classes.active : ""}`}
              onClick={() => handleCategoryChange("women's")}
            >
              Women's
            </li>
            <li
              className={`${classes.category} ${selectedCategory === "accessories" ? classes.active : ""}`}
              onClick={() => handleCategoryChange("accessories")}
            >
              Accessories
            </li>
            <li
              className={`${classes.category} ${selectedCategory === "men's" ? classes.active : ""}`}
              onClick={() => handleCategoryChange("men's")}
            >
              Men's
            </li>
          </ul>
        </div>
        <div className={classes.productList}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <NewProductCards
                key={product.id}
                name={product.name}
                cost={`$${product.cost}`}
                icon={product.icon}
              />
            ))
          ) : (
            <p>No products available in this category.</p>
          )}
        </div>
      </div>
    );
  }