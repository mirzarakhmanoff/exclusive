import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
// import { logout } from '../slices/authSlice';

const baseQuery = async (args: any, api: any, extraOptions: any) => {
  const {} = api;
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: "http://16.170.227.189:8000",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error) {
    const { status } = result.error;
    if (status === 401 || status === 403) {
      console.error("Unauthorized access - Redirecting to login...");
      // dispatch(logout())
    }
  }
  return result;
};
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const api = createApi({
  reducerPath: "myApi",
  baseQuery: baseQueryWithRetry,
  tagTypes: ["Product", "Register"],
  endpoints: () => ({}),
});
