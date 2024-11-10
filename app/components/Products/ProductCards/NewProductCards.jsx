import classes from "./NewProductCards.module.css";
import Image from "next/image";
import { MdFavoriteBorder } from "react-icons/md";

export default function NewProductCards({ name, cost, icon }) {
  return (
    <div className={classes.product}>
      {/* Product */}
      <div>
        {/* Image */}
        <div className={classes.image}>
          <Image src={icon} alt="" width={185} height={185} />
        </div>
        {/* Favorites */}
        <div className={classes.favorite}>
          <MdFavoriteBorder />
        </div>
        {/* Sale */}
        <div className={classes.sale}>
          <span>-20%</span>
        </div>
        {/* Product info */}
        <div className={classes.product_info}>
          <span>{name}</span>
        </div>
        <div className={classes.cost}>
          <span>{cost}</span>
        </div>
      </div>
      {/* Add to cart */}
      <button className={classes.add_to_cart}>add to cart</button>
    </div>
  );
}
