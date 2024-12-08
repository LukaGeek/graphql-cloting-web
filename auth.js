import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./db";
import Github from "next-auth/providers/github";
import Facebook from "next-auth/providers/facebook";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    Github({
      clientId: process.env.GITHUB_AUTH_ID,
      clientSecret: process.env.GITHUB_AUTH_SECRET,
    }),
    Facebook({
      clientId: process.env.FACEBOOK_AUTH_ID,
      clientSecret: process.env.FACEBOOK_AUTH_SECRET,
    }),
  ],
});
