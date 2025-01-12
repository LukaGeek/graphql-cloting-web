import Card from "./Card";

const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error loading products: ", error);
    return { products: [] };
  }
};

export default async function NewProductCards() {
  const { products } = await getProducts();

  if (!products) {
    <div>Loading products...</div>;
  }

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products?.map((card) => (
            <Card key={card._id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
