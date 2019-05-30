<template>
  <div class="panel">
    <div class="panel-body">
      <template>
        <el-tabs v-model="activeName">
          <el-tab-pane label="SDK统计" name="sdk">
            <el-date-picker
              v-model="dateValue"
              type="daterange"
              :editable="false"
              placeholder="选择日期范围"
              :format="dateFormat"
              @change="get_table_data">
            </el-date-picker>
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
                width="150">
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
          <el-tab-pane label="API统计" name="api">
            <el-date-picker
              v-model="apiDateValue"
              type="daterange"
              :editable="false"
              placeholder="选择日期范围"
              :format="dateFormat"
              @change="get_api_table_data">
            </el-date-picker>
            <el-select v-model="value" placeholder="请选择" @change="select_change">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-table
              :data="api_table_data"
              v-loading="api_load_data"
              border
              element-loading-text="拼命加载中"
              style="width: 50%">
              <el-table-column
                prop="writeDate"
                label="时间"
                width="116">
                <template scope="props">
                  <span v-text="date_format(props.row.writeDate)"></span>
                </template>
              </el-table-column>
              <el-table-column
                prop="requestCount"
                label="接口调用数"
                width="200">
              </el-table-column>
              <el-table-column
                prop="apiVersion"
                label="接口版本"
                width="120">
                <template scope="props">
                  <span>1.3</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="apiStatus"
                label="接口服务"
                width="120">
                <template scope="props">
                  <span class="fa fa-circle" style="color: green"></span>
                </template>
              </el-table-column>
            </el-table>
            <bottom-tool-bar>
              <div slot="page">
                <el-pagination
                  @current-change="apiHandleCurrentChange"
                  :current-page="apiCurrentPage"
                  :page-size="15"
                  layout="total, prev, pager, next"
                  :total="apiTotal">
                </el-pagination>
              </div>
            </bottom-tool-bar>
          </el-tab-pane>
        </el-tabs>
      </template>
    </div>
  </div>
</template>
<script type="text/javascript">
  import {panelTitle, bottomToolBar} from 'components'
  import {tools_date, tools_uri} from 'common/tools'

  export default {
    data() {
      return {
        table_data: null,
        //当前页码
        currentPage: 1,
        //数据总条目
        total: 0,
        //每页显示多少条数据
        length: 15,
        //请求时的loading效果
        load_data: true,
        //tabs默认选择
        activeName: 'sdk',
        dateValue: '',
        dateFormat: 'yyyy/MM/dd',
        tempDateValue: '',
        options: [
          {"value": "null", "label": "总计"},
          {"value": "4f6896797d4045b3b453f554a60d272v", "label": "淘宝"},
          {"value": "04c25dfdb74d4b9b912862a2bde1d11d", "label": "QQ输入法"},
          {"value": "1247d6b11ae949779e7a0c85f0cef4af", "label": "陌陌"},
          {"value": "1c3f0cc2f7764337996987af6173fbc7", "label": "阿里星球"},
          {"value": "2701a32e83594cc284cf4ee4b61d5ba1", "label": "小恩爱"},
          {"value": "32902b123b0943ae9ffbb257913aaa20", "label": "一周CP"},
          {"value": "4f6896797d4045b3b23sf554a60d272v", "label": "其他"},
          {"value": "50c160047a5d48bb85b3d560977f251e", "label": "百度输入法"},
          {"value": "6e1823826610458894c81eac2df025c3", "label": "粉粉日记"},
          {"value": "b19657b521f34b52bbc94d5f84995f64", "label": "探探"},
          {"value": "c2e0a093dfa544fc980cd388f335b1f2", "label": "支付宝"},
          {"value": "ec176e29e1cc46e6a0847986d95c5979", "label": "QQ空间"}
          ],
        value:"null",
        api_table_data: null,
        //当前页码
        apiCurrentPage: 1,
        //数据总条目
        apiTotal: 0,
        //请求时的loading效果
        api_load_data: true,
        apiTempDateValue: '',
        apiDateValue:''
      }
    },
    components: {
      panelTitle,
      bottomToolBar
    },
    created() {
      this.get_table_data()
      this.get_api_table_data()
    },
    methods: {
      //获取数据
      get_table_data(val) {
        this.tempDateValue = val
        this.load_data = true
        this.$fetch.api_report.sdkBase({
          dateRange: val,
          page: this.currentPage,
          size: this.length,
          type:0
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
      get_api_table_data(val) {
        this.apiTempDateValue = val
        this.api_load_data = true
        this.$fetch.api_report.apiBase({
          dateRange: val,
          page: this.apiCurrentPage,
          size: this.length,
          appId:this.value
        })
          .then(({data: {result, page, total}}) => {
            this.api_table_data = result
            this.apiCurrentPage = page
            this.apiTotal = total
            this.api_load_data = false
          })
          .catch(() => {
            this.api_load_data = false
          })
      },
      //页码选择
      handleCurrentChange(val) {
        this.currentPage = val
        this.get_table_data(this.tempDateValue)
      },
      //页码选择
      apiHandleCurrentChange(val) {
        this.apiCurrentPage = val
        this.get_api_table_data(this.apiTempDateValue)
      },
      date_format(date) {
        return tools_date.formatDate(new Date(date), "yyyy-MM-dd")
      },
      select_change(val){
        this.get_api_table_data(this.apiTempDateValue)
      }
    }
  }
</script>
