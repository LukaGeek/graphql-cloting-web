import Image from "next/image";
import classes from "./Cards.module.css";
import Link from "next/link";

export default function Cards() {
  return (
    <div>
      <div className={classes.mainDiv}>
        <div className={classes.image1}>
          <Image
            src="/Banners/1.webp"
            alt="first"
            width={350}
            height={350}
            draggable="false"
          />
          <h1 className={classes.text1}>
            <Link href="/shop/women"></Link>
          </h1>
        </div>
        <div className={classes.image2}>
          <Image
            src="/Banners/2.webp"
            alt="second"
            width={350}
            height={350}
            draggable="false"
          />
          <h1 className={classes.text2}>
            <Link href="/shop/kids"></Link>
          </h1>
        </div>
        <div className={classes.image3}>
          <Image
            src="/Banners/3.webp"
            alt="third"
            width={350}
            height={350}
            draggable="false"
          />
          <h1 className={classes.text3}>
            <Link href="/shop/men"></Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
