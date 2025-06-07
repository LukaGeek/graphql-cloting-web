"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useQuery } from "@apollo/client";
import { GET_WHITELIST } from "@/graphql/queries";
import AdminNavbar from "../components/Admin/AdminNavbar";
import ProductLists from "../components/ProductLists/ProductLists";
import ErrorToast from "../components/Toasts/ErrorToast";

export default function AdminPageClient() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { data: whitelistData, loading, error } = useQuery(GET_WHITELIST);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (status === "loading" || loading || !whitelistData) return;

    const userEmail = session?.user?.email;
    const whitelistEmails = whitelistData?.whitelist.map((user) => user.email);
    const isWhitelisted = whitelistEmails.includes(userEmail);

    if (!isWhitelisted) {
      router.replace("/");
    } else {
      setAuthorized(true);
    }
  }, [session, status, whitelistData, loading, router]);

  if (status === "loading" || loading || !authorized) return <p>Loading...</p>;
  if (error) return <ErrorToast message="Error loading whitelist." />;

  return (
    <AdminNavbar>
      <ProductLists />
    </AdminNavbar>
  );
}
