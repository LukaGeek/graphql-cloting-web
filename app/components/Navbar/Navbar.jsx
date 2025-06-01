"use client";

import classes from "./Navbar.module.css";
import { IoSearchSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import SignInSession from "../SignInSession";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { GET_WHITELIST } from "@/graphql/queries";

export default function Navbar() {
  const { data: session, status } = useSession();
  const {
    data,
    loading: whitelistLoading,
    error,
  } = useQuery(GET_WHITELIST, {
    skip: status === "loading",
  });

  const whitelistedUsers = data?.whitelist || [];

  const isWhitelisted =
    !whitelistLoading &&
    session?.user &&
    whitelistedUsers.some((user) => user.email === session.user.email);

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
