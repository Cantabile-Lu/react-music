import { server } from "@/utils";
import {
  AlbumResult,
  BannerResult,
  PersonalizedResult
} from "@/api/dashboardApi/type.ts";

/**
 * 获取轮播图
 */
export function getBannersApi() {
  return server.request<BannerResult>({
    url: "/api/banner"
  });
}

/**
 * 推荐歌单
 */
export function getPersonalizedApi() {
  return server.get<PersonalizedResult>({
    url: "/api/personalized",
    params: { limit: 8 }
  });
}

/**
 * 新碟上架
 */

export function getAlbumApi() {
  return server.get<AlbumResult>({
    url: "/api/album/newest",
    params: { limit: 10 }
  });
}
