import { ContactDto } from "src/types/dto/ContactDto";
import {
  LOAD_CONTACTS_DATA,
  LOAD_CONTACTS_DATA_ERROR,
  LOAD_CONTACTS_DATA_SUCCESS,
  ProjectActions,
} from "./actions";

export interface IContactsReducerState {
  data: ContactDto[];
  flags: {
    loading: boolean;
    confirmed: boolean;
  };
}

export function contactsReducer(
  state: IContactsReducerState = {
    data: [],
    flags: { loading: false, confirmed: false },
  },
  action: ProjectActions,
): IContactsReducerState {
  switch (action.type) {
    case LOAD_CONTACTS_DATA:
      return {
        ...state,
        flags: {
          loading: true,
          confirmed: false,
        },
      };

    case LOAD_CONTACTS_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        flags: {
          loading: false,
          confirmed: true,
        },
      };

    case LOAD_CONTACTS_DATA_ERROR:
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
