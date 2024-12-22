import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import Scrolling from "./components/Scrolling/ScrollingSystem";
import AdminPageMain from "./components/AdminPage/AdminPage";

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

export const metadata = {
  title: "Clothing Website",
  description: "Created by Luka Linchiki",
};

export default async function RootLayout({ children }) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div>
            <AdminPageMain />
          </div>
          <div>{children}</div>
          <Scrolling />
        </body>
      </html>
    </SessionProvider>
  );
}
