import AllProductsTable from "@/components/dashboard/AllProductsTable";

const AllProductsDashboard = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/v1/products`);
  const allProducts = await res.json();

  return (
    <div>
      There are {allProducts.length} products in this page
      <AllProductsTable allProducts={allProducts} />
    </div>
  );
};

export default AllProductsDashboard;
