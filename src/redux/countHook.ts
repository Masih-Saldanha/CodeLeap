import { TypedUseSelectorHook, useSelector } from "react-redux";

import { RootState } from "./countStore.ts";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;