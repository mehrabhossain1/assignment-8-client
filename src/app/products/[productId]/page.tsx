import SingleProductDetails from "@/components/productCard/SingleProductDetails";
import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch("https://ass-8-azure.vercel.app/api/v1/products");
  const products = await res.json();
  return products.slice(0, 10).map((product: any) => ({
    productId: product._id,
  }));
};

const SingleProductPage = async ({ params }: any) => {
  console.log(params);
  const res = await fetch(
    `https://ass-8-azure.vercel.app/api/v1/products/${params.productId}`,
    {
      cache: "no-store",
    }
  );
  const product = await res.json();

  console.log("product single ", product);
  return (
    <div>
      <SingleProductDetails product={product} />
    </div>
  );
};

export default SingleProductPage;
