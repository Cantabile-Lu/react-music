import { memo, useEffect, useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import {
  ActionWrap,
  PlayerToolsWrap,
  ProgressWrap,
  ToolsWrap
} from "./style.ts";
import { NavLink } from "react-router-dom";

interface Props {
  children?: ReactNode;
}
import progressBg from "@/assets/image/progress_bar.png";
import { appShallowEqual, useAppSelector } from "@/store";
import { formatMusicUrl, formatTime } from "@/utils";
import { Slider } from "antd";
const PlayerTools: FC<Props> = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { song } = useAppSelector(
    (state) => ({
      song: state.player.song
    }),
    appShallowEqual
  );
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [sliding, setSliding] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    audioRef.current!.src = formatMusicUrl(song.id);
    setDuration(song.dt);
  }, [song]);
  /**
   * 进度条
   */
  const onTimeUpdate = () => {
    // 获取时间
    const currentTime = audioRef.current!.currentTime * 1000;
    // 计算进度条
    if (!sliding) {
      const progress = (currentTime / duration) * 100;
      setCurrentTime(currentTime);
      setProgress(progress);
    }
  };
  const play = () => {
    setIsPlaying((state) => {
      state
        ? audioRef.current!.pause()
        : audioRef.current!.play().catch(() => {
            setIsPlaying(false);
          });
      return !state;
    });
  };
  const onChangeComplete = (time: number) => {
    const currentTime = (time / 100) * duration;
    audioRef.current!.currentTime = currentTime / 1000;
    setCurrentTime(currentTime);
    setProgress(time);
    setSliding(false);
  };
  const onSlideChange = (time: number) => {
    setSliding(true);
    const currentTime = (time / 100) * duration;
    setCurrentTime(currentTime);
    setProgress(time);
  };
  return (
    <PlayerToolsWrap className="sprite-playbar">
      <div className="container wrap-width-2">
        <ActionWrap $isPlaying={isPlaying}>
          <div className="icon sprite-playbar action-prev"></div>
          <div className="icon sprite-playbar action-play" onClick={play}></div>
          <div className="icon sprite-playbar action-next"></div>
        </ActionWrap>
        <ProgressWrap>
          <NavLink to="/dashboard/recommend">
            <img className="image" src={song?.al?.picUrl} alt="" />
          </NavLink>
          <div className="container">
            <div className="container-song">
              <span className="container-song-name">{song?.name}</span>
              <span className="container-song-singer">
                {song?.ar?.[0]?.name}
              </span>
            </div>
            <div className="container-progress">
              <Slider
                value={progress}
                step={0.2}
                tooltip={{ open: false }}
                onChangeComplete={onChangeComplete}
                onChange={onSlideChange}
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
                <span className="container-time-start-time">
                  {formatTime(currentTime)}
                </span>
                <span className="container-time-divider">/</span>
                <span className="container-time-end-time">
                  {formatTime(duration)}
                </span>
              </div>
            </div>
          </div>
        </ProgressWrap>
        <ToolsWrap>3</ToolsWrap>
      </div>

      <audio ref={audioRef} onTimeUpdate={onTimeUpdate}></audio>
    </PlayerToolsWrap>
  );
};
PlayerTools.defaultProps = {};
export default memo(PlayerTools);
