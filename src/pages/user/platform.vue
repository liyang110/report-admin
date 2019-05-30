<template>
  <div class="panel">
    <div class="panel-body">
      <el-tabs v-model="activeName">
        <el-tab-pane label="直接接入" name="access">
          <!--<el-table-->
          <!--:data="table_data"-->
          <!--v-loading="load_data"-->
          <!--element-loading-text="拼命加载中"-->
          <!--fit-->
          <!--style="width: 72%;">-->
          <!--<el-table-column-->
          <!--prop="name"-->
          <!--label="平台"-->
          <!--width="200">-->
          <!--</el-table-column>-->
          <!--<el-table-column-->
          <!--prop="app_count"-->
          <!--label="接入app数"-->
          <!--width="200">-->
          <!--</el-table-column>-->
          <!--<el-table-column-->
          <!--prop="device_count"-->
          <!--label="用户数"-->
          <!--width="200">-->
          <!--</el-table-column>-->
          <!--<el-table-column-->
          <!--prop="createtime"-->
          <!--label="接入时间"-->
          <!--width="200">-->
          <!--<template scope="props">-->
          <!--<span v-text="props.row.createtime == null ? props.row.createtime : date_format(props.row.createtime)"></span>-->
          <!--</template>-->
          <!--</el-table-column>-->
          <el-table
            :data="table_data"
            v-loading="load_data"
            border
            element-loading-text="拼命加载中"
            style="width: 100%;margin: 0 auto;">
            <el-table-column
              prop="writeTime"
              label="时间"
              width="116">
              <template scope="props">
                <span v-text="date_format(props.row.writeTime)"></span>
              </template>
            </el-table-column>
            <el-table-column
              prop="newDeviceCount"
              label="新增接入设备"
              width="100">
            </el-table-column>
            <el-table-column
              prop="deviceCount"
              label="累积设备"
              width="100">
            </el-table-column>
            <el-table-column
              prop="newAppCount"
              label="新增app"
              width="100">
            </el-table-column>
            <el-table-column
              prop="appRegCount"
              label="app接入数"
              width="100">
            </el-table-column>
            <el-table-column
              prop="activeAppCount"
              label="活跃app数"
              width="100">
            </el-table-column>
            <el-table-column
              prop="apiCallCount"
              label="接口调用数"
              width="100">
            </el-table-column>
            <el-table-column
              prop="newActiveDeviceCount"
              label="新增活跃设备数"
              width="100">
            </el-table-column>
            <el-table-column
              prop="activeDeviceCount"
              label="活跃设备数"
              width="100">
            </el-table-column>
            <el-table-column
              prop="packageDownCount"
              label="表情包下载"
              width="100">
            </el-table-column>
            <el-table-column
              prop="emojiSendCount"
              label="表情发送"
              width="100">
            </el-table-column>
            <!--<el-table-column-->
              <!--prop="keyboardOpenCount"-->
              <!--label="键盘打开数"-->
              <!--width="100">-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
              <!--prop="storeOpenCount"-->
              <!--label="商店打开数"-->
              <!--width="100">-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
              <!--prop="emojipageOpenCount"-->
              <!--label="表情落地页打开"-->
              <!--width="100">-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
              <!--prop="userAverStay"-->
              <!--label="平均停留时长"-->
              <!--width="100">-->
            <!--</el-table-column>-->
          </el-table>
          <bottom-tool-bar>
            <div slot="page">
              <el-pagination
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-size="15"
                layout="total, prev, pager, next"
                :total="total">
              </el-pagination>
            </div>
          </bottom-tool-bar>
        </el-tab-pane>
        <el-tab-pane label="平台接入" name="platform">
          <el-table
            :data="platform_table_data"
            v-loading="platform_load_data"
            border
            element-loading-text="拼命加载中"
            style="width: 100%;margin: 0 auto;">
            <el-table-column
              prop="writeTime"
              label="时间"
              width="116">
              <template scope="props">
                <span v-text="date_format(props.row.writeTime)"></span>
              </template>
            </el-table-column>
            <el-table-column
              prop="newDeviceCount"
              label="新增接入设备"
              width="100">
            </el-table-column>
            <el-table-column
              prop="deviceCount"
              label="累积设备"
              width="100">
            </el-table-column>
            <el-table-column
              prop="newAppCount"
              label="新增app"
              width="100">
            </el-table-column>
            <el-table-column
              prop="appRegCount"
              label="app接入数"
              width="100">
            </el-table-column>
            <el-table-column
              prop="activeAppCount"
              label="活跃app数"
              width="100">
            </el-table-column>
            <el-table-column
              prop="apiCallCount"
              label="接口调用数"
              width="100">
            </el-table-column>
            <el-table-column
              prop="newActiveDeviceCount"
              label="新增活跃设备数"
              width="100">
            </el-table-column>
            <el-table-column
              prop="activeDeviceCount"
              label="活跃设备数"
              width="100">
            </el-table-column>
            <el-table-column
              prop="packageDownCount"
              label="表情包下载"
              width="100">
            </el-table-column>
            <el-table-column
              prop="emojiSendCount"
              label="表情发送"
              width="100">
            </el-table-column>
            <!--<el-table-column-->
              <!--prop="keyboardOpenCount"-->
              <!--label="键盘打开数"-->
              <!--width="100">-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
              <!--prop="storeOpenCount"-->
              <!--label="商店打开数"-->
              <!--width="100">-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
              <!--prop="emojipageOpenCount"-->
              <!--label="表情落地页打开"-->
              <!--width="100">-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
              <!--prop="userAverStay"-->
              <!--label="平均停留时长"-->
              <!--width="100">-->
            <!--</el-table-column>-->
          </el-table>
          <bottom-tool-bar>
            <div slot="page">
              <el-pagination
                @current-change="platformHandleCurrentChange"
                :current-page="platformCurrentPage"
                :page-size="15"
                layout="total, prev, pager, next"
                :total="platformTotal">
              </el-pagination>
            </div>
          </bottom-tool-bar>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script type="text/javascript">
  import {panelTitle, bottomToolBar} from 'components'
  import {tools_date, tools_uri} from 'common/tools'

  export default {
    data() {
      return {
        activeName: 'access',
        table_data: null,
        //当前页码
        currentPage: 1,
        //数据总条目
        total: 0,
        //每页显示多少条数据
        length: 15,
        //请求时的loading效果
        load_data: true,
        type: 1,
        platform_table_data: null,
        //当前页码
        platformCurrentPage: 1,
        //数据总条目
        platformTotal: 0,
        //请求时的loading效果
        platform_load_data: true

      }
    },
    components: {
      panelTitle,
      bottomToolBar
    },
    created() {
      this.get_table_data()
      this.get_platform_table_data()
    },
    methods: {
      //获取数据
      get_table_data() {
        this.load_data = true
        this.$fetch.api_report.sdkBase({
          page: this.currentPage,
          size: this.length,
          type: 1
        })
          .then(({data: {result, page, total}}) => {
            this.table_data = result
            this.currentPage = page
            this.total = total
            this.load_data = false
          })
          .catch(() => {
            this.load_data = false
          })
      },
      //获取数据
      get_platform_table_data() {
        this.platform_load_data = true
        this.$fetch.api_report.sdkBase({
          page: this.platformCurrentPage,
          size: this.length,
          type: 2
        })
          .then(({data: {result, page, total}}) => {
            this.platform_table_data = result
            this.platformCurrentPage = page
            this.platformTotal = total
            this.platform_load_data = false
          })
          .catch(() => {
            this.platform_load_data = false
          })
      },
      //页码选择
      handleCurrentChange(val) {
        this.currentPage = val
        this.get_table_data()
      },
      platformHandleCurrentChange(val){
        this.platformCurrentPage = val
        this.get_platform_table_data()
      },
      date_format(date) {
        return tools_date.formatDate(new Date(date), "yyyy-MM-dd")
      }
    }
  }
</script>
