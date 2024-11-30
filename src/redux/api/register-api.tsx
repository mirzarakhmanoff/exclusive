import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation({
      query: (body) => ({
        url: "/signup",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Register"],
    }),
    login: build.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Register"],
    }),
    sendOtp: build.mutation({
      query: (code) => ({
        url: `/confirmation/${code}`,
        method: "POST",
      }),
      invalidatesTags: ["Register"],
    }),
  }),
});

export const { useSignUpMutation, useSendOtpMutation, useLoginMutation } =
  productApi;
