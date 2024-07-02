import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { ThunkDispatch } from "redux-thunk";
import { UnknownAction } from "redux";

export const useAppDispatch = useDispatch<ThunkDispatch<RootState, void, UnknownAction>>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
