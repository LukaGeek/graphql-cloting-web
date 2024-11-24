import Image from "next/image";
import classes from "./Cards.module.css";
import Link from "next/link";

export default function Cards() {
  return (
    <div>
      <div className={classes.mainDiv}>
        <div className={classes.image1}>
          <Image src="/Banners/1.jpg" alt="first" width={350} height={350} />
          <h1 className={classes.text1}>
            <Link href="/shop/womens">women&apos;s</Link>
          </h1>
        </div>
        <div className={classes.image2}>
          <Image src="/Banners/2.jpg" alt="second" width={350} height={350} />
          <h1 className={classes.text2}>
            <Link href="/shop/accessories">accessories</Link>
          </h1>
        </div>
        <div className={classes.image3}>
          <Image src="/Banners/3.jpg" alt="third" width={350} height={350} />
          <h1 className={classes.text3}>
            <Link href="/shop/mens">men&apos;s</Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
