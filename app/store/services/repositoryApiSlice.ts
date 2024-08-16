import { GitHubApiResponse } from "@/app/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IQuery } from "../reducers/querySlice";

export const repositoryApiSlice = createApi({
    reducerPath: "repositoryApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com" }),
    tagTypes: ["GitHubApiResponse", "languages"],

    endpoints: (build) => ({
        getRepositories: build.query<GitHubApiResponse, IQuery>({
            query: ({ query, sort, order, per_page, page }) => ({
                url: "/search/repositories",
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
        getLanguages: build.query<any, string>({
            query: (full_name) => ({
                url: `/repos/${full_name}/languages`,
            }),
        }),
    }),
});
