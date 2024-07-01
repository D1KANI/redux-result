import { ThunkAction } from "redux-thunk";
import { ContactDto } from "src/types/dto/ContactDto";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { RootState } from "./store";
import { dataService } from "src/services/dataService";

export const LOAD_CONTACTS_DATA = "LOAD_CONTACTS_DATA";
export const LOAD_CONTACTS_DATA_SUCCESS = "LOAD_CONTACTS_DATA_SUCCESS";
export const LOAD_CONTACTS_DATA_ERROR = "LOAD_CONTACTS_DATA_ERROR";

export const LOAD_FAVORITES_DATA = "LOAD_FAVORITES_DATA";
export const LOAD_FAVORITES_DATA_SUCCESS = "LOAD_FAVORITES_DATA_SUCCESS";
export const LOAD_FAVORITES_DATA_ERROR = "LOAD_FAVORITES_DATA_ERROR";

export const LOAD_GROUPS_DATA = "LOAD_GROUPS_DATA";
export const LOAD_GROUPS_DATA_SUCCESS = "LOAD_GROUPS_DATA_SUCCESS";
export const LOAD_GROUPS_DATA_ERROR = "LOAD_GROUPS_DATA_ERROR";

interface CreateLoadContactsAction {
  type: typeof LOAD_CONTACTS_DATA;
}

interface CreateLoadContactsSuccessAction {
  type: typeof LOAD_CONTACTS_DATA_SUCCESS;
  data: ContactDto[];
}

interface CreateLoadContactsErrorAction {
  type: typeof LOAD_CONTACTS_DATA_ERROR;
}

// ------------------------------

interface CreateLoadFavoritesAction {
  type: typeof LOAD_FAVORITES_DATA;
}

interface CreateLoadFavoritesSuccessAction {
  type: typeof LOAD_FAVORITES_DATA_SUCCESS;
  data: ContactDto["id"][];
}

interface CreateLoadFavoritesErrorAction {
  type: typeof LOAD_FAVORITES_DATA_ERROR;
}

// ------------------------------

interface CreateLoadGroupsAction {
  type: typeof LOAD_GROUPS_DATA;
}

interface CreateLoadGroupsSuccessAction {
  type: typeof LOAD_GROUPS_DATA_SUCCESS;
  data: GroupContactsDto[];
}

interface CreateLoadGroupsErrorAction {
  type: typeof LOAD_GROUPS_DATA_ERROR;
}

// ------------------------------

export function loadContactsDataActionCreator(): CreateLoadContactsAction {
  return { type: LOAD_CONTACTS_DATA };
}

export function loadContactsDataSuccessActionCreator(
  data: ContactDto[],
): CreateLoadContactsSuccessAction {
  return { type: LOAD_CONTACTS_DATA_SUCCESS, data };
}

export function loadContactsDataErrorActionCreator(): CreateLoadContactsErrorAction {
  return { type: LOAD_CONTACTS_DATA_ERROR };
}

// ------------------------------

export function loadFavoritesDataActionCreator(): CreateLoadFavoritesAction {
  return { type: LOAD_FAVORITES_DATA };
}

export function loadFavoritesDataSuccessActionCreator(
  data: ContactDto["id"][],
): CreateLoadFavoritesSuccessAction {
  return { type: LOAD_FAVORITES_DATA_SUCCESS, data };
}

export function loadFavoritesDataErrorActionCreator(): CreateLoadFavoritesErrorAction {
  return { type: LOAD_FAVORITES_DATA_ERROR };
}

// ------------------------------

export function loadGroupsDataActionCreator(): CreateLoadGroupsAction {
  return { type: LOAD_GROUPS_DATA };
}

export function loadGroupsDataSuccessActionCreator(
  data: GroupContactsDto[],
): CreateLoadGroupsSuccessAction {
  return { type: LOAD_GROUPS_DATA_SUCCESS, data };
}

export function loadGroupsDataErrorActionCreator(): CreateLoadGroupsErrorAction {
  return { type: LOAD_GROUPS_DATA_ERROR };
}

export function loadContactsDataAction(): ThunkAction<
  void,
  RootState,
  void,
  ProjectActions
> {
  return async (dispatch) => {
    dispatch({ type: LOAD_CONTACTS_DATA });

    const data = dataService.getContactsData();

    if (data) {
      dispatch({ type: LOAD_CONTACTS_DATA_SUCCESS, data });
    } else {
      dispatch({ type: LOAD_CONTACTS_DATA_ERROR });
    }
  };
}

export function loadFavoritesDataAction(): ThunkAction<
  void,
  RootState,
  void,
  ProjectActions
> {
  return async (dispatch) => {
    dispatch({ type: LOAD_FAVORITES_DATA });

    const data = dataService.getFavoritesData();

    if (data) {
      dispatch({ type: LOAD_FAVORITES_DATA_SUCCESS, data });
    } else {
      dispatch({ type: LOAD_FAVORITES_DATA_ERROR });
    }
  };
}

export function loadGroupDataAction(): ThunkAction<
  void,
  RootState,
  void,
  ProjectActions
> {
  return async (dispatch) => {
    dispatch({ type: LOAD_GROUPS_DATA });

    const data = dataService.getGroupData();

    if (data) {
      dispatch({ type: LOAD_GROUPS_DATA_SUCCESS, data });
    } else {
      dispatch({ type: LOAD_GROUPS_DATA_ERROR });
    }
  };
}

// ------------------------------

export type ProjectActions =
  | CreateLoadContactsAction
  | CreateLoadFavoritesAction
  | CreateLoadGroupsAction
  | CreateLoadContactsSuccessAction
  | CreateLoadContactsErrorAction
  | CreateLoadFavoritesSuccessAction
  | CreateLoadFavoritesErrorAction
  | CreateLoadGroupsSuccessAction
  | CreateLoadGroupsErrorAction;
