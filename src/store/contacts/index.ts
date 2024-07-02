import { contactsSlice } from "./slice";

export const contactReducer = contactsSlice.reducer;
export const contactReducerPath = contactsSlice.reducerPath;
export const contactMiddleware = contactsSlice.middleware;

export const { useGetContactsQuery } = contactsSlice;
