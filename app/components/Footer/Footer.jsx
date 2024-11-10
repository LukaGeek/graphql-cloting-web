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
            <li>Blog</li>
            <li>FAQs</li>
            <li>Contact us</li>
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
        <span>
          {"\u00A9"} 2024 All Rights Reserved. This website is made by Luka
          Linchiki
        </span>
      </div>
    </div>
  );
}
