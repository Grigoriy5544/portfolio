import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "@/app/_store/store";

export const useTypedSelector:TypedUseSelectorHook<RootState> = useSelector