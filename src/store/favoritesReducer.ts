import { DATA_CONTACT } from "src/__data__";

export function favoritesReducer(
  state = [
    DATA_CONTACT[0].id,
    DATA_CONTACT[1].id,
    DATA_CONTACT[2].id,
    DATA_CONTACT[3].id,
  ],
) {
  return state;
}
