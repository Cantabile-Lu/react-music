import { server } from "@/utils";
import { PlayerResult } from "@/api/playerApi/type.ts";

export function getSongApi(ids: number) {
  return server.get<PlayerResult>({
    url: "/api/song/detail",
    params: {
      ids
    }
  });
}
