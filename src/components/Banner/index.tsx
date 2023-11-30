import { memo, useRef, useState } from "react";
import type { FC, ReactNode, ElementRef } from "react";

import { Carousel } from "antd";
import {
  BannerContainerLeft,
  BannerContainerRight,
  BannerContent,
  BannerWrap
} from "@/components/Banner/style.ts";
import { appShallowEqual, useAppSelector } from "@/store";

interface Props {
  children?: ReactNode;
}

const Banner: FC<Props> = () => {
  /**
   * todo: https://lokeshdhakar.com/projects/color-thief/#getting-started
   * 可以通过colorThief动态生成背景颜色
   * 背景增加渐变动画
   */
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null);
  const [bannerIndex, setBannerIndex] = useState(0);
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    appShallowEqual
  );

  function imgHandler(isPrev: boolean) {
    if (isPrev) {
      carouselRef.current?.prev();
    } else {
      carouselRef.current?.next();
    }
  }
  function afterChange(current: number) {
    setBannerIndex(current);
  }

  const getBackgroundImage = () => {
    const url = banners[bannerIndex]?.imageUrl;
    if (url) return `${url}?imageView&blur=40x20&`;
  };

  return (
    <BannerWrap
      style={{
        background: `url(${getBackgroundImage()}) center center / 6000px`
      }}
    >
      <div className="banner wrap-width-2">
        <BannerContainerLeft>
          <Carousel
            autoplay
            autoplaySpeed={3000}
            afterChange={afterChange}
            fade
            ref={carouselRef}
          >
            {banners.map((banner) => (
              <div className="container-left-banner" key={banner.adid}>
                <img
                  className="container-left-banner-img"
                  alt={"1"}
                  src={banner.imageUrl}
                ></img>
              </div>
            ))}
          </Carousel>
        </BannerContainerLeft>
        <BannerContainerRight>2</BannerContainerRight>
        <BannerContent>
          <div className="btn prev" onClick={() => imgHandler(true)}></div>
          <div className="btn next" onClick={() => imgHandler(false)}></div>
        </BannerContent>
      </div>
    </BannerWrap>
  );
};
Banner.defaultProps = {};
export default memo(Banner);
