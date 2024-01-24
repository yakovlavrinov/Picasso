import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PostType } from "./type";
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    getPosts: build.query<PostType[], { limit: number; start: number }>({
      query: ({ limit, start }) => ({
        url: "/posts",
        params: {
          _limit: limit,
          _start: start,
        },
      }),
    }),
    getPostById: build.query<PostType, number>({
      query: (id: number = 1) => ({
        url: `/posts/${id}`,
      }),
    }),
  }),
});

export const { useGetPostsQuery } = api;
