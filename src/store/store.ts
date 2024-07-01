import { applyMiddleware, combineReducers, createStore } from "redux";
import { contactsReducer } from "./contactsReducer";
import { favoritesReducer } from "./favoritesReducer";
import { groupReducer } from "./groupReducer";
import { thunk } from "redux-thunk";
import { logActionMiddleware } from "./logActionMiddleware";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  favorites: favoritesReducer,
  group: groupReducer,
});

const composeEnhancers = composeWithDevTools(
  applyMiddleware(thunk, logActionMiddleware),
);

export const store = createStore(rootReducer, {}, composeEnhancers);

export type RootState = ReturnType<typeof rootReducer>;
