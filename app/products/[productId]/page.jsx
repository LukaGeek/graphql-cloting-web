"use client"; // This marks the component as a client component

import { useRouter } from "next/navigation";  // Use next/navigation instead of next/router
import { cardsData } from "../../cardsData"; 

export default function ProductOverview() {
  const router = useRouter();
  const query = router.query;

  // If productId is not available, return early to prevent errors
  if (!query) {
    return <p>Loading...</p>;  // Or any loading indicator you prefer
  }

  // Find the product based on productId
  const product = cardsData.find((card) => card.id === query);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="bg-white">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}
