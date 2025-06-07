"use client";

import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import SuccessToast from "./Toasts/SuccessToast";
import ErrorToast from "./Toasts/ErrorToast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (isSent || isError) {
      const timer = setTimeout(() => {
        setIsSent(false);
        setIsError(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSent, isError]);

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
          setIsError(true);
        }
      );
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 w-full box-border">
      <div className="flex flex-col items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Newsletter</h1>
        <span className="text-sm text-gray-600 mt-1">
          Subscribe to our newsletter and get 20% off your first purchase
        </span>
      </div>
      <div className="flex flex-col sm:flex-row items-center mt-4 gap-3 w-full max-w-md">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={handleEmailChange}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button
          onClick={handleSubscribe}
          disabled={!isValidEmail || !email}
          className={`px-6 py-2 text-base font-medium text-white rounded-md transition ${
            !isValidEmail || !email
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-400"
          }`}
        >
          Subscribe
        </button>
      </div>
      {!isValidEmail && email && (
        <div className="text-red-500 text-sm mt-2">
          Please enter a valid email address.
        </div>
      )}

      {isSent && (
        <SuccessToast message="Thank you for subscribing! Check your email for further updates." />
      )}
      {isError && (
        <ErrorToast message="Failed to subscribe. Please try again later." />
      )}
    </div>
  );
}
