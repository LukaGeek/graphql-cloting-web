"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import classes from "./DeleteProduct.module.css";

export default function DeleteProduct({ id }) {
  const [isSent, setIsSent] = useState(false);
  const router = useRouter();

  const removeProduct = async () => {
    if (!isSent) {
      setIsSent(true);

      const res = await fetch(`http://localhost:3000/api/products?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        console.log("Product Successfully Deleted.");
        router.refresh();
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
