import { memo } from "react";
import type { FC, ReactNode } from "react";
import { fetchBannerDataAction } from "@/store/modules/dashboardStore/recommendStore.ts";
import { useAppDispatch } from "@/store";
import Banner from "@/components/Banner";

interface Props {
  children?: ReactNode;
}

const Recommend: FC<Props> = () => {
  const dispatch = useAppDispatch();
  dispatch(fetchBannerDataAction());
  return (
    <div>
      <Banner />
    </div>
  );
};
Recommend.defaultProps = {};
export default memo(Recommend);
