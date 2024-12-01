import CategoriesSection from "../../components/Category/Category";
import Header from "../../components/Header/Header";
import Hero from "../../components/hero/Hero";
import Products from "../../components/product/Product";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CategoriesSection />
      <Products />
    </div>
  );
};

export default Home;
