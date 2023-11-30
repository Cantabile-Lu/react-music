import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBannersApi } from "@/api/dashboardApi/recommendApi.ts";

interface Banners {
  imageUrl: string;
  targetId: number;
  adid: any;
  targetType: number;
  titleColor: string;
  typeTitle: string;
  url?: string;
  exclusive: boolean;
  monitorImpress: any;
  monitorClick: any;
  monitorType: any;
  monitorImpressList: any;
  monitorClickList: any;
  monitorBlackList: any;
  extMonitor: any;
  extMonitorInfo: any;
  adSource: any;
  adLocation: any;
  adDispatchJson: any;
  encodeId: string;
  program: any;
  event: any;
  video: any;
  song: any;
  scm: string;
  bannerBizType: string;
}
interface InitialStateType {
  banners: Banners[];
}

interface Result {
  code: number;
  banners: Banners[];
}

/**
 * @description 发送异步请求
 */
export const fetchBannerDataAction = createAsyncThunk(
  "banners",
  async (_, { dispatch }) => {
    try {
      const result = await getBannersApi<Result>();
      dispatch(changeBannersAction(result.banners));
    } catch (e) {
      console.log(`🚀🚀🚀🚀🚀-> in recommendStore.ts on 51`, e);
    }
  }
);
const initialState: InitialStateType = {
  banners: []
};
const recommendStore = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload;
    }
  }
  // extraReducers: (builder) => {
  //   builder.addCase(fetchBannerDataAction.fulfilled, (state, action) => {
  //     // 当fetchBannerDataAction的promise的状态为请求完成
  //     state.banners = action.payload;
  //   });
  // }
});
export const { changeBannersAction } = recommendStore.actions;
export default recommendStore.reducer;
