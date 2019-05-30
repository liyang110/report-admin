
import api_fetch from 'common/api_fetch'
import {port_home} from 'common/port_uri'
import qs from 'qs';

//获取图库原创
export function homeData(data) {
  return api_fetch({
    url: port_home.home,
    method: 'post',
    data:qs.stringify(data)
  })
}
