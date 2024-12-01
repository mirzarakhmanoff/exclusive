import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";

const Layout = () => {
  return (
    <main>
      <Header />

      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
