import fetch from 'common/fetch'
import api_fetch from 'common/api_fetch'
import {port_user} from 'common/port_uri'
import qs from 'qs';

//登录
export function login(data) {
  return fetch({
    url: port_user.login,
    method: 'post',
    data
  })
}
//登出
export function logout() {
  return fetch({
    url: port_user.logout,
    method: 'post'
  })
}

//获取渠道table
export function platformTable(data) {
  return api_fetch({
    url: port_user.platform,
    method: 'post',
    data:qs.stringify(data)
  })
}

//获取用户app的table
export function appTable(data) {
  return api_fetch({
    url: port_user.app,
    method: 'post',
    data:qs.stringify(data)
  })
}
