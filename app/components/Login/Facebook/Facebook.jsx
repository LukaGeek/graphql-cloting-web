"use client";

import { FaFacebook } from "react-icons/fa";
import classes from "./Facebook.module.css";
import { login } from "@/actions/auth";

export default function FacebookLogin() {
  return (
    <div onClick={() => login("facebook")} className="flex">
      <FaFacebook className={classes.icon} />
      <span className={classes.content}>Sign in with Facebook</span>
    </div>
  );
}
