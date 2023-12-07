import { memo } from "react";
import type { FC, ReactNode } from "react";
import { PlayerWrap } from "./style.ts";

interface Props {
  children?: ReactNode;
}

const Player: FC<Props> = () => {
  return <PlayerWrap>Player</PlayerWrap>;
};
Player.defaultProps = {};
export default memo(Player);
