export interface HeaderDataType {
  title: string
  type: 'path' | 'link'
  link: string
}
export const headerData:HeaderDataType[] = [
  {
    "title": "发现音乐",
    "type": "path",
    "link": "/dashboard/recommend"
  },
  {
    "title": "我的音乐",
    "type": "path",
    "link": "/main"
  },
  {
    "title": "关注",
    "type": "path",
    "link": "/focus"
  },
  {
    "title": "商城",
    "type": "link",
    "link": "https://music.163.com/store/product"
  },
  {
    "title": "音乐人",
    "type": "link",
    "link": "https://music.163.com/st/musician"
  },
  {
    "title": "下载客户端",
    "type": "path",
    "link": "/download"
  }
]
