import FacebookLogin from "../components/Login/Facebook/Facebook";
import GithubLogin from "../components/Login/Github/Github";
import classes from "./page.module.css";

export default function Login() {
  return (
    <div className={classes.mainDiv}>
      <div className={classes.signDiv}>
        <h1 className={classes.signH1}>Sign In</h1>
        <GithubLogin />
        <FacebookLogin />
      </div>
    </div>
  );
}
