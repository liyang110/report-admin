
import api_fetch from 'common/api_fetch'
import {port_report} from 'common/port_uri'
import qs from 'qs';

//获取sdk base table
export function sdkBase(data) {
  return api_fetch({
    url: port_report.sdkBase,
    method: 'post',
    data:qs.stringify(data)
  })
}

//获取api base table
export function apiBase(data) {
  return api_fetch({
    url: port_report.apiBase,
    method: 'post',
    data:qs.stringify(data)
  })
}

export function apiDaily(data) {
  return api_fetch({
    url: port_report.apiDaily,
    method: 'post',
    data:qs.stringify(data)
  })
}

export function imageDaily(data) {
  return api_fetch({
    url: port_report.imageDaily,
    method: 'post',
    data:qs.stringify(data)
  })
}

export function imageGradeDaily(data) {
  return api_fetch({
    url: port_report.imageUpgradeDaily,
    method: 'post',
    data:qs.stringify(data)
  })
}
