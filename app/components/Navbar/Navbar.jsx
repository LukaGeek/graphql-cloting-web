import classes from "./Navbar.module.css";
import { IoSearchSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link"
import UserDropdown from "../Dropdown/Dropdown";

export default function Navbar() {
  return (
    <div className={classes.mainDiv}>
      <div className={classes.logo}>
        <span>colo</span>
        <span className={classes.red}>shop</span>
      </div>
      <div className={classes.nav}>
        <div>home</div>
        <div>shop</div>
        <div>promotion</div>
        <div>pages</div>
        <div>
          <Link href="/admin">dashboard</Link>
        </div>
        <div>contact</div>
        <div className={classes.iconsDiv}>
          <div className={classes.icons}>
            <IoSearchSharp />
          </div>
          <div className={classes.icons}>
            <FaCartShopping />
          </div>
          <div className={classes.icons}>
            <Link href="/login">
                <FaUser />
                <UserDropdown />
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
