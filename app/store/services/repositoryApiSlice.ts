import { GitHubApiResponse } from "@/app/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const repositoryApiSlice = createApi({
    reducerPath: "repositoryApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/search" }),
    tagTypes: ["GitHubApiResponse"],

    endpoints: (build) => ({
        getRepositories: build.query<GitHubApiResponse, { query: string }>({
            query: ({ query }) => ({
                url: "/repositories",
                params: {
                    q: query,
                },
            }),
            providesTags: ["GitHubApiResponse"],
        }),
    }),
});
