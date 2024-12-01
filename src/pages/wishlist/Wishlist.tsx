import { useSelector } from "react-redux";
import ProductCard from "../../components/productCard/ProductCard";

function Wishlist() {
  const wishlist = useSelector((state: any) => state.wishlist.value);
  console.log(wishlist);

  return (
    <div className="my-10">
      <ProductCard products={wishlist} />
    </div>
  );
}

export default Wishlist;
