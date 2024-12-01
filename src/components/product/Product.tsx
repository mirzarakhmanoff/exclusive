import ProductCard from "../productCard/ProductCard";
import phone from "../../assets/phone.png";

const Products = () => {
  const sampleProducts = [
    {
      id: 1,
      title: "Breed Dry Dog Food",
      price: 100,
      rating: 3,
      reviews: 35,
      image: phone,
      isNew: false,
    },
    {
      id: 2,
      title: phone,
      price: 360,
      rating: 5,
      reviews: 95,
      image: phone,
      isNew: true,
    },
    {
      id: 3,
      title: "ASUS FHD Gaming Laptop",
      price: 700,
      rating: 4.5,
      reviews: 325,
      image: phone,
      isNew: false,
    },
    {
      id: 4,
      title: "Curology Product Set",
      price: 500,
      rating: 4,
      reviews: 145,
      image: phone,
      isNew: true,
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Our Products</h2>
      <ProductCard products={sampleProducts} />
    </div>
  );
};

export default Products;
