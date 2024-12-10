import ProductCard from "../productCard/ProductCard";
import { useGetProductsQuery } from "../../redux/api/product-api";
import { Button } from "antd";

const Products = () => {
  const { data: phones } = useGetProductsQuery({});

  return (
    <div className="p-8 ">
      <h2 className="text-2xl font-bold mb-4">Our Products</h2>
      <ProductCard products={phones?.slice(0, 8)} />
      <Button className="mt-5">See more</Button>
    </div>
  );
};

export default Products;
