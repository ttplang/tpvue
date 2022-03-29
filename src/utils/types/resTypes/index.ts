export interface Banner {
  data: {
    banners: [{ imageUrl: string, url: string, typeTitle: string }]
  }
}

export interface HotRemmend {
  data: {
    result: [{name: string, picUrl: string, playCount: number, trackNumberUndateTime: number}]
  }
}

export interface Album {
  data: {
    id: number, name: string,blurPicUrl: string
  }
}
