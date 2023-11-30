import { server } from "@/utils";

export function getBannersApi<T>() {
  return server.request<T>({
    url: "/api/banner"
  });
}
