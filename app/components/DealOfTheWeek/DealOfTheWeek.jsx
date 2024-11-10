import Image from "next/image";
import classes from "./DealOfTheWeek.module.css";

export default function DealOfTheWeek() {
  return (
    <div className={classes.mainDiv}>
      <div className={classes.image}>
        <Image
          src="/deal.webp"
          alt="Deal Of The Week"
          width={600}
          height={800}
        />
      </div>
      <div>
        <h1 className={classes.text}>Deal Of The Week</h1>
        <div className={classes.circles}>
          <div className={`${classes.circle} ${classes.day}`}>
            <span>1</span>
            <span>Day</span>
          </div>
          <div className={`${classes.circle} ${classes.hours}`}>
            <span>2</span>
            <span>Hours</span>
          </div>
          <div className={`${classes.circle} ${classes.mins}`}>
            <span>59</span>
            <span>Mins</span>
          </div>
          <div className={`${classes.circle} ${classes.sec}`}>
            <span>59</span>
            <span>Secs</span>
          </div>
        </div>
        <span className={classes.shop}>shop now</span>
      </div>
    </div>
  );
}
