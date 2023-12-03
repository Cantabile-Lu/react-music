import styled from "styled-components";
import download from "@/assets/image/download.png";
import rightBtn from "@/assets/image/banner-control-right.png";
import leftBtn from "@/assets/image/banner-control-left.png";

export const BannerWrap = styled.div`
  overflow: hidden;
  .banner {
    height: 270px;
    display: flex;
    position: relative;
  }
`;

export const BannerContainerLeft = styled.div`
  width: 730px;
  position: relative;
  .container-left-banner {
    &-img {
      width: 100%;
      height: 100%;
    }
  }
`;
export const BannerContent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 63px;
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .prev {
    left: -68px;
    background-position: 0 - 360px;
    background-image: url(${leftBtn});
  }
  .next {
    right: -68px;
    background-position: 0 - 508px;
    background-image: url(${rightBtn});
  }
`;

export const BannerContainerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  width: 254px;
  height: 270px;
  background: url(${download});
`;
