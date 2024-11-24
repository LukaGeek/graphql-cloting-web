import Image from "next/image";
import classes from "./LatestBlogs.module.css";

export default function LatestBlogs() {
  return (
    <div className={classes.mainDiv}>
      <div className={classes.header}>
        <div className={classes.word}>Latest Blogs</div>
        <span className={classes.divider}></span>
      </div>
      <div className={classes.icons}>
        <div className={classes.imageContainer}>
          <Image src="/Blogs/1.jpg" alt="" width={350} height={350} />
          <div className={classes.overlay}>
            <div className={classes.firstHeader}>Here are the trends I</div>
            <div className={classes.secondHeader}>see coming this fall</div>
            <div className={classes.author}>by admin | dec 01, 2017</div>
            <span className={classes.readMore}>Read more</span>
          </div>
        </div>
        <div className={classes.imageContainer}>
          <Image src="/Blogs/2.jpg" alt="" width={350} height={350} />
          <div className={classes.overlay}>
            <div className={classes.firstHeader}>Here are the trends I</div>
            <div className={classes.secondHeader}>see coming this fall</div>
            <div className={classes.author}>by admin | dec 01, 2017</div>
            <span className={classes.readMore}>Read more</span>
          </div>
        </div>
        <div className={classes.imageContainer}>
          <Image src="/Blogs/3.jpg" alt="" width={350} height={350} />
          <div className={classes.overlay}>
            <div className={classes.firstHeader}>Here are the trends I</div>
            <div className={classes.secondHeader}>see coming this fall</div>
            <div className={classes.author}>by admin | dec 01, 2017</div>
            <span className={classes.readMore}>Read more</span>
          </div>
        </div>
      </div>
    </div>
  );
}
