import classes from "./Header.module.css";
import { GoChevronDown } from "react-icons/go";
import { FaSignOutAlt } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";


export default function Header() {
  return (
    <div className={classes.mainDiv}>
      <div className={classes.plainText}>
        free shipping on all u.s orders over 50$
      </div>
      <div className={classes.leftDiv}>
        <li className={classes.currency}>
          <button>
            USD
            <GoChevronDown />
          </button>
          <ul className={classes.currencySelection}>
            <li>CAD</li>
            <li>AUD</li>
            <li>EUR</li>
            <li>GBP</li>
          </ul>
        </li>
        <li className={classes.languages}>
          <button>
            English
            <GoChevronDown />
          </button>
          <ul className={classes.languageSelection}>
            <li>French</li>
            <li>Georgian</li>
            <li>Russian</li>
            <li>German</li>
          </ul>
        </li>
        <li className={classes.accounts}>
          <button>
            My Account
            <GoChevronDown />
            </button>
            <ul className={classes.accountSelection}>
              <li>
                <button>
                <FaSignOutAlt />
                  Sign In
                  </button>
                </li>
              <li>
                <button>
                <IoMdPersonAdd />
                  Sign Up
                  </button>
              </li>
            </ul>
        </li>
      </div>
    </div>
  );
}
