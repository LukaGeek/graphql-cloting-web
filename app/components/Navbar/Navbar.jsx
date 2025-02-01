"use client";

import classes from "./Navbar.module.css";
import { IoSearchSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import SignInSession from "../SignInSession";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [whitelistedUsers, setWhitelistedUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === "loading") return;

    async function fetchWhitelist() {
      try {
        const res = await fetch("/api/whitelist");
        const data = await res.json();
        setWhitelistedUsers(data);
      } catch (error) {
        console.error("Error fetching whitelist:", error);
      } finally {
        setIsLoading(false);
      }
    }

    if (session?.user) {
      fetchWhitelist();
    }
  }, [session, status]);

  const isWhitelisted =
    !isLoading &&
    session?.user &&
    whitelistedUsers.some((user) => user.email === session.user.email);
  console.log(isWhitelisted);

  return (
    <div className={classes.mainDiv}>
      <div className={classes.logo}>
        <span></span>
        <span></span>
      </div>
      <div className={classes.nav}>
        <div className={classes.home}>home</div>
        <div className={classes.shop}>
          <Link href="/products" prefetch={false}>
            products
          </Link>
        </div>
        <div className={classes.prom}>promotion</div>
        {isWhitelisted && (
          <div className={classes.dash}>
            <Link href="/admin" prefetch={false}>
              dashboard
            </Link>
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
