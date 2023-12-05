import { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";
import {
  fetchAlbum,
  fetchBannerDataAction,
  fetchPersonalizedAction,
  fetchPlayList
} from "@/store/modules/dashboardStore/recommendStore.ts";
import { useAppDispatch } from "@/store";
import Banner from "@/components/Banner";
import { RecommedWrap } from "@/views/dashboard/children-views/recommend/style.ts";
import Hot from "./Hot";
import Disc from "./Disc";
import Ranking from "./Ranking";

interface Props {
  children?: ReactNode;
}

const Recommend: FC<Props> = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    // 轮播图
    dispatch(fetchBannerDataAction());
    //  个性化推荐
    dispatch(fetchPersonalizedAction());
    // 新碟上架
    dispatch(fetchAlbum());
    // 榜单
    dispatch(fetchPlayList());
  }, []);
  return (
    <RecommedWrap>
      <Banner />
      <div className="content wrap-width-2">
        <div className="content-left">
          <Hot />
          <Disc />
          <Ranking />
        </div>
        <div className="content-right">2</div>
      </div>
    </RecommedWrap>
  );
};
Recommend.defaultProps = {};
export default memo(Recommend);
