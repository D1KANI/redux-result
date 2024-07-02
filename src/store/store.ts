import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { logActionMiddleware } from "./logActionMiddleware";
import { contactMiddleware, contactReducer, contactReducerPath } from "./contacts";
import { groupMiddleware, groupReducer, groupReducerPath } from "./groups";

const rootReducer = combineReducers({
  [contactReducerPath]: contactReducer,
  [groupReducerPath]: groupReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat([logActionMiddleware, contactMiddleware, groupMiddleware]);
  },
});

export type RootState = ReturnType<typeof rootReducer>;
