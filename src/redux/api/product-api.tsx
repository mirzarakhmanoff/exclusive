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
    addPhone: build.mutation({
      query: (formData) => {
        const { model, title, price, year, description, photo } = formData;

        // Проверяем, что фото передано
        if (!photo) {
          throw new Error("Фото не выбрано");
        }

        const form = new FormData();
        form.append("upload_phone_photo", photo); // Здесь добавляем файл

        // Добавляем остальные параметры в строку запроса
        const params = new URLSearchParams({
          model,
          title,
          price,
          year,
          description,
        }).toString();

        return {
          url: `/add-phone?${params}`, // Параметры в строке запроса
          method: "POST",
          body: form,
        };
      },
      invalidatesTags: ["Register"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetCategoriesQuery,
  useAddPhoneMutation,
} = productApi;
