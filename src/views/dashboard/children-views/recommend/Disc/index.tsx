import { ElementRef, memo, useRef } from "react";
import type { FC, ReactNode } from "react";
import Title from "@/components/Title";

import { DiscWrap } from "./style.ts";
import { Carousel } from "antd";

interface Props {
  children?: ReactNode;
}

const Disc: FC<Props> = () => {
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);
  const handler = (isRight: boolean) => {
    if (isRight) {
      bannerRef.current?.prev();
    } else {
      bannerRef.current?.next();
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
          <Carousel ref={bannerRef}>
            {[1, 2].map((item) => (
              <span>{item}</span>
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
