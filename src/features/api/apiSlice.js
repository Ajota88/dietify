import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://trackapi.nutritionix.com/v2",
    prepareHeaders: (headers, { getState }) => {
      headers.set("x-app-id", "f0741bbc");
      headers.set("x-app-key", "bc10cf98ae98fd383b699d36f5ab7da8");

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getFoodList: builder.query({
      query: (foodName) => `/search/instant?query=${foodName}`,
    }),
    getFoodNutrients: builder.mutation({
      query: (food) => ({
        url: "/natural/nutrients",
        method: "POST",
        body: food,
      }),
    }),
  }),
});

export const { useGetFoodListQuery, useGetFoodNutrientsMutation } = apiSlice;
