import Link from "next/link";
import classes from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <Link className={classes.dashboard} href={"/admin"}>
      Dashboard
    </Link>
  );
}
