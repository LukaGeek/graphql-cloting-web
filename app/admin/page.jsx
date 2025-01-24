"use client";

import AdminPageMain from "../components/AdminPage";
import ProductLists from "../components/ProductLists/ProductLists";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminHomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session?.user && status !== "loading") {
      router.push("/login");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session?.user) {
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
