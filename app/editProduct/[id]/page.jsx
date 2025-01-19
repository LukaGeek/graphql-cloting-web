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
      price,
      color,
      type,
      brand,
      image1,
      image2,
      image3,
      image4,
      description,
      details,
    } = product;

    return (
      <EditProductForm
        id={id}
        name={name}
        price={price}
        color={color}
        type={type}
        brand={brand}
        image1={image1}
        image2={image2}
        image3={image3}
        image4={image4}
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
