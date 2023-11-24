import {memo} from "react";
import type {FC, ReactNode} from "react";

interface Props {
  children?: ReactNode;
}

const Footer: FC<Props> = () => {
  return <div>Footer</div>;
};
Footer.defaultProps = {};
export default memo(Footer);
