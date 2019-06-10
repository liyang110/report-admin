
import api_fetch from 'common/api_fetch'
import {port_ad} from 'common/port_uri'
import qs from 'qs';

//获取图库原创
export function sdk(data) {
  return api_fetch({
    url: port_ad.sdk,
    method: 'post',
    data:qs.stringify(data)
  })
}