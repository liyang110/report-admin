<template>
  <div class="panel">
    <panel-title :title="$route.meta.title">
      <el-button @click.stop="on_refresh" size="small">
        <i class="fa fa-refresh"></i>
      </el-button>
    </panel-title>
    <div class="panel-body">
      <el-table
        :data="table_data"
        v-loading="load_data"
        element-loading-text="拼命加载中"
        style="width: 75%;">
        <el-table-column
          prop="app_name"
          label="应用名"
          width="240">
        </el-table-column>
        <el-table-column
          prop="type"
          label="接入形式"
          width="200">
        </el-table-column>
        <el-table-column
          prop="version"
          label="接入版本"
          width="200">
        </el-table-column>
        <el-table-column
          prop="createtime"
          label="接入时间"
          width="200">
          <template scope="props">
            <span v-text="props.row.createtime == null ? props.row.createtime : date_format(props.row.createtime)"></span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script type="text/javascript">
  import {panelTitle, bottomToolBar} from 'components'
  import {tools_date, tools_uri} from 'common/tools'

  export default{
    data(){
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
        //批量选择数组
        batch_select: []
      }
    },
    components: {
      panelTitle,
      bottomToolBar
    },
    created(){
      this.get_table_data()
    },
    methods: {
      //刷新
      on_refresh(){
        this.get_table_data()
      },
      //获取数据
      get_table_data(){
        this.load_data = true
        this.$fetch.api_access.profile({
          page: this.currentPage,
          size: this.length
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
        this.get_table_data()
      },
      date_format(date) {
        return tools_date.formatDate(new Date(date), "yyyy-MM-dd")
      }
    }
  }
</script>
