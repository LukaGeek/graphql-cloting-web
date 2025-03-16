"use client";

import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import classes from "./DeleteProduct.module.css";
import { DELETE_PRODUCT } from "@/graphql/mutations";

export default function DeleteProduct({ id }) {
  const [isSent, setIsSent] = useState(false);
  const router = useRouter();

  const [deleteProduct] = useMutation(DELETE_PRODUCT, {
    variables: { id },
    onCompleted: () => {
      console.log("Product Successfully Deleted.");
      router.refresh();
    },
    onError: (error) => {
      console.error("Error deleting product:", error);
    },
  });

  const removeProduct = async () => {
    if (!isSent) {
      setIsSent(true);

      try {
        await deleteProduct();
      } catch (error) {
        console.error("Error occurred during deletion", error);
      }

      setTimeout(() => setIsSent(false), 5000);
    }
  };

  return (
    <>
      {isSent && (
        <div
          className={`${classes.popup} ${classes.animateIn} ${classes.slideOut}`}
        >
          <h2>Success!</h2>
          <p>Product Successfully Deleted.</p>
        </div>
      )}

      <button
        onClick={removeProduct}
        className="btn btn-error ml-2 text-red-800"
      >
        Delete
      </button>
    </>
  );
}
