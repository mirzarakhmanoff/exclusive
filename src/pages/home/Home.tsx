import CategoriesSection from "../../components/Category/Category";
import Hero from "../../components/hero/Hero";
import Products from "../../components/product/Product";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoriesSection />
      <Products />
    </div>
  );
};

export default Home;
