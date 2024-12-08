import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (params) => ({
        url: "/all-phones",
        params,
      }),
      providesTags: ["Product"],
    }),
    getProductById: build.query({
      query: (id) => ({
        url: `/phones${id}`,
      }),
      providesTags: ["Product"],
    }),
    getCategories: build.query({
      query: (name) => ({
        url: `/categories?model=${name}`,
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
} = productApi;
