import { memo,useEffect } from "react";
import type { FC, ReactNode } from "react";
import {server} from "@/utils";

interface Props {
  children?: ReactNode;
}

const Recommend: FC<Props> = () => {
  useEffect(() => {
    server.get({
      url: '/top/mv'
    }).then(res => {
      console.log(`🚀🚀🚀🚀🚀-> in index.tsx on 14`,res)
    })
  }, []);
  return <div>Reaimmend</div>;
};
Recommend.defaultProps = {};
export default memo(Recommend);
