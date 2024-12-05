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
  }),
});

export const { useLikePhoneMutation } = productApi;
