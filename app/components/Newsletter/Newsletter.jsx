"use client";

import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import classes from "./Newsletter.module.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (isSent) {
      const timer = setTimeout(() => setIsSent(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSent]);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(value));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!isValidEmail || !email) return;

    emailjs
      .send(
        "email_subscribe",
        "template_f22bzp9",
        { user_email: email },
        "XduKCPx0262nZVRAz"
      )
      .then(
        () => {
          setIsSent(true);
          setEmail("");
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };

  return (
    <div>
      <div className={classes.mainDiv}>
        <div className={classes.firstDiv}>
          <h1></h1>
          <span></span>
        </div>
        <div className={classes.secondDiv}>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={handleEmailChange}
          />
          <button onClick={handleSubscribe} disabled={!isValidEmail || !email}>
            Subscribe
          </button>
        </div>
        {!isValidEmail && <div className={classes.error}></div>}
      </div>
      {isSent && (
        <div
          className={`${classes.popup} ${classes.animateIn} ${classes.slideOut}`}
        >
          <h2>Success!</h2>
          <p>
            Thank you for subscribing! Check your email for further updates.
          </p>
        </div>
      )}
    </div>
  );
}
