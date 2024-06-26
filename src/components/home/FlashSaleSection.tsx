import React from "react";
import Button from "../button/Button";
import ProductCard from "../productCard/ProductCard";
import Link from "next/link";

const FlashSaleSection = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/v1/products`, {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();

  const flashSaleProducts = data.filter(
    (product: any) => product.flashSale === true
  );

  return (
    <div className="mt-24">
      <div className="flex justify-between items-center">
        <h2 className="text-[#3D3D3D] text-4xl font-bold">
          <span className="text-red-400">Flash</span> Sale
        </h2>
        <Link href="/flash-sale">
          <Button>View All</Button>
        </Link>
      </div>
      <div className="py-20">
        <ProductCard flashSaleProducts={flashSaleProducts} />
      </div>
    </div>
  );
};

export default FlashSaleSection;
