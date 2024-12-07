import ProductCard from "../productCard/ProductCard";
import { useGetCategoriesQuery } from "../../redux/api/product-api";

const Products = () => {
  const { data: phones } = useGetCategoriesQuery({});

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Our Products</h2>
      <ProductCard products={phones} />
    </div>
  );
};

export default Products;
