
import api_fetch from 'common/api_fetch'
import {port_access} from 'common/port_uri'
import qs from 'qs';

//获取图库原创
export function profile(data) {
  return api_fetch({
    url: port_access.profile,
    method: 'post',
    data:qs.stringify(data)
  })
}