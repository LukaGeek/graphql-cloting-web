"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import classes from "./DealOfTheWeek.module.css";
import Link from "next/link";

export default function DealOfTheWeek() {
  const [mounted, setMounted] = useState(false);

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 14);

  const calculateTimeRemaining = () => {
    const now = new Date();
    const timeDiff = targetDate - now;

    if (timeDiff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={classes.mainDiv}>
      <div className={classes.image}>
        <Image
          draggable="false"
          src="/deal.webp"
          alt="Deal Of The Week"
          width={600}
          height={800}
          quality={100}
          priority
        />
      </div>
      <div className={classes.content}>
        <h1 className={classes.text}></h1>
        <div className={classes.circles}>
          <div className={`${classes.circle} ${classes.day}`}>
            <span>{timeRemaining.days}</span>
            <span>Day{timeRemaining.days !== 1 ? "s" : ""}</span>
          </div>
          <div className={`${classes.circle} ${classes.hours}`}>
            <span>{timeRemaining.hours}</span>
            <span>Hour{timeRemaining.hours !== 1 ? "s" : ""}</span>
          </div>
          <div className={`${classes.circle} ${classes.mins}`}>
            <span>{timeRemaining.minutes}</span>
            <span>Min{timeRemaining.minutes !== 1 ? "s" : ""}</span>
          </div>
          <div className={`${classes.circle} ${classes.sec}`}>
            <span>{timeRemaining.seconds}</span>
            <span>Sec{timeRemaining.seconds !== 1 ? "s" : ""}</span>
          </div>
        </div>
        <span className={classes.shop}>
          <Link href="/"></Link>
        </span>
      </div>
    </div>
  );
}
