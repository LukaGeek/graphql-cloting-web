import classes from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.upper}>
        <div className={classes.leftSide}>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className={classes.rightSide}>
          <FaFacebookF />
          <FaXTwitter />
          <IoLogoInstagram />
          <FaDiscord />
          <FaPinterest />
        </div>
      </div>
      <div className={classes.bottom}>
        <span>{"\u00A9"}</span>
      </div>
    </div>
  );
}
