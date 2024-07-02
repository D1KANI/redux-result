import { groupsSlice } from "./slice";

export const groupReducer = groupsSlice.reducer;
export const groupReducerPath = groupsSlice.reducerPath;
export const groupMiddleware = groupsSlice.middleware;

export const { useGetGroupsQuery } = groupsSlice;
