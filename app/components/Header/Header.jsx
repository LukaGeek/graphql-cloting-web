"use client";

import { useState } from "react";
import classes from "./Header.module.css";
import { GoChevronDown } from "react-icons/go";
import { FaSignOutAlt } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div className={classes.mainDiv}>
      <div className={classes.plainText}>
        free shipping on all u.s orders over 50$
      </div>
      <div className={classes.leftDiv}>
        <li className={classes.currency}>
          <button onClick={() => toggleDropdown("currency")}>
            USD
            <GoChevronDown />
          </button>
          <ul
            className={`${activeDropdown === "currency" ? classes.open : ""}`}
          >
            <li>CAD</li>
            <li>AUD</li>
            <li>EUR</li>
            <li>GBP</li>
          </ul>
        </li>
        <li className={classes.languages}>
          <button onClick={() => toggleDropdown("languages")}>
            English
            <GoChevronDown />
          </button>
          <ul
            className={`${activeDropdown === "languages" ? classes.open : ""}`}
          >
            <li>French</li>
            <li>Georgian</li>
            <li>Russian</li>
            <li>German</li>
          </ul>
        </li>
        <li className={classes.accounts}>
          <button onClick={() => toggleDropdown("accounts")}>
            My Account
            <GoChevronDown />
          </button>
          <ul
            className={`${activeDropdown === "accounts" ? classes.open : ""}`}
          >
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
