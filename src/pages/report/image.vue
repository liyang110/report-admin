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
        @change="get_table_data">
      </el-date-picker>
      <el-table
        :data="table_data"
        v-loading="load_data"
        element-loading-text="拼命加载中"
        style="width: 80%">
        <el-table-column
          prop="date"
          label="日期"
          width="200">
          <template scope="props">
            <span v-text="date_format(props.row.date)"></span>
          </template>
        </el-table-column>
        <el-table-column
          prop="imgUrl"
          label="图片"
          width="500">
          <template scope="props">
            <img v-bind:src=" cdnUrl + props.row.imgUrl"/>
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
        dateStr:'',
        cdnUrl:'https://static.dongtu.com/'
      }
    },
    components: {
      panelTitle,
      bottomToolBar
    },
    created(){
      this.initDate()
      this.get_table_data(this.dateStr)
    },
    methods: {
      initDate(){
        var date = new Date()
        date.setTime(date.getTime()-5*24*60*60*1000);
        this.dateValue = tools_date.formatDate(date, "yyyy-MM-dd")
        this.dateStr = tools_date.formatDate(date, "yyyy-MM-dd")
      },
      //刷新
      on_refresh(){
        this.get_table_data(this.dateStr)
      },
      //获取数据
      get_table_data(val){
        this.load_data = true
        this.dateStr = val
        this.$fetch.api_report.imageDaily({
          page: this.currentPage,
          size: this.length,
          dateRange: this.dateStr
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
      date_format(date) {
        if (date instanceof Date) {
          return tools_date.formatDate(date, "yyyy-MM-dd")
        }else{
          return tools_date.formatDate(new Date(date), "yyyy-MM-dd")
        }
      },
      //页码选择
      handleCurrentChange(val) {
        this.currentPage = val
        this.get_table_data(this.dateStr)
      }
    }
  }
</script>
