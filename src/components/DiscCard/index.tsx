import { memo } from "react";
import type { FC, ReactNode } from "react";
import { DiscCardWrap } from "./style.ts";
import { Album } from "@/api/dashboardApi/type.ts";
import { formatImg } from "@/utils";

interface Props {
  album: Album;
  children?: ReactNode;
}

const DiscCard: FC<Props> = (props: Props) => {
  const { album } = props;
  return (
    <DiscCardWrap>
      <div className="disc-wrap-top">
        <img src={formatImg(album.picUrl, 100)} alt="" />
        <a href="#" className="cover sprite-cover"></a>
      </div>
      <div className="disc-wrap-bottom">
        <div className="name">{album.name}</div>
        <div className="artist">{album.artist.name}</div>
      </div>
    </DiscCardWrap>
  );
};
DiscCard.defaultProps = {};
export default memo(DiscCard);
