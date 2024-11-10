import Image from "next/image";
import classes from "./Cards.module.css";

export default function Cards() {
  return (
    <div>
      {/* Cards div */}
      <div className={classes.mainDiv}>
        {/* Card1 */}
        <div className={classes.image1}>
          <Image src="/Banners/1.jpg" alt="first" width={350} height={350} />
          <h1 className={classes.text1}>women&apos;s</h1>
        </div>
        {/* Card2 */}
        <div className={classes.image2}>
          <Image src="/Banners/2.jpg" alt="second" width={350} height={350} />
          <h1 className={classes.text2}>accessories</h1>
        </div>
        {/* Card3 */}
        <div className={classes.image3}>
          <Image src="/Banners/3.jpg" alt="third" width={350} height={350} />
          <h1 className={classes.text3}>men&apos;s</h1>
        </div>
      </div>
    </div>
  );
}
