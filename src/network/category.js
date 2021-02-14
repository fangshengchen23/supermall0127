import { request, requestCate } from './request'

export function fetchCates() {
  return requestCate({
    url: 'shop/goods/category/all'
  })
}

export function fetchCateItems(categoryId) {
  return requestCate({
    url: 'shop/goods/list',
    method: 'post',
    data: {
      categoryId
    }
  })
}

export function getRecommend() {
  return request({
    url: '/home/data?type=sell&page=4'
  })
}