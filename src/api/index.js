//导入模块
import * as api_file from './file'
import * as api_table from './table'
import * as api_user from './user'
import * as api_image from './image'
import * as api_keyword from './keyword'
import * as api_report from './report'
import * as api_home from './home'
import * as api_access from './access'
import * as api_ad from './ad'
import * as api_tag from './tag'

const apiObj = {
  api_file,
  api_table,
  api_user,
  api_image,
  api_keyword,
  api_report,
  api_home,
  api_access,
  api_ad,
  api_tag
}

const install = function (Vue) {
  if (install.installed) return
  install.installed = true

  //定义属性到Vue原型中
  Object.defineProperties(Vue.prototype, {
    $fetch: {
      get() {
        return apiObj
      }
    }
  })
}

export default {
  install
}
