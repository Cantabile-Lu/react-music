import { ElementRef, memo, useRef } from "react";
import type { FC, ReactNode } from "react";
import Title from "@/components/Title";

import { DiscWrap } from "./style.ts";
import { Carousel } from "antd";
import { appShallowEqual, useAppSelector } from "@/store";
import DiscCard from "@/components/DiscCard";

interface Props {
  children?: ReactNode;
}

const Disc: FC<Props> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);
  const { albums } = useAppSelector(
    (state) => ({
      albums: state.recommend.albums
    }),
    appShallowEqual
  );
  // 生成新数组
  const handler = (isRight: boolean) => {
    if (isRight) {
      bannerRef.current?.next();
    } else {
      bannerRef.current?.prev();
    }
  };
  return (
    <DiscWrap>
      <Title title="新碟上架" moreLink="/dashboard/disc" />
      <div className="wrap-container">
        <div
          className="arrow arrow-left sprite-2"
          onClick={() => handler(false)}
        ></div>
        <div className="banner">
          <Carousel ref={bannerRef} dots={false} speed={1500} infinite>
            {[0, 1].map((index) => (
              <div key={index}>
                <div className="album-container">
                  {albums.slice(index * 5, (index + 1) * 5).map((item) => (
                    <DiscCard key={item.id} album={item}></DiscCard>
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div
          className="arrow arrow-right sprite-2"
          onClick={() => handler(true)}
        ></div>
      </div>
    </DiscWrap>
  );
};
Disc.defaultProps = {};
export default memo(Disc);
