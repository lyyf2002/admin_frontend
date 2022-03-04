<template>
  <!-- 容器 -->
  <div class="charts" ref="charts"></div>
</template>

<script>
//引入echarts
import echarts from "echarts";
export default {
  name: "",
  mounted() {
    //初始化echarts实例
    let lineCharts = echarts.init(this.$refs.charts);
    // let result = []
    this.$API.dashboard.getOrderNumList().then((res)=>{

      console.log(res.data);
      lineCharts.setOption({
        xAxis: {
          //隐藏x轴
          show: false,
          //均分
          type: "category",
        },
        yAxis: {
          //隐藏y轴
          show: false,
        },
        //系列
        series: [
          {
            //图标形式-柱状图
            type: "bar",
            data: res.data,
            color:'cyan'
          },
        ],
        //布局调试
        grid: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        },
        tooltip:{}
      });
    });
    // console.log("line")
    // console.log(result);
    //配置数据
    
  },
};
</script>

<style scoped>
.charts {
  width: 100%;
  height: 100%;
}
</style>
