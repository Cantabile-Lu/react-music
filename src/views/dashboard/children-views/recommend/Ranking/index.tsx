import { memo } from "react";
import type { FC, ReactNode } from "react";
import { RankingWrap } from "./style.ts";
import Title from "@/components/Title";
import { appShallowEqual, useAppSelector } from "@/store";
import RankingItem from "@/views/dashboard/children-views/recommend/Ranking/rankingItem.tsx";

interface Props {
  children?: ReactNode;
}

const Ranking: FC<Props> = () => {
  const { rankings } = useAppSelector(
    (state) => ({
      rankings: state.recommend.rankings
    }),
    appShallowEqual
  );
  console.log(`🚀🚀🚀🚀🚀-> in index.tsx on 15`, rankings);
  return (
    <RankingWrap>
      <Title title="榜单" moreLink="/dashboard/ranking" />
      <div className="container">
        {rankings.map((ranking) => {
          return <RankingItem key={ranking.id} ranking={ranking} />;
        })}
      </div>
    </RankingWrap>
  );
};
Ranking.defaultProps = {};
export default memo(Ranking);
