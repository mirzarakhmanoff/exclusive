import { lazy, LazyExoticComponent } from "react";
import { useRoutes } from "react-router-dom";
import { SuspenseComponent as Suspense } from "../utils";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import Wishlist from "../pages/wishlist/Wishlist";
import ProductDetails from "../pages/detail/Detail";
import CartPage from "../pages/cart/Cart";

const Home: LazyExoticComponent<any> = lazy(() => import("../pages/home/Home"));

const Layout: LazyExoticComponent<any> = lazy(
  () => import("../pages/layout/Layout")
);

const Routers = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <Suspense>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/login",
          element: (
            <Suspense>
              <Login />
            </Suspense>
          ),
          children: [],
        },
        {
          path: "/register",
          element: (
            <Suspense>
              <Register />
            </Suspense>
          ),
        },
        {
          path: "/wishlist",
          element: (
            <Suspense>
              <Wishlist />
            </Suspense>
          ),
        },
        {
          path: "/cart",
          element: (
            <Suspense>
              <CartPage />
            </Suspense>
          ),
        },
        {
          path: "/product/:id",
          element: (
            <Suspense>
              <ProductDetails />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "*",
      element: (
        <Suspense>
          <h2>404</h2>
        </Suspense>
      ),
    },
  ]);
};

export default Routers;
