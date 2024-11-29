import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (params) => ({
        url: "/signup",
        method: "POST",
        params,
      }),
      invalidatesTags: ["Register"],
    }),
  }),
});

export const { useSignUpMutation } = productApi;
