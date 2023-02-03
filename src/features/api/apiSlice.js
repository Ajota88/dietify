import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://trackapi.nutritionix.com/v2",
    prepareHeaders: (headers, { getState }) => {
      headers.set("x-app-id", import.meta.env.VITE_API_ID);
      headers.set("x-app-key", import.meta.env.VITE_API_KEY);

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
    getBurnCalories: builder.mutation({
      query: (calories) => ({
        url: "/natural/exercise",
        method: "POST",
        body: calories,
      }),
    }),
  }),
});

export const {
  useGetFoodListQuery,
  useGetFoodNutrientsMutation,
  useGetBurnCaloriesMutation,
} = apiSlice;
