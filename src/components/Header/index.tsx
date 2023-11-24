import {memo} from "react";
import type {FC, ReactNode} from "react";
import {Link} from "react-router-dom";
import { HeaderWarp } from "@/components/Header/style.ts";

interface Props {
  children?: ReactNode;
}

const Header: FC<Props> = () => {
  return (
    <HeaderWarp>
      <div className={"content"}>
      <Link to={"/dashboard"}>发现音乐</Link>
      <Link to={"/main"}>我的音乐</Link>
      <Link to={"/focus"}>关注</Link>
      <Link to={"/download"}>下载客户端</Link>
      <Link to={"/about"}>关于我们</Link>
      </div>
    </HeaderWarp>
    )

};
Header.defaultProps = {};
export default memo(Header);
