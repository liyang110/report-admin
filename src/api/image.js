
import api_fetch from 'common/api_fetch'
import {port_image} from 'common/port_uri'
import qs from 'qs';

//获取图库原创
export function original(data) {
  return api_fetch({
    url: port_image.original,
    method: 'post',
    data:qs.stringify(data)
  })
}

//获取授权表情
export function ip(data) {
  return api_fetch({
    url: port_image.ip,
    method: 'post',
    data:qs.stringify(data)
  })
}

//获取全网索引
export function global(data) {
  return api_fetch({
    url: port_image.global,
    method: 'post',
    data:qs.stringify(data)
  })
}
