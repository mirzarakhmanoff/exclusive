import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    likePhonee: build.query({
      query: (params) => ({
        url: "/all-phones",
        params,
      }),
      providesTags: ["Product"],
    }),
    likePhone: build.mutation({
      query: (id) => ({
        url: `/like${id}`,
        method: "POST",
        body: { id },
      }),
      invalidatesTags: ["Product"],
    }),
    addToCart: build.mutation({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "POST",
        body: { id },
      }),
      invalidatesTags: ["Product"],
    }),
    order: build.query({
      query: (params) => ({
        url: "/buy",
        params,
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const { useLikePhoneMutation, useAddToCartMutation, useOrderQuery } =
  productApi;
