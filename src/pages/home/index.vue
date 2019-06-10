<template>
  <div class="panel">
    <panel-title :title="$route.meta.title"></panel-title>
    <div class="panel-body">
      <el-row :gutter="20">
        <el-col :span="17">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="fa fa-bar-chart-o" style="color:#00BB9D"></span>&nbsp;<span>运行数据</span>
            </div>
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <span class="board-span">SDK - 累积接入App数</span>
                  <div class="data-content">
                    <span class="data-span">{{this.toThousands(this.sdk_data.app_reg_count)}}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <span class="board-span">SDK - 日接口调用数</span>
                  <div class="data-content">
                    <span class="data-span">{{this.toThousands(this.sdk_data.api_call_count)}}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <span class="board-span">SDK - 日图片发送量</span>
                  <div class="data-content">
                    <span class="data-span">{{this.toThousands(this.sdk_data.emoji_send_count)}}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <span class="board-span">SDK - 累积用户数</span>
                  <div class="data-content">
                    <span class="data-span">{{this.toThousands(this.sdk_data.device_count)}}</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <span class="board-span">SDK - 日活跃用户数</span>
                  <div class="data-content">
                    <span class="data-span">{{this.toThousands(this.sdk_data.active_device_count)}}</span>
                  </div>
                </div>
              </el-col>
              <!--<el-col :span="6">-->
                <!--<div class="grid-content bg-purple">-->
                  <!--<span class="board-span">API - 大客户渠道数</span>-->
                  <!--<div class="data-content">-->
                    <!--<span class="data-span">9</span>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</el-col>-->
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <span class="board-span">API - 日接口调用数</span>
                  <div class="data-content">
                    <span class="data-span">{{this.toThousands(this.api_data.request_count)}}</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content bg-purple">
                  <span class="board-span">API - 日图片下载量</span>
                  <div class="data-content">
                    <span class="data-span">734,231,421</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :span="7">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="fa fa-file-image-o" style="color:#00BB9D	"></span>&nbsp;<span>图库</span>
              <div class="clc"></div>
            </div>
            <div class="image-data">
              <div class="image-data-card">
                <span style="float:left">自主生产</span><el-tag type="success" style="float:right;width:70px">{{this.image_data.own_count}}</el-tag>
                <div class="clc"></div>
              </div>
              <div class="image-data-card">
                <span style="float:left">版权授权</span><el-tag type="primary" style="float:right;width:70px">{{this.image_data.copyright_count}}</el-tag>
                <div class="clc"></div>
              </div>
              <div class="image-data-card">
                <span style="float:left">创作者网络</span><el-tag type="warning" style="float:right;width:70px">{{this.image_data.author_count}}</el-tag>
                <div class="clc"></div>
              </div>
              <div class="image-data-card">
                <span style="float:left">全网动图索引</span><el-tag type="gray" style="float:right;width:70px">{{this.image_data.all_count}}</el-tag>
                <div class="clc"></div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <!--<el-row>-->
        <!--<el-col :span="12">-->
          <!--<div style="background-color: #ffffff">-->
            <!--<chart :chart-data="this.temp_sdk_chart_data" :width="500" :height="350" ></chart>-->
          <!--</div>-->
        <!--</el-col>-->
        <!--<el-col :span="12">-->
          <!--<div style="background-color: #ffffff">-->
            <!--<chart :chart-data="this.temp_api_chart_data" :width="500" :height="350" ></chart>-->
          <!--</div>-->
        <!--</el-col>-->
      <!--</el-row>-->
    </div>
  </div>
</template>
<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .bg-purple {
    background: #00BB9D;
  }

  .grid-content {
    min-height: 80px;
  }

  .data-content {
    display: block;
    width: 200px;
    height: 75px;
    display: table-cell;
    font-size: 12px;
    font-height: 14px;
    vertical-align: middle;
    text-align: center
  }

  .board-span {
    color: #ffffff;
    font-size: 13px;
    margin-left: 8px;
  }

  .data-span {
    color: #ffffff;
    font-size: 20px;
    margin-left: 8px;
  }

  .image-data{
    width: 309px;
    height:226px;
    display: table-cell;
    font-size: 16px;
    vertical-align: middle;
    text-align: center
  }
  .image-data-card{
    width: 80%;
    margin-left: 10%;
    margin-bottom: 20px;
  }
  .clc{
    clear: both;
  }
  .panel-body{
    background-color: #FDFBF1;
  }
</style>
<script type="text/javascript">
  import {panelTitle,chart} from 'components'
  import ElRow from "element-ui/packages/row/src/row";


  export default {
    data() {
      return {
        msg: 'home page',
        sdk_data: {},
        api_data: {},
        image_data:{},
        chart_options:{responsive: false},
        temp_sdk_chart_data:null,
        temp_api_chart_data:null,
        sdk_chart_data:{
          labels: ['January'],
          datasets: [
            {
              label: 'SDK - 用户数',
              fill:false,
              data: [40]
            }
          ]
        },
        api_chart_data:{
          labels: ['January'],
          datasets: [
            {
              label: 'API - 接口调用数',
              fill:false,
              data: [40]
            }
          ]
        }

      }
    },
//    created() {
//      this.get_data()
//    },
    mounted() {
      this.get_data()

    },
    components: {
      ElRow,
      panelTitle,
      chart
    },
    methods: {
      //获取数据
      get_data() {
        this.$fetch.api_home.homeData({})
          .then(({data: {sdkReport,imageData,apiData,sdkChartData,apiChartData}}) => {
            this.sdk_data = sdkReport
            this.api_data = apiData
            this.image_data = imageData
            // this.sdk_chart_data.labels = sdkChartData.label
            // this.sdk_chart_data.datasets.data = sdkChartData.data
            // this.api_chart_data.labels = apiChartData.label
            // this.api_chart_data.datasets.data = apiChartData.data
            // this.temp_sdk_chart_data = this.sdk_chart_data
            // this.temp_api_chart_data = this.api_chart_data
//            console.log(this.temp_sdk_chart_data)
//            console.log(this.temp_api_chart_data)
          })
          .catch(() => {

          })
      },
      toThousands(num) {
        var num = (num || 0).toString(), result = '';
        while (num.length > 3) {
          result = ',' + num.slice(-3) + result;
          num = num.slice(0, num.length - 3);
        }
        if (num) {
          result = num + result;
        }
        return result;
      }
    }
  }
</script>
