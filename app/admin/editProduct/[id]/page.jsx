"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT, GET_WHITELIST } from "@/graphql/queries";
import ErrorToast from "@/app/components/Toasts/ErrorToast";
import AdminNavbar from "@/app/components/Admin/AdminNavbar";
import EditProductForm from "@/app/components/Admin/ProductAction/EditProductForm";

export default function EditProduct({ params }) {
  const { id } = params;
  const { data: session, status } = useSession();
  const router = useRouter();
  const [error, setError] = useState(null);
  const [authorized, setAuthorized] = useState(false);
  const {
    data: whitelistData,
    loading: WLLoading,
    error: WLError,
  } = useQuery(GET_WHITELIST);

  useEffect(() => {
    if (!session?.user && status !== "loading") {
      router.push("/login");
    }

    if (status === "loading" || WLLoading || !whitelistData) return;

    const userEmail = session?.user?.email;
    const whitelistEmails = whitelistData?.whitelist.map((user) => user.email);
    const isWhitelisted = whitelistEmails.includes(userEmail);

    if (!isWhitelisted) {
      router.replace("/");
    } else {
      setAuthorized(true);
    }
  }, [session, status, whitelistData, WLLoading, router]);

  const {
    loading,
    error: queryError,
    data,
  } = useQuery(GET_PRODUCT, {
    variables: { id },
    skip: !id,
  });

  useEffect(() => {
    if (queryError) {
      setError(queryError.message);
    }
  }, [queryError]);

  if (!session?.user) return null;

  if (status === "loading" || WLLoading || !authorized)
    return <p>Loading...</p>;
  if (WLError) return <ErrorToast message="Error loading whitelist." />;

  if (error) return <ErrorToast message="Error while loading products." />;

  if (loading || !data?.product) return <LoadingSkeleton />;

  const product = data?.product;

  return (
    <AdminNavbar>
      <EditProductForm
        id={id}
        name={product.name}
        image1={product.image1}
        image2={product.image2}
        image3={product.image3}
        image4={product.image4}
        price={product.price}
        type={product.type}
        brand={product.brand}
        description={product.description}
        details={product.details}
      />
    </AdminNavbar>
  );
}

function LoadingSkeleton() {
  return (
    <div className="p-6 max-w-md mx-auto animate-pulse space-y-6">
      <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto"></div>
      <div className="h-8 bg-gray-300 rounded w-[290px] mx-auto"></div>
      <form className="space-y-4">
        <div className="h-10 bg-gray-200 rounded w-full"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
        <div className="h-16 bg-gray-200 rounded w-full"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
        <div className="flex space-x-2">
          <div className="h-10 bg-gray-300 rounded w-[25rem]"></div>
          <div className="h-10 bg-gray-300 rounded w-[4rem]"></div>
        </div>
      </form>
    </div>
  );
}
