"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import { GET_WHITELIST } from "@/graphql/queries";
import ErrorToast from "../../components/Toasts/ErrorToast";
import AddProductForm from "../../components/Admin/ProductAction/AddProductForm";
import AdminNavbar from "../../components/Admin/AdminNavbar";

export default function AddProductClient() {
  const { data: session, status } = useSession();
  const {
    data: whitelistData,
    loading,
    error: WLerror,
  } = useQuery(GET_WHITELIST);
  const router = useRouter();
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
  if (WLerror) return <ErrorToast message="Error loading whitelist" />;

  return (
    <AdminNavbar>
      <AddProductForm />
    </AdminNavbar>
  );
}
