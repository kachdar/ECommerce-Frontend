import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      providesTags: ["Products"],
    }),
    getBookDetails: builder.query({
      query: (bookId) => ({
        url: `${PRODUCTS_URL}/${bookId}`,
      }),
      providesTags: ["Product"],
    }),
    searchBooks: builder.query({
      query: (queryParams) => ({
        url: `${PRODUCTS_URL}/search${queryParams}`,
      }),
    }),
  }),
});

export const { useGetBooksQuery, useGetBookDetailsQuery, useSearchBooksQuery } =
  productsApiSlice;
