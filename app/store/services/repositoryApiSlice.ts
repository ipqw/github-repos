import { GitHubApiResponse } from "@/app/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IQuery } from "../reducers/querySlice";

export const repositoryApiSlice = createApi({
    reducerPath: "repositoryApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/search" }),
    tagTypes: ["GitHubApiResponse"],

    endpoints: (build) => ({
        getRepositories: build.query<GitHubApiResponse, IQuery>({
            query: ({ query, sort, order, per_page, page }) => ({
                url: "/repositories",
                params: {
                    q: query,
                    sort,
                    order,
                    per_page,
                    page,
                },
            }),
            providesTags: ["GitHubApiResponse"],
        }),
    }),
});
