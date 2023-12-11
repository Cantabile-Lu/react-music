import { useState } from "react";

/**
 * usePlay 播放歌曲逻辑
 *
 */
const usePlay = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  // 上一曲
  // 下一曲
  //  播放
  function play() {}
  // 暂停
  //
  return {
    isPlaying,
    setIsPlaying
  };
};

export default usePlay;
