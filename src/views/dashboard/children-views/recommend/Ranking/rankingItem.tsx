import { memo } from "react";
import type { FC, ReactNode } from "react";
import { RankingItemWrap } from "./style.ts";
import { Ranking } from "@/api/dashboardApi/type.ts";
import { formatImg } from "@/utils";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";

interface Props {
  ranking: Ranking;
  children?: ReactNode;
}

const RankingItem: FC<Props> = (props) => {
  const { ranking } = props;
  return (
    <RankingItemWrap>
      <div className="wrap-top">
        <div className="wrap-top-image">
          <img src={formatImg(ranking.coverImgUrl, 80)} alt="" />
          <div className="sprite-cover wrap-top-cover"></div>
        </div>
        <div className="wrap-top-info">
          <div className="wrap-top-info-name">{ranking.name}</div>
          <div className="wrap-top-info-button">
            <div className="sprite-2 wrap-top-info-button__play"></div>
            <div className="sprite-2 wrap-top-info-button__fover"></div>
          </div>
        </div>
      </div>
      <div className="wrap-center">
        {ranking.tracks.slice(0, 10).map((cell, index) => {
          return (
            <div className="wrap-center-cell" key={cell.id}>
              <span className="wrap-center-cell__index">{index + 1}</span>
              <div className="wrap-center-cell__info">
                <a className="info-title" href="#">
                  {cell.name}
                </a>
                <div className="info-icons">
                  <div className="sprite-2 icon icon-play"></div>
                  <div className="sprite-2 icon icon-add"></div>
                  <div className="sprite-2 icon icon-favor"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Link className="wrap-bottom" to={`/dashboard/ranking`}>
        查看全部
        <RightOutlined />
      </Link>
    </RankingItemWrap>
  );
};
RankingItem.defaultProps = {};
export default memo(RankingItem);
