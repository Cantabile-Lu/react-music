export interface Banners {
  imageUrl: string;
  targetId: number;
  adid: any;
  targetType: number;
  titleColor: string;
  typeTitle: string;
  url?: string;
  exclusive: boolean;
  monitorImpress: any;
  monitorClick: any;
  monitorType: any;
  monitorImpressList: any;
  monitorClickList: any;
  monitorBlackList: any;
  extMonitor: any;
  extMonitorInfo: any;
  adSource: any;
  adLocation: any;
  adDispatchJson: any;
  encodeId: string;
  program: any;
  event: any;
  video: any;
  song: any;
  scm: string;
  bannerBizType: string;
}
export interface BannerResult {
  code: number;
  banners: Banners[];
}

export interface PersonalizedResult {
  hasTaste: boolean;
  code: number;
  category: number;
  result: Personalized[];
}

export interface Personalized {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: number;
  playCount: number;
  trackCount: number;
  highQuality: boolean;
  alg: string;
}