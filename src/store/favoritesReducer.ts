import { ContactDto } from "src/types/dto/ContactDto";
import {
  LOAD_FAVORITES_DATA,
  LOAD_FAVORITES_DATA_ERROR,
  LOAD_FAVORITES_DATA_SUCCESS,
  ProjectActions,
} from "./actions";

export interface IFavoritesReducerState {
  data: ContactDto["id"][];
  flags: {
    loading: boolean;
    confirmed: boolean;
  };
}

export function favoritesReducer(
  state: IFavoritesReducerState = {
    data: [],
    flags: { loading: false, confirmed: false },
  },
  action: ProjectActions,
): IFavoritesReducerState {
  switch (action.type) {
    case LOAD_FAVORITES_DATA:
      return {
        ...state,
        flags: {
          loading: true,
          confirmed: false,
        },
      };

    case LOAD_FAVORITES_DATA_SUCCESS:
      console.log("store", action.data);
      return {
        ...state,
        data: action.data,
        flags: {
          loading: false,
          confirmed: true,
        },
      };

    case LOAD_FAVORITES_DATA_ERROR:
      return {
        ...state,
        flags: {
          loading: false,
          confirmed: false,
        },
      };

    default:
      break;
  }

  return state;
}
