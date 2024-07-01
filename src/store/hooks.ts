import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { ThunkDispatch } from "redux-thunk";
import { ProjectActions } from "./actions";

export const useAppDispatch = useDispatch<
  ThunkDispatch<RootState, void, ProjectActions>
>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
