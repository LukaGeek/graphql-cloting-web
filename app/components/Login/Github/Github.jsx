"use client";

import { FaGithub } from "react-icons/fa";
import classes from "./Github.module.css";
import { login } from "@/actions/auth";

export default function GoogleLogin() {
  return (
    <div className={classes.mainDiv} onClick={() => login("github")}>
      <FaGithub className={classes.icon} />
      <p className={classes.content}>Sign in with Github</p>
    </div>
  );
}
