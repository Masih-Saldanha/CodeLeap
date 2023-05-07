import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./countStore";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;