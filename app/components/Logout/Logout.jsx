import classes from "./Logout.module.css";
import { logout } from "@/actions/auth";

export default function Logout() {
  return (
    <div onClick={() => logout("github")} className={classes.logout}>
      Sign out
    </div>
  );
}
