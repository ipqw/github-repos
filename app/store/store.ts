import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { repositoryApiSlice } from "./services/repositoryApiSlice";
import querySlice from "./reducers/querySlice";

const rootReducer = combineSlices(repositoryApiSlice, querySlice);

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(repositoryApiSlice.middleware);
        },
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
