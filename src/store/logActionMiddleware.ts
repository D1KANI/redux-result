import { Middleware } from "redux";
import { RootState } from "./store";

export const logActionMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    console.log("dispatching", action);
    let result = next(action);
    console.log("next state", store.getState());
    return result;
  };
