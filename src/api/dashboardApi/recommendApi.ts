import { server } from "@/utils";
import { BannerResult, PersonalizedResult } from "@/api/dashboardApi/type.ts";

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
    params: { limit: 10 }
  });
}
