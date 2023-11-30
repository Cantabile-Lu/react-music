import { memo } from "react";
import type { FC, ReactNode } from "react";
import { headerData, HeaderDataType } from "@/components/Header/data.ts";
import { NavLink } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

import {
  HeaderWarp,
  HeaderWarpLeft,
  HeaderWarpRight
} from "@/components/Header/style.ts";
interface Props {
  children?: ReactNode;
}

/**
 * @description 左边logo 以及按钮
 */
function HeaderLeft() {
  function isLink(data: HeaderDataType) {
    return data.type === "path" ? (
      <NavLink to={data.link}>
        {data.title}
        <i className="sprite-1 icon"></i>
      </NavLink>
    ) : (
      <a href={data.link} rel="noreferrer" target="_blank">
        {data.title}
      </a>
    );
  }
  return (
    <HeaderWarpLeft>
      <a href="/" className="logo sprite-1">
        网易云音乐
      </a>
      <div className="title-list">
        {headerData.map((header, index) => {
          return (
            <div key={index} className="title-list-item">
              {isLink(header)}
            </div>
          );
        })}
      </div>
    </HeaderWarpLeft>
  );
}

function HeaderRight() {
  return (
    <HeaderWarpRight>
      <Input
        className="search"
        placeholder="音乐/视频/电台/用户"
        prefix={<SearchOutlined />}
      />

      <div className="center">创作者中心</div>
      <div className="login">登录</div>
    </HeaderWarpRight>
  );
}
const Header: FC<Props> = () => {
  return (
    <HeaderWarp>
      <div className={"content wrap-width-1"}>
        <HeaderLeft />
        <HeaderRight />
      </div>
      <div className="divider"></div>
    </HeaderWarp>
  );
};
Header.defaultProps = {};
export default memo(Header);
