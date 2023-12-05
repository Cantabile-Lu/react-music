import { memo } from "react";
import type { FC, ReactNode } from "react";
import { RankingWrap } from "./style.ts";
import Title from "@/components/Title";
import { appShallowEqual, useAppSelector } from "@/store";

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
          return (
            <div key={ranking.id}>
              {ranking.name}
              {ranking.createTime}
            </div>
          );
        })}
      </div>
    </RankingWrap>
  );
};
Ranking.defaultProps = {};
export default memo(Ranking);
