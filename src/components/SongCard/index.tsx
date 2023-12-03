import { memo } from "react";
import type { FC, ReactNode } from "react";
import { SongCardWrap } from "@/components/SongCard/style.ts";
import { Personalized } from "@/api/dashboardApi/type.ts";

interface Props {
  data: Personalized;
  children?: ReactNode;
}

const SongCard: FC<Props> = (props) => {
  const { data } = props;
  return (
    <SongCardWrap>
      <div className="wrap-top ">
        <img className="wrap-top-image" src={data.picUrl} alt={data.name} />
        <div className="wrap-top-cover sprite-cover">
          <div className="wrap-top-cover-info sprite-cover">
            <span>
              <i className="wrap-top-cover-info-icon sprite-icon"></i>
              <span className="wrap-top-cover-info-count">
                {data.playCount}
              </span>
            </span>
            <div className="wrap-top-cover-info-play sprite-icon"></div>
          </div>
        </div>
      </div>
      <div className="wrap-bottom">{data.name}</div>
    </SongCardWrap>
  );
};
SongCard.defaultProps = {};
export default memo(SongCard);
