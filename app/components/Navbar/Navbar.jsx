"use client";

import classes from "./Navbar.module.css";
import { IoSearchSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import Link from "next/link";
import SignInSession from "../SignInSession";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.mainDiv}>
      <div className={classes.logo}>
        <span></span>
        <span></span>
      </div>
      <div className={classes.nav}>
        <div className={classes.home}>home</div>
        <div className={classes.shop}>shop</div>
        <div className={classes.prom}>promotion</div>
        {session?.user && (
          <div className={classes.dash}>
            <Link href="/admin">dashboard</Link>
          </div>
        )}
        <div className={classes.blog}>blog</div>
        <div className={classes.contact}>contact</div>
        <div className={classes.iconsDiv}>
          <div id={classes.search} className={classes.icons}>
            <IoSearchSharp />
          </div>
          <div className={classes.icons}>
            <FaCartShopping />
          </div>
          <div className={classes.icons}>
            <SignInSession />
          </div>
        </div>
      </div>
    </div>
  );
}
