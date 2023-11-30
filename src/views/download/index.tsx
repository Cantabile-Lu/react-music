import { memo, useEffect } from "react";

import type { FC, ReactNode } from "react";
import { useAppDispatch } from "@/store";
import { fetchBannerDataAction } from "@/store/modules/dashboardStore/recommendStore.ts";

interface Props {
  name: string;
  age: number;
  height?: number;
  children?: ReactNode;
}

const Index: FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchBannerDataAction());
  }, []);
  return (
    <div>
      {props.name}
      {props.children}
    </div>
  );
};

Index.defaultProps = {
  height: 1.88,
  age: 18
};
export default memo(Index);
