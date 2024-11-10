import classes from "./ServiceInfo.module.css";
import { PiTruckTrailerFill } from "react-icons/pi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BsArrowRepeat } from "react-icons/bs";
import { LuClock3 } from "react-icons/lu";

export default function ServiceInfo() {
  return (
    <div>
      <div className={classes.mainDiv}>
        {/* 1st div content */}
        <div className={classes.div}>
          <div className={classes.icon}>
            <PiTruckTrailerFill />
          </div>
          <div className={classes.info}>
            <span>free shipping</span>
            <span>Suffered Alteration in Some Form</span>
          </div>
        </div>
        {/* 2nd div content */}
        <div className={classes.div1}>
          <div className={classes.icon1}>
            <FaMoneyBillAlt />
          </div>
          <div className={classes.info1}>
            <span>cach on delivery</span>
            <span>The Internet Tend To Repeat</span>
          </div>
        </div>
        {/* 3rd div content */}
        <div className={classes.div2}>
          <div className={classes.icon2}>
            <BsArrowRepeat />
          </div>
          <div className={classes.info2}>
            <span>45 days return</span>
            <span>Making it Look Like Readable</span>
          </div>
        </div>
        {/* 4th div content */}
        <div className={classes.div3}>
          <div className={classes.icon3}>
            <LuClock3 />
          </div>
          <div className={classes.info3}>
            <span>opening all week</span>
            <span>8AM - 09PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
