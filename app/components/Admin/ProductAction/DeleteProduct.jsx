"use client";

import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DELETE_PRODUCT } from "@/graphql/mutations";
import SuccessToast from "../../Toasts/SuccessToast";
import ErrorToast from "../../Toasts/ErrorToast";

export default function DeleteProduct({ id }) {
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  const [deleteProduct] = useMutation(DELETE_PRODUCT, {
    variables: { id },
    onCompleted: () => {
      console.log("Product Successfully Deleted.");
      router.refresh();
    },
    onError: (error) => {
      <ErrorToast message={`Error deleting product: ${error}`} />;
    },
  });

  const removeProduct = async () => {
    if (isSent) return;

    setIsSent(true);
    setIsError(false);

    try {
      await deleteProduct();
    } catch (error) {
      <ErrorToast message={`Error occurred during deletion: ${error}`} />;
      setIsError(true);
    }

    setTimeout(() => {
      setIsSent(false);
      setIsError(false);
    }, 5000);
  };

  return (
    <>
      {isSent && <SuccessToast message="Product successfully deleted." />}
      {isError && <ErrorToast message="Failed to add product" />}

      <button
        onClick={removeProduct}
        className="btn btn-error ml-2 text-red-800"
      >
        Delete
      </button>
    </>
  );
}
