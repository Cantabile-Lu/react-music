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
