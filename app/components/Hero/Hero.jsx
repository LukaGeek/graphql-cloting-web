import Image from "next/image";
import classes from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <div className={classes.hero}>
      <div className={classes.overlay}></div>
      <Image
        draggable="false"
        src="/heroImg.webp"
        alt="Main"
        fill
        priority
        className={classes.heroImage}
      />
      <div className={classes.content}>
        <h6 className={classes.topic}></h6>
        <h1 className={classes.text1}></h1>
        <h1 className={classes.text2}></h1>
        <Link href="/" className={classes.shop}></Link>
      </div>
    </div>
  );
}
