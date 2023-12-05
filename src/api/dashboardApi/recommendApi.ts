import { server } from "@/utils";
import {
  AlbumResult,
  BannerResult,
  PersonalizedResult,
  RankingResult
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

/**
 * 榜单
 */
export function getPlayListApi(id: number) {
  return server.get<RankingResult>({
    url: "/api/playlist/detail",
    params: { id }
  });
}
