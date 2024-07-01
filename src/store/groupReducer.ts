import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import {
  LOAD_GROUPS_DATA,
  LOAD_GROUPS_DATA_ERROR,
  LOAD_GROUPS_DATA_SUCCESS,
  ProjectActions,
} from "./actions";

export interface IGroupReducerState {
  data: GroupContactsDto[];
  flags: {
    loading: boolean;
    confirmed: boolean;
  };
}

export function groupReducer(
  state: IGroupReducerState = {
    data: [],
    flags: { loading: false, confirmed: false },
  },
  action: ProjectActions,
): IGroupReducerState {
  switch (action.type) {
    case LOAD_GROUPS_DATA:
      return {
        ...state,
        flags: {
          loading: true,
          confirmed: false,
        },
      };

    case LOAD_GROUPS_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        flags: {
          loading: false,
          confirmed: true,
        },
      };

    case LOAD_GROUPS_DATA_ERROR:
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
