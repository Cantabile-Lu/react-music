import { memo } from "react";
import type { FC, ReactNode } from "react";
import { TitleWrap } from "./style.ts";
import { Link } from "react-router-dom";

interface Props {
  title?: string;
  keywords?: string[];
  moreText?: string;
  moreLink?: string;
  children?: ReactNode;
}

const Title: FC<Props> = (props) => {
  const {
    title = "默认标题",
    keywords = [],
    moreText = "更多",
    moreLink = "/"
  } = props;
  return (
    <TitleWrap className="sprite-2">
      <div className="wrap-left">
        <a className="wrap-left-title">{title}</a>
        <div className="wrap-left-keywords">
          {keywords.map((item, index) => (
            <div className="keyword" key={index}>
              <span className="keyword-text">{item}</span>
              <span className="keyword-divider">|</span>
            </div>
          ))}
        </div>
      </div>
      <div className="wrap-right">
        <Link to={moreLink}>{moreText}</Link>
        <i className="sprite-2 icon"></i>
      </div>
    </TitleWrap>
  );
};
Title.defaultProps = {};
export default memo(Title);
