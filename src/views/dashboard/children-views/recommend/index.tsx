import { memo } from "react";
import type { FC, ReactNode } from "react";
import { fetchBannerDataAction } from "@/store/modules/dashboardStore/recommendStore.ts";
import { useAppDispatch } from "@/store";
import Banner from "@/components/Banner";
import { RecommedWrap } from "@/views/dashboard/children-views/recommend/style.ts";

interface Props {
  children?: ReactNode;
}

const Recommend: FC<Props> = () => {
  const dispatch = useAppDispatch();
  dispatch(fetchBannerDataAction());
  return (
    <RecommedWrap>
      <Banner />
      <div className="content wrap-width-2">
        <div className="content-left">1</div>
        <div className="content-right">2</div>
      </div>
    </RecommedWrap>
  );
};
Recommend.defaultProps = {};
export default memo(Recommend);
