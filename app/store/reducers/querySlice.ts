import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IQuery {
    query: string;
    sort: "stars" | "" | "forks" | "help-wanted-issues" | "updated";
    order: "desc" | "asc";
    per_page?: number;
    page?: number;
}

const initialState: IQuery = {
    query: "",
    sort: "",
    order: "desc",
    per_page: 10,
    page: 1,
};

export const querySlice = createSlice({
    name: "query",
    initialState,
    reducers: {
        setQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload;
        },
        setSortParam: (state, action: PayloadAction<IQuery["sort"]>) => {
            state.sort = action.payload;
        },
        setOrder: (state, action: PayloadAction<IQuery["order"]>) => {
            state.order = action.payload;
        },
        setPerPage: (state, action: PayloadAction<IQuery["per_page"]>) => {
            state.per_page = action.payload;
        },
        setPage: (state, action: PayloadAction<IQuery["page"]>) => {
            state.page = action.payload;
        },
    },
});

export const { setQuery, setSortParam, setOrder, setPerPage, setPage } = querySlice.actions;

export default querySlice;
