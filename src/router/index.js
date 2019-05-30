import Vue from 'vue'
import VueRouter from 'vue-router'
import store from 'store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

//import components
//view page warp component
import viewPageComponent from 'pages/App'

//home
import homeComponent from 'pages/home'

//404
import noPageComponent from 'pages/error/404'
//login
import loginComponent from 'pages/user/login'
//platform
import platformComponent from 'pages/user/platform'
//app
import appComponent from 'pages/user/app'
//image original
import originalComponent from 'pages/image/original'
//image ip
import ipComponent from 'pages/image/ip'
//image global
import globalComponent from 'pages/image/global'
//keyword hot
import hotComponent from 'pages/keyword/hot'
//keyword sensitive
import sensitiveComponent from 'pages/keyword/sensitive'
//base report
import baseReportComponent from 'pages/report/base'
//base table
import baseTableComponent from 'pages/table/base'
//sort table
import sortTableComponent from 'pages/table/sort'
//save table
import saveTableComponent from 'pages/table/save'

import imageReportComponent from 'pages/report/image'

import imageGradeReportComponent from 'pages/report/imagegrade'

import apiReportComponent from 'pages/report/api'

Vue.use(VueRouter)

//使用AMD方式加载
// component: resolve => require(['pages/home'], resolve),
const routes = [{
  path: '/404',
  name: 'notPage',
  component: noPageComponent
}, {
  path: '*',
  redirect: '/404'
}, {
  path: '/user/login',
  name: 'login',
  component: loginComponent
}, {
  path: '/',
  redirect: '/home',
  component: viewPageComponent,
  children: [{
    path: 'home',
    name: 'home',
    component: homeComponent,
    meta: {
      title: "主页",
      auth: true
    }
  }, {
    path: '/user/platform',
    name: 'platform',
    component: platformComponent,
    meta: {
      title: "渠道",
      auth: true
    }
  }, {
    path: '/user/app',
    name: 'app',
    component: appComponent,
    meta: {
      title: "用户终端-TOP15",
      auth: true
    }
  }, {
    path: '/image/original',
    name: 'original',
    component: originalComponent,
    meta: {
      title: "原创",
      auth: true
    }
  }, {
    path: '/image/ip',
    name: 'ip',
    component: ipComponent,
    meta: {
      title: "授权",
      auth: true
    }
  }, {
    path: '/image/global',
    name: 'global',
    component: globalComponent,
    meta: {
      title: "全网索引",
      auth: true
    }
  }, {
    path: '/keyword/sensitive',
    name: 'sensitive',
    component: sensitiveComponent,
    meta: {
      title: "屏蔽词",
      auth: true
    }
  }, {
    path: '/keyword/hot',
    name: 'hotKeyword',
    component: hotComponent,
    meta: {
      title: "热门词",
      auth: true
    }
  }, {
    path: '/report/base',
    name: 'reportBase',
    component: baseReportComponent,
    meta: {
      title: "接入统计",
      auth: true
    }
  }, {
    path: '/table/base',
    name: 'tableBase',
    component: baseTableComponent,
    meta: {
      title: "基本表格",
      auth: true
    }
  }, {
    path: '/table/sort',
    name: 'tableSort',
    component: sortTableComponent,
    meta: {
      title: "排序表格",
      auth: true
    }
  }, {
    path: '/table/update/:id',
    name: 'tableUpdate',
    component: saveTableComponent,
    meta: {
      title: "数据修改",
      auth: true
    }
  }, {
    path: '/table/add',
    name: 'tableAdd',
    component: saveTableComponent,
    meta: {
      title: "添加数据",
      auth: true
    }
  }, {
    path: '/report/image',
    name: 'reportImage',
    component: imageReportComponent,
    meta: {
      title: "图片下载统计",
      auth: true
    }
  }, {
    path: '/report/api',
    name: 'reportApi',
    component: apiReportComponent,
    meta: {
      title: "关键词统计",
      auth: true
    }
  }, {
    path: '/report/imagegrade',
    name: 'reportImageGrade',
    component: imageGradeReportComponent,
    meta: {
      title: "图片下载统计",
      auth: true
    }
  }]
}]

const router = new VueRouter({
  routes,
  mode: 'hash', //default: hash ,history
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})

//全局路由配置
//路由开始之前的操作
router.beforeEach((to, from, next) => {
  NProgress.done().start()
  let toName = to.name
  // let fromName = from.name
  let is_login = store.state.user_info.login

  if (!is_login && toName !== 'login') {
    next({
      name: 'login'
    })
  } else {
    if (is_login && toName === 'login') {
      next({
        path: '/'
      })
    } else {
      next()
    }
  }
})

//路由完成之后的操作
router.afterEach(route => {
  NProgress.done()
})

export default router
