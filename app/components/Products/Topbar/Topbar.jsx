import classes from "./Topbar.module.css";

export default function Topbar() {
  return (
    <div>
      <div className={classes.mainDiv}>
        <div className={classes.word}>New Arrivals</div>
        <span className={classes.divider}></span>
      </div>
      <div>
        {/* Navigator */}
        <ul className={classes.categories}>
          <li className={classes.category}>all</li>
          <li className={classes.category}>women&apos;s</li>
          <li className={classes.category}>accessories</li>
          <li className={classes.category}>men&apos;s</li>
        </ul>
      </div>
    </div>
  );
}
