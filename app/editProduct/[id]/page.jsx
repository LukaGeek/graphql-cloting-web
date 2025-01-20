import EditProductForm from "@/app/components/EditProductForm";

const getProductById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

export default async function EditProduct({ params }) {
  const { id } = params;

  try {
    const { product } = await getProductById(id);
    const {
      name,
      image1,
      image2,
      image3,
      image4,
      price,
      type,
      brand,
      description,
      details,
    } = product;

    return (
      <EditProductForm
        id={id}
        name={name}
        image1={image1}
        image2={image2}
        image3={image3}
        image4={image4}
        price={price}
        type={type}
        brand={brand}
        description={description}
        details={details}
      />
    );
  } catch (error) {
    return (
      <div>
        <h1>Error Loading Product</h1>
        <p>{error.message}</p>
      </div>
    );
  }
}
