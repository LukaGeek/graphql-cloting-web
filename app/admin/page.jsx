"use client";

import AdminPageMain from "../components/AdminPage";
import ProductLists from "../components/ProductLists/ProductLists";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminHomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [whitelistedUsers, setWhitelistedUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === "loading") return;

    async function fetchWhitelist() {
      try {
        const res = await fetch("/api/whitelist");
        const data = await res.json();
        setWhitelistedUsers(data);
      } catch (error) {
        console.error("Error fetching whitelist:", error);
      } finally {
        setIsLoading(false);
      }
    }

    if (session?.user) {
      fetchWhitelist();
    }
  }, [session, status]);

  useEffect(() => {
    if (!isLoading && session?.user) {
      const isWhitelisted = whitelistedUsers.some(
        (user) => user.email === session.user.email
      );

      if (!isWhitelisted) {
        router.push("/");
      }
    }
  }, [isLoading, session, whitelistedUsers, router]);

  if (status === "loading" || isLoading) {
    return <div></div>;
  }

  if (
    !session?.user ||
    !whitelistedUsers.some((user) => user.email === session.user.email)
  ) {
    return null;
  }

  return (
    <div>
      <AdminPageMain>
        <ProductLists />
      </AdminPageMain>
    </div>
  );
}
