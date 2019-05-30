<template>
  <div class="panel">
    <panel-title :title="$route.meta.title">
      <el-button @click.stop="on_refresh" size="small">
        <i class="fa fa-refresh"></i>
      </el-button>
    </panel-title>
    <div class="panel-body">
      <el-date-picker
        v-model="dateValue"
        type="date"
        :editable="false"
        placeholder="选择日期"
        :format="dateFormat"
        @change="date_table_load">
      </el-date-picker>
      <el-select v-model="apiTempValue" placeholder="请选择App" @change="select_change">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-table
        :data="table_data"
        v-loading="load_data"
        element-loading-text="拼命加载中"
        style="width: 63%">
        <el-table-column
          prop="date"
          label="日期"
          width="200">
          <template scope="props">
            <span v-text="date_format(props.row.date)"></span>
          </template>
        </el-table-column>
        <el-table-column
          prop="keyword"
          label="关键词"
          width="300">
          <template scope="props">
            <span v-text="decode(props.row.keyword)"></span>
          </template>
        </el-table-column>
        <el-table-column
          prop="count"
          label="次数"
          width="200">
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
    </div>
  </div>
</template>
<script type="text/javascript">
  import {panelTitle, bottomToolBar} from 'components'
  import {tools_date, tools_uri} from 'common/tools'

  export default{
    data(){
      return {
        dateFormat: 'yyyy-MM-dd',
        table_data: null,
        //当前页码
        currentPage: 1,
        //数据总条目
        total: 0,
        //每页显示多少条数据
        length: 15,
        //请求时的loading效果
        load_data: true,
        //批量选择数组
        batch_select: [],
        dateValue:'',
        apiTempValue: '4f6896797d4045b3b453f554a60d275a',
        options: [
          {"value": "4f6896797d4045b3b453f554a60d275a", "label": "淘宝"},
          {"value": "1247d6b11ae949779e7a0c85f0cef4af", "label": "陌陌"},
          {"value": "b19657b521f34b52bbc94d5f84995f64", "label": "探探"},
          {"value": "2701a32e83594cc284cf4ee4b61d5ba1", "label": "小恩爱"},
          {"value": "6e1823826610458894c81eac2df025c3", "label": "粉粉日记"},
          {"value": "32902b123b0943ae9ffbb257913aaa20", "label": "一周CP"},
          {"value": "04c25dfdb74d4b9b912862a2bde1d11d", "label": "QQ输入法"},
          {"value": "5613144ffde64d1d9be5d8b93998e90a", "label": "钉钉"}
        ],
        dateStr:'',
        cdnUrl:'https://static.dongtu.com/'
      }
    },
    components: {
      panelTitle,
      bottomToolBar
    },
    created(){
      this.initDate();
      this.get_table_data(this.apiTempValue,this.dateStr)
    },
    methods: {
      initDate(){
        var date = new Date()
        date.setTime(date.getTime()-24*60*60*1000);
        this.dateValue = tools_date.formatDate(date, "yyyy-MM-dd")
        this.dateStr = tools_date.formatDate(date, "yyyy-MM-dd")
      },
      //刷新
      on_refresh(){
        this.get_table_data(this.apiTempValue,this.dateStr)
      },
      //获取数据
      get_table_data(appId,dateVal){
        this.dateStr = dateVal
        this.load_data = true
        this.$fetch.api_report.apiDaily({
          page: this.currentPage,
          size: this.length,
          dateRange:this.dateStr,
          appId:this.apiTempValue
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
      //页码选择
      handleCurrentChange(val) {
        this.currentPage = val
        this.get_table_data(this.apiTempValue,this.dateStr)
      },
      select_change(val){
        this.get_table_data(this.apiTempValue,this.dateStr)
      },
      date_table_load(val){
        this.get_table_data(this.apiTempValue,val)
      },
      date_format(date) {
        if (date instanceof Date) {
          return tools_date.formatDate(date, "yyyy-MM-dd")
        }else{
          return tools_date.formatDate(new Date(date), "yyyy-MM-dd")
        }
      },
      decode(val){
        return decodeURI(val);
      }
    }
  }
</script>
