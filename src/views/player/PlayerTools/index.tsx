import { memo } from "react";
import type { FC, ReactNode } from "react";
import {
  ActionWrap,
  PlayerToolsWrap,
  ProgressWrap,
  ToolsWrap
} from "./style.ts";
import { NavLink } from "react-router-dom";
import { Slider } from "antd";

interface Props {
  children?: ReactNode;
}
import progressBg from "@/assets/image/progress_bar.png";
import spriteIcon from "@/assets/image/sprite_icon.png";
const PlayerTools: FC<Props> = () => {
  return (
    <PlayerToolsWrap className="sprite-playbar">
      <div className="player-tools-container wrap-width-2">
        <ActionWrap>
          <div className="icon sprite-playbar action-prev"></div>
          <div className="icon sprite-playbar action-play"></div>
          <div className="icon sprite-playbar action-next"></div>
        </ActionWrap>
        <ProgressWrap>
          <NavLink to="/dashboard/recommend">
            <img
              className="image"
              src="https://p2.music.126.net/Rh_4cnkP3L1f0xUGK7Cxnw==/109951163676617251.jpg?param=34y34"
              alt=""
            />
          </NavLink>
          <div className="container">
            <div className="container-song">
              <span className="container-song-name">1</span>
              <span className="container-song-singer">1</span>
            </div>
            <div className="container-progress">
              <Slider
                defaultValue={30}
                styles={{
                  track: {
                    height: "9px",
                    background: `url(${progressBg}) left -66px`
                  },
                  tracks: {},
                  rail: {
                    height: "9px",
                    background: `url(${progressBg}) right 0`
                  }
                }}
              ></Slider>
              <div className="container-time">
                <span className="container-time-start-time">00:00</span>
                <span className="container-time-divider">/</span>
                <span className="container-time-end-time">00:00</span>
              </div>
            </div>
          </div>
        </ProgressWrap>
        <ToolsWrap>3</ToolsWrap>
      </div>
    </PlayerToolsWrap>
  );
};
PlayerTools.defaultProps = {};
export default memo(PlayerTools);
