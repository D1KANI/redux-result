import { combineReducers, createStore } from "redux";
import { contactsReducer } from "./contactsReducer";
import { favoritesReducer } from "./favoritesReducer";
import { groupReducer } from "./groupReducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  favorites: favoritesReducer,
  group: groupReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
