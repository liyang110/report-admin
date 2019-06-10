<template>
  <div class="left-side">
    <div class="left-side-inner">
      <!--<router-link to="/" class="logo block">-->
        <!--<img src="./images/logo.png">-->
      <!--</router-link>-->
      <el-menu
        class="menu-box"
        theme="dark"
        router
        :default-openeds="['/user','/image','/keyword','/report','/access']"
        :default-active="$route.path"
        >
        <div
          v-for="(item, index) in nav_menu_data"
          :key="index">
          <el-menu-item
            class="menu-list"
            v-if="typeof item.child === 'undefined'"
            :index="item.path">
            <i class="icon fa" :class="item.icon"></i>
            <span v-text="item.title" class="text"></span>
          </el-menu-item>
          <el-submenu
            :index="item.path"
            v-else>
            <template slot="title">
              <i class="icon fa fa" :class="item.icon"></i>
              <span v-text="item.title" class="text"></span>
            </template>
            <el-menu-item
              class="menu-list"
              v-for="(sub_item, sub_index) in item.child"
              :index="sub_item.path"
              :key="sub_index">
              <!--<i class="icon fa" :class="sub_item.icon"></i>-->
              <span v-text="sub_item.title" class="text"></span>
            </el-menu-item>
          </el-submenu>
        </div>
      </el-menu>
    </div>
  </div>
</template>
<script type="text/javascript">
  import store from 'store'
  export default{
    name: 'slide',
    data(){
      let user = store.state.user_info
      if(user != undefined && user.user.name == 'user'){
        return {
          isCollapse: false,
          nav_menu_data: [{
            title: "主页",
            path: "/home",
            icon: "fa-home"
          }, 
          // {
          //   title: "用户",
          //   path: "/user",
          //   icon: "fa-group",
          //   child: [{
          //     title: "渠道",
          //     path: "/user/platform"
          //   }, {
          //     title: "用户终端",
          //     path: "/user/app"
          //   }]
          // }, 
          {
            title: "图库",
            path: "/image",
            icon: "fa-file-image-o",
            child: [{
              title: "原创",
              path: "/image/original"
            }, {
              title: "授权",
              path: "/image/ip"
            }, {
              title: "全网索引",
              path: "/image/global"
            }
            ]
          }, {
            title: "词库",
            path: "/keyword",
            icon: "fa-file-word-o",
            child: [{
              title: "热搜",
              path: "/keyword/hot"
            }, {
              title: "屏蔽",
              path: "/keyword/sensitive"
            }]
          }, {
            title: "数据统计",
            path: "/report",
            icon: "fa-bar-chart-o",
            child: [{
              title: "接入数据",
              path: "/report/base"
            }, {
              title: "图片下载",
              path: "/report/imagegrade"
            }]
          }]
        }
      }else{
        return {
          isCollapse: false,
          nav_menu_data: [{
            title: "主页",
            path: "/home",
            icon: "fa-home"
          }, 
          // {
          //   title: "用户",
          //   path: "/user",
          //   icon: "fa-group",
          //   child: [{
          //     title: "渠道",
          //     path: "/user/platform"
          //   }, {
          //     title: "用户终端",
          //     path: "/user/app"
          //   }]
          // }, 
           {
            title: "接入概况",
            path: "/access",
            icon: "fa-file-image-o",
            child: [{
              title: "接入概况",
              path: "/access/profile"
            }
            ]
          }, 
          {
            title: "图库",
            path: "/image",
            icon: "fa-file-image-o",
            child: [{
              title: "原创",
              path: "/image/original"
            }, {
              title: "授权",
              path: "/image/ip"
            }, {
              title: "全网索引",
              path: "/image/global"
            }
            ]
          }, {
            title: "词库",
            path: "/keyword",
            icon: "fa-file-word-o",
            child: [ {
              title: "全部搜索",
              path: "/keyword/all"
            },{
              title: "热搜",
              path: "/keyword/hot"
            }, {
              title: "屏蔽",
              path: "/keyword/sensitive"
            },{
              title: "停用词",
              path: "/keyword/stop"
            }]
          },  {
            title: "标签库",
            path: "/tag",
            icon: "fa-file-word-o",
            child: [ {
              title: "搜索词",
              path: "/tag/search"
            },{
              title: "nlp关联",
              path: "/tag/nlp"
            },{
              title: "ocr",
              path: "/tag/ocr"
            },{
              title: "其他",
              path: "/tag/other"
            }]
          },{
            title: "数据统计",
            path: "/report",
            icon: "fa-bar-chart-o",
            child: [{
              title: "接入数据",
              path: "/report/base"
            },{
              title: "广告转化（Beta）",
              path: "/report/ad"
            }]
          }]
        }
      }
    }
  }
</script>
