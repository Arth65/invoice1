import { useState } from "react";
import ProductTable from "./ProductTable";
import ProductCatalog from "./ProductCatalog";

export default function ProductsFrame() {
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: "Tesla",
      category: "Car",
      costPrice: 500,
      sellingPrice: 1000,
      stock: 200,
      discount: 50,
    },
  ]);
  return (
    <>
      <ProductCatalog
        onSubmit={(data) =>
          setProducts([...products, { ...data, id: products.length + 1 }])
        }
      />
      <ProductTable
        products={products}
        onDelete={(id) => setProducts(products.filter((e) => e.id != id))}
      />
    </>
  );
}
