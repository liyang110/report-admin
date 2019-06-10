
import api_fetch from 'common/api_fetch'
import {port_tag} from 'common/port_uri'
import qs from 'qs';

export function search(data) {
  return api_fetch({
    url: port_tag.search,
    method: 'post',
    data:qs.stringify(data)
  })
}