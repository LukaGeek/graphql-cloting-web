"use client";

import { useEffect, useState } from "react";
import classes from "./Newsletter.module.css";

export default function Newsletter() {
  let [message, setMessage] = useState("");
  let [isSent, setIsSent] = useState(false);
  let [isValidEmail, setIsValidEmail] = useState(true);

  useEffect(() => {
    if (isSent) {
      const timer = setTimeout(() => setIsSent(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSent]);

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setMessage(email);

    // Simple regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(email));
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (isValidEmail && message) {
      setIsSent(true);
      setMessage(""); // Clear the input after successful submission
    }
  };

  return (
    <div>
      <div className={classes.mainDiv}>
        <div className={classes.firstDiv}>
          <h1>Newsletter</h1>
          <span>
            Subscribe to our newsletter and get 20% off your first purchase
          </span>
        </div>
        <div className={classes.secondDiv}>
          <input
            type="email"
            placeholder="Your Email"
            value={message}
            onChange={handleEmailChange}
          />
          <button
            onClick={handleSubscribe}
            disabled={!isValidEmail || !message}
          >
            subscribe
          </button>
        </div>
        {!isValidEmail && (
          <div className={classes.error}>
            Please enter a valid email address.
          </div>
        )}
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
