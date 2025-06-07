"use client";

import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Scrolling from "./components/ScrollingSystem";
import Providers from "./components/Providers";
import { CartProvider } from "./components/Cart/CartContext";
import CartSidebarWrapper from "./components/CartSidebarWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <Providers>
      <SessionProvider>
        <CartProvider>
          <html lang="en">
            <body
              className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
              <div>{children}</div>
              <CartSidebarWrapper />
              <Scrolling />
            </body>
          </html>
        </CartProvider>
      </SessionProvider>
    </Providers>
  );
}
