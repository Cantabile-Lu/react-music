import { memo } from "react";
import type { FC, ReactNode } from "react";
import { SubHeaderWrap } from "@/views/dashboard/SubHeader/style.ts";
import { subHeaderData } from "@/views/dashboard/SubHeader/data.ts";
import { NavLink } from "react-router-dom";

interface Props {
  children?: ReactNode;
}

const SubHeader: FC<Props> = () => {
  return (
    <SubHeaderWrap className={""}>
      <div className="sub-header-container  wrap-width-1">
        {subHeaderData.map((subHeader) => {
          return (
            <div key={subHeader.link} className="sub-header-container-header">
              <NavLink to={subHeader.link}>{subHeader.title}</NavLink>
            </div>
          );
        })}
      </div>
    </SubHeaderWrap>
  );
};
SubHeader.defaultProps = {};
export default memo(SubHeader);
