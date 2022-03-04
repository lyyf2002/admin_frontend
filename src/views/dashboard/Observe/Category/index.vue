<template>
  <el-card>
    <div slot="header" class="header">
      <div class="category-header">
        <span>销售额类别占比</span>
        <el-radio-group v-model="value" @change="setmoneyByspot">
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="学院路校区"></el-radio-button>
          <el-radio-button label="沙河校区"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div>
      <div class="charts" ref="charts"></div>
    </div>
  </el-card>
</template>

<script>
import echarts from "echarts";
export default {
  name: "",
  data() {
    return {
      value: "全部",
      mychart:'',
    };
  },
  mounted() {
    //饼图
     this.mychart = echarts.init(this.$refs.charts);
    this.setmoneyByspot()


    //绑定事件


  },
  methods:{
    setmoneyByspot(){
      this.$API.dashboard.getMoneyBySpot(this.value).then((res)=>{
        this.mychart.setOption({
          title: {
            text: res.data[0].name,
            subtext: res.data[0].value,
            left: "center",
            top: "center",
          },
          tooltip: {
            trigger: "item",
          },
          series: [
            {
              name: "Access From",
              type: "pie",
              radius: ["40%", "70%"],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: "#fff",
                borderWidth: 2,
              },
              label: {
                show: true,
                position: "outsize",
              },
              labelLine: {
                show: true,
              },
              data: res.data,
            },
          ],
        });
        this.mychart.on("mouseover",(params)=>{
            //获取鼠标移上去那条数据
            const {name,value} = params.data;
            //重新设置标题
            this.mychart.setOption({
              title:{
                text:name,
                subtext:value
              }
            })
        });
      })
    }
  }
};
</script>

<style scoped>
.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header {
  border-bottom: 1px solid #eee;
}
.charts {
  width: 100%;
  height: 300px;
}
</style>
