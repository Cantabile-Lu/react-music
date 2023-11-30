import styled from "styled-components";
import hot from "@/assets/image/sprite_01.png";
export const HeaderWarp = styled.div`
  background: ${(props) => props.theme.color.primary};
  height: 75px;
  font-size: ${(props) => props.theme.size.fontsize};
  color: ${(props) => props.theme.color.titleColor};
  .content {
    display: flex;
    justify-content: space-around;
  }
  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderWarpLeft = styled.div`
  display: flex;
  .logo {
    display: block;
    width: 157px;
    height: 70px;
    background-position: 0 0;
    text-indent: -9999px;
    margin-right: 20px;
  }
  .title-list {
    display: flex;
    line-height: 70px;
    &-item {
      position: relative;
      a {
        display: flex;
        align-items: center;
        color: #cccccc;
        height: 70px;
        padding: 0 19px;
      }
      &:last-of-type {
        ::after {
          position: absolute;
          width: 28px;
          height: 19px;
          content: "";
          background: url(${hot}) -190px 0px;
          top: 20px;
          right: -15px;
        }
      }
    }
    &-item:hover,
    .active {
      color: #fff;
      background: #000;
      text-decoration: none;
    }
    .active {
      .icon {
        position: absolute;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0px;
      }
    }
  }
`;
export const HeaderWarpRight = styled.div`
  display: flex;
  align-items: center;
  color: #787878;
  font-size: 12px;
  .search {
    font-size: 12px;
    width: 158px;
    height: 32px;
    border-radius: 16px;
    color: #9b9b9b;
  }
  .center {
    margin: 0 12px;
    width: 90px;
    height: 32px;
    text-align: center;
    line-height: 32px;
    border-radius: 20px;
    border: 1px solid #4f4f4f;
    color: #ccc;
    cursor: pointer;
    transition: all 0.3s ease-out;
    &:hover {
      color: #fff;
      border-color: #fff;
    }
  }
`;
