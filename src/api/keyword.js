
import api_fetch from 'common/api_fetch'
import {port_keyword} from 'common/port_uri'
import qs from 'qs';

//获取图库原创
export function hot(data) {
  return api_fetch({
    url: port_keyword.hot,
    method: 'post',
    data:qs.stringify(data)
  })
}

//获取授权表情
export function sensitive(data) {
  return api_fetch({
    url: port_keyword.sensitive,
    method: 'post',
    data:qs.stringify(data)
  })
}
