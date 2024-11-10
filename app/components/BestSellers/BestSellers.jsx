import classes from "./BestSellers.module.css";

export default function BestSellers() {
  return (
    <div>
      <div>
        <div className={classes.mainDiv}>
          <div className={classes.word}>Best Sellers</div>
          <span className={classes.divider}></span>
        </div>
      </div>
    </div>
  );
}
