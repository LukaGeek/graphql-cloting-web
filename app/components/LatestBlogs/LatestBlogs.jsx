import Image from "next/image";
import classes from "./LatestBlogs.module.css";

export default function LatestBlogs() {
  const images = [1, 2, 3];

  return (
    <div className={classes.mainDiv}>
      <div className={classes.header}>
        <div className={classes.word}>Latest Blogs</div>
        <span className={classes.divider}></span>
      </div>
      <div className={classes.icons}>
        {images.map((image) => (
          <div key={image} className={classes.imageContainer}>
            <Image
              src={`/Blogs/${image}.webp`}
              alt={`Blog ${image}`}
              width={350}
              height={350}
              quality={100}
              priority={false}
            />
            <div className={classes.overlay}>
              <div className={classes.firstHeader}>Here are the trends I</div>
              <div className={classes.secondHeader}>see coming this fall</div>
              <div className={classes.author}>by admin | Dec 01, 2017</div>
              <span className={classes.readMore}>Read more</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
