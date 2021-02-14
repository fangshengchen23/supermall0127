import { request } from './request'

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    // url: '/recommend'
    url: '/home/data?type=new&page=3'
    // http://152.136.185.210:7878/api/m5/home/data?type=new&page=3
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.desc = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services
    this.realPrice = itemInfo.lowNowPrice;
  }
}

export class Shops {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.shopName = shopInfo.name;
    this.sells = shopInfo.cSells;
    this.goods = shopInfo.cGoods;
    this.score = shopInfo.score
  }
}

export class GoodsParam {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}