import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getBannersApi,
  getPersonalizedApi
} from "@/api/dashboardApi/recommendApi.ts";
import { Banners, Personalized } from "@/api/dashboardApi/type.ts";

interface InitialStateType {
  banners: Banners[];
  personalized: Personalized[];
}

/**
 * @description 发送异步请求
 */
export const fetchBannerDataAction = createAsyncThunk(
  "banners",
  async (_, { dispatch }) => {
    try {
      const result = await getBannersApi();
      dispatch(changeBannersAction(result.banners));
    } catch (e) {}
  }
);
export const fetchPersonalizedAction = createAsyncThunk(
  "personalized",
  async (_, { dispatch }) => {
    try {
      const result = await getPersonalizedApi();
      dispatch(changePersonalizedAction(result.result));
    } catch (e) {}
  }
);
const initialState: InitialStateType = {
  banners: [],
  personalized: []
};
const recommendStore = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload;
    },
    changePersonalizedAction(state, { payload }) {
      state.personalized = payload;
    }
  }
  // extraReducers: (builder) => {
  //   builder.addCase(fetchBannerDataAction.fulfilled, (state, action) => {
  //     // 当fetchBannerDataAction的promise的状态为请求完成
  //     state.banners = action.payload;
  //   });
  // }
});
export const { changeBannersAction, changePersonalizedAction } =
  recommendStore.actions;
export default recommendStore.reducer;
