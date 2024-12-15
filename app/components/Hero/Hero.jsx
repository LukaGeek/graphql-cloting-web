import Image from "next/image";
import classes from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <div className={classes.hero}>
      <Image src="/heroImg.webp" alt="Main" width={1920} height={650} />
      <h6 className={classes.topic}>spring / summer collection 2017</h6>
      <h1 className={classes.text1}>Get up to 30%</h1>
      <h1 className={classes.text2}>New Arrivals</h1>
      <span className={classes.shop}>
        <Link href="/">shop now</Link>
      </span>
    </div>
  );
}
