"use client";

import { FaFacebook } from "react-icons/fa";
import classes from "./Facebook.module.css";
import { login } from "@/actions/auth";

export default function FacebookLogin() {
  return (
    <div onClick={() => login("facebook")} className={classes.mainDiv}>
      <FaFacebook className={classes.icon} />
      <p className={classes.content}>Sign in with Facebook</p>
    </div>
  );
}
