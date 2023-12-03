import { memo } from "react";
import type { FC, ReactNode } from "react";
import { HotWrap } from "@/views/dashboard/children-views/recommend/Hot/style.ts";
import Title from "@/components/Title";
import { appShallowEqual, useAppSelector } from "@/store";
import SongCard from "@/components/SongCard";

interface Props {
  children?: ReactNode;
}

const Hot: FC<Props> = () => {
  const { personalized } = useAppSelector(
    (state) => ({
      personalized: state.recommend.personalized
    }),
    appShallowEqual
  );
  return (
    <HotWrap>
      <Title
        title="热门推荐"
        moreLink="/dashboard/songs"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
      />
      <div className="hot-list">
        {personalized.map((item) => {
          return <SongCard key={item.id} data={item}></SongCard>;
        })}
      </div>
    </HotWrap>
  );
};
Hot.defaultProps = {};
export default memo(Hot);
