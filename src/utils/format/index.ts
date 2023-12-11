/**
 * 格式化数字
 */
export const formatCount = (count: number): string => {
  if (count > 100000) {
    return Math.ceil(count / 10000) + "万";
  }
  return count + "";
};

/**
 * 图片格式化
 */

export const formatImg = (
  url: string,
  width: number,
  height?: number
): string => {
  return `${url}?param=${width}y${height ?? width}`;
};

/**
 * 获取歌曲地址
 */
export const formatMusicUrl = (id: number) => {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
};

/**
 * @description 格式化时间
 * @param {number} time
 * @return { string }
 */
export const formatTime = (time: number): string => {
  const timer = time / 1000;
  const minutes = String(Math.floor(timer / 60)).padStart(2, "0");
  const seconds = String(Math.floor(timer % 60)).padStart(2, "0");
  return `${minutes}:${seconds}`;
};
