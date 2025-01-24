import Image from "next/image";
import classes from "./LatestBlogs.module.css";

export default function LatestBlogs() {
  const images = [1, 2, 3];

  return (
    <div className={classes.mainDiv}>
      <div className={classes.header}>
        <div className={classes.word}></div>
        <span className={classes.divider}></span>
      </div>
      <div className={classes.icons}>
        {images.map((image) => (
          <div key={image} className={classes.imageContainer}>
            <Image
              src={`/Blogs/${image}.webp`}
              alt={`Blog ${image}`}
              width={1000}
              height={1000}
              quality={100}
              priority
              draggable="false"
            />

            <div className={classes.overlay}>
              <div className={classes.firstHeader}></div>
              <div className={classes.secondHeader}></div>
              <div className={classes.author}></div>
              <span className={classes.readMore}></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
