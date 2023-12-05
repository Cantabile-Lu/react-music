import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAlbumApi,
  getBannersApi,
  getPersonalizedApi
} from "@/api/dashboardApi/recommendApi.ts";
import { Album, Banners, Personalized } from "@/api/dashboardApi/type.ts";

interface InitialStateType {
  banners: Banners[];
  personalized: Personalized[];
  albums: Album[];
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
export const fetchAlbum = createAsyncThunk("album", async (_, { dispatch }) => {
  try {
    const result = await getAlbumApi();
    dispatch(changeAlbumAction(result.albums));
  } catch (e) {}
});
const initialState: InitialStateType = {
  banners: [],
  personalized: [],
  albums: []
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
    },
    changeAlbumAction(state, { payload }) {
      state.albums = payload;
    }
  }
  // extraReducers: (builder) => {
  //   builder.addCase(fetchBannerDataAction.fulfilled, (state, action) => {
  //     // 当fetchBannerDataAction的promise的状态为请求完成
  //     state.banners = action.payload;
  //   });
  // }
});
export const {
  changeBannersAction,
  changePersonalizedAction,
  changeAlbumAction
} = recommendStore.actions;
export default recommendStore.reducer;
