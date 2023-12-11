import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import recommendStore from "./modules/dashboardStore/recommendStore.ts";
import playerStore from "./modules/playerStore/player.ts";
const store = configureStore({
  reducer: {
    recommend: recommendStore,
    player: playerStore
  }
});
// 重写Selector
type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// 重写dispatch
type RootDispatch = typeof store.dispatch;
export const useAppDispatch: () => RootDispatch = useDispatch;

export const appShallowEqual = shallowEqual;
export default store;
