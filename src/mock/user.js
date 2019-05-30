/**
 * Created by zzmhot on 2017/3/21.
 *
 * @author: zzmhot
 * @github: https://github.com/zzmhot
 * @email: zzmhot@163.com
 * @Date: 2017/3/21 10:55
 * @Copyright(©) 2017 by zzmhot.
 *
 */

import Mock from 'mockjs'
import {port_code, port_user} from 'common/port_uri'

Mock.mock(new RegExp(port_user.login), ({body}) => {
  const {username, password} = JSON.parse(body)
  if (username === 'admin' && password === 'dongtu2018@!') {
    return Mock.mock({
      code: port_code.success,
      msg: "登录成功",
      data: {
        'name': 'admin',
        'avatar': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515143478807&di=2ed0fa83553d21cab0a8012890588de6&imgtype=0&src=http%3A%2F%2Fkibey-sys-avatar.b0.upaiyun.com%2F2014%2F12%2F1418273943.png',
        'age|20-25': 20,
        'desc': ''
      }
    })
  } else if(username === 'user' && password === 'dongtu2018'){
    return Mock.mock({
      code: port_code.success,
      msg: "登录成功",
      data: {
        'name': 'user',
        'avatar': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515143478807&di=2ed0fa83553d21cab0a8012890588de6&imgtype=0&src=http%3A%2F%2Fkibey-sys-avatar.b0.upaiyun.com%2F2014%2F12%2F1418273943.png',
        'age|20-25': 20,
        'desc': ''
      }
      })
  }else {
    return Mock.mock({
      code: port_code.error,
      msg: "账号或密码错误"
    })
  }
})

Mock.mock(new RegExp(port_user.logout), {
  code: port_code.success,
  msg: "退出成功"
})
