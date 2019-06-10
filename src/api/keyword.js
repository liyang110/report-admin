
import api_fetch from 'common/api_fetch'
import {port_keyword} from 'common/port_uri'
import qs from 'qs';


export function hot(data) {
  return api_fetch({
    url: port_keyword.hot,
    method: 'post',
    data:qs.stringify(data)
  })
}


export function sensitive(data) {
  return api_fetch({
    url: port_keyword.sensitive,
    method: 'post',
    data:qs.stringify(data)
  })
}


export function all(data) {
  return api_fetch({
    url: port_keyword.all,
    method: 'post',
    data:qs.stringify(data)
  })
}


export function stop(data) {
  return api_fetch({
    url: port_keyword.stop,
    method: 'post',
    data:qs.stringify(data)
  })
}
