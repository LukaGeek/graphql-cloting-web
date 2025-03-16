import { GET_PRODUCTS } from "@/graphql/queries";
import Card from "./Card/Card";
import { useQuery } from "@apollo/client";

export default function NewProductCards() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  if (error) return <p>Error loading products: {error.message}</p>;

  const products = data?.products || [];

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products?.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
