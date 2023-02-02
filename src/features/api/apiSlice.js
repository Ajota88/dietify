import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://trackapi.nutritionix.com/v2" }),

  endpoints: (builder) => ({
    getFoodList: builder.query({
      query: (foodName) => `search/instant?query=${foodName}`,
    }),
  }),
});

export const { useGetFoodListQuery } = apiSlice;
