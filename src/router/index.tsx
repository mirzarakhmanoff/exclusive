import { lazy, LazyExoticComponent } from "react";
import { useRoutes } from "react-router-dom";
import { SuspenseComponent as Suspense } from "../utils";

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
          path: "/about",
          element: <Suspense></Suspense>,
          children: [
            {
              path: "company",
              element: <Suspense></Suspense>,
            },
          ],
        },
        {
          path: "/product/:id",
          element: <Suspense></Suspense>,
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
