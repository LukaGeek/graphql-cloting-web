import ProductOverview from "./ProductOverview";

export const metadata = {
  title: "Product Overview - COLOSHOP",
  description: "Current Product Overview",
};

export default async function ProductPage({ params }) {
  return <ProductOverview params={params} />;
}
