<template>
  <div class="panel">
    <panel-title :title="$route.meta.title">
      <el-button @click.stop="on_refresh" size="small">
        <i class="fa fa-refresh"></i>
      </el-button>
    </panel-title>
    <div class="panel-body">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="已上线" name="first">
          <el-table
            :data="table_data"
            v-loading="load_data"
            element-loading-text="拼命加载中"
            style="width: 66%;"
          >
            <!--<el-table-column-->
            <!--type="selection"-->
            <!--width="55">-->
            <!--</el-table-column>-->
            <el-table-column prop="name" label="索引目标" width="200"></el-table-column>
            <el-table-column prop="online_count" label="图片数量" width="200"></el-table-column>
            <el-table-column prop="type" label="分级" width="100"></el-table-column>
            <el-table-column prop="apiVersion" label="接口版本" width="120">
              <template scope="props">
                <span>1.1.2</span>
              </template>
            </el-table-column>
            <el-table-column prop="apiStatus" label="接口服务" width="120">
              <template scope="props">
                <span class="fa fa-circle" style="color: green"></span>
              </template>
            </el-table-column>
          </el-table>
          
        </el-tab-pane>
        <el-tab-pane label="未上线" name="second">
          <el-table
            :data="table_data"
            v-loading="load_data"
            element-loading-text="拼命加载中"
            style="width: 45%;"
          >
            <el-table-column prop="name" label="索引目标" width="200"></el-table-column>
            <el-table-column prop="not_online_count" label="图片数量" width="200"></el-table-column>
            <el-table-column prop="type" label="分级" width="100"></el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script type="text/javascript">
import { panelTitle, bottomToolBar } from "components";

export default {
  data() {
    return {
      table_data: null,
      activeName: "first",
      //当前页码
      currentPage: 1,
      //数据总条目
      total: 0,
      //每页显示多少条数据
      length: 30,
      //请求时的loading效果
      load_data: true,
      //批量选择数组
      batch_select: []
    };
  },
  components: {
    panelTitle,
    bottomToolBar
  },
  created() {
    this.get_table_data();
  },
  methods: {
    //刷新
    on_refresh() {
      this.get_table_data();
    },
    //获取数据
    get_table_data() {
      this.load_data = true;
      this.$fetch.api_image
        .global({})
        .then(({ data: { result, page, total } }) => {
          this.table_data = result;
          this.currentPage = page;
          this.total = total;
          this.load_data = false;
        })
        .catch(() => {
          this.load_data = false;
        });
    },
    //页码选择
    handleCurrentChange(val) {
      this.currentPage = val;
      this.get_table_data();
    }
  }
};
</script>
