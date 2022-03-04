<template>
  <el-card class="box-card" style="margin: 10px 0px">
    <div slot="header" class="clearfix">
      <!--  @tab-click="handleClick" -->
      <!-- 头部左侧内容 -->
      <el-tabs class="tab" v-model="activeName">
        <el-tab-pane label="销售额" name="sale"></el-tab-pane>
        <el-tab-pane label="访问量" name="visite"></el-tab-pane>
      </el-tabs>
      <!-- 头部右侧内容 -->
      <!--      <div class="right"> -->
      <!--        <span @click="setDay">今日</span>
        <span @click="setWeek">本周</span>
        <span @click="setMonth">本月</span>
        <span @click="setYear">本年</span> -->
      <!--    v-model="value1" -->
      <!--        <el-date-picker
          v-model="date"
          class="date"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker> -->
      <!-- </div> -->
    </div>
    <div>
      <el-row :gutter="10">
        <el-col :span="18">
          <!-- 容器 -->
          <div class="charts" ref="charts"></div>
        </el-col>
        <el-col :span="6" class="right">
          <h3>最热商品</h3>
          <ul>
            <li>
              <span class="rindex">1</span>
              <span>{{this.rankdata[0].gname}}</span>
              <span class="rvalue">{{this.rankdata[0].viewCnt}}</span>
            </li>
            <li>
              <span class="rindex">2</span>
              <span>{{this.rankdata[1].gname}}</span>
              <span class="rvalue">{{this.rankdata[1].viewCnt}}</span>
            </li>
            <li>
              <span class="rindex">3</span>
              <span>{{this.rankdata[2].gname}}</span>
              <span class="rvalue">{{this.rankdata[2].viewCnt}}</span>
            </li>
            <li>
              <span class="rindex2">4</span>
              <span>{{this.rankdata[3].gname}}</span>
              <span class="rvalue">{{this.rankdata[3].viewCnt}}</span>
            </li>
            <li>
              <span class="rindex2">5</span>
              <span>{{this.rankdata[4].gname}}</span>
              <span class="rvalue">{{this.rankdata[4].viewCnt}}</span>
            </li>
            <li>
              <span class="rindex2">6</span>
              <span>{{this.rankdata[5].gname}}</span>
              <span class="rvalue">{{this.rankdata[5].viewCnt}}</span>
            </li>
            <li>
              <span class="rindex2">7</span>
              <span>{{this.rankdata[6].gname}}</span>
              <span class="rvalue">{{this.rankdata[6].viewCnt}}</span>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
  //引入echarts
  import echarts from "echarts";
  import dayjs from "dayjs";
  import {
    mapState
  } from "vuex";
  export default {
    name: "",
    data() {
      return {
        rankdata: [{'gid': '00000031', 'gname': '4564', 'viewCnt': 2}, {'gid': '00000024', 'gname': '12', 'viewCnt': 1}, {'gid': '00000028', 'gname': '12', 'viewCnt': 1}, {'gid': '00000036', 'gname': '2', 'viewCnt': 1}, {'gid': '00000030', 'gname': '22', 'viewCnt': 1}, {'gid': '00000034', 'gname': 'ASOUL', 'viewCnt': 1}, {'gid': '00000002', 'gname': '巧克力面包', 'viewCnt': 1}]
,
        activeName: "sale",
        mycharts: null,
        //收集日历数据
        date: [],
      };
    },
    mounted() {
      this.$API.dashboard.getrankdata().then((res) => {

        this.rankdata = res.data;
      });
      this.mycharts = echarts.init(this.$refs.charts);
      this.setMoney();

      //初始化echarts实例


      //配置数据


      //顶部是mounted：为什么第一次没有数据，没有数据因此不显示
    },
    computed: {
      //计算属性-标题
      title() {
        //重新设置配置项
        return this.activeName == "sale" ? "销售额" : "访问量";
      },
      ...mapState({
        listState: (state) => state.home.list,
      }),
    },
    //监听属性
    watch: {
      title() {
        console.log("修改配置数据");
        //重新修改图标的配置数据
        //图标配置数据可以再次修改，如果有新的数值，新的数值，没有新的数值，还是用以前的
        if (this.title == "销售额") {
          this.setMoney();
        } else {
          this.setVisit();
        }

      },
      // listState() {
      //   this.mycharts.setOption({
      //     title: {
      //       text: this.title + "趋势",
      //     },
      //     tooltip: {
      //       trigger: "axis",
      //       axisPointer: {
      //         type: "shadow",
      //       },
      //     },
      //     grid: {
      //       left: "3%",
      //       right: "4%",
      //       bottom: "3%",
      //       containLabel: true,
      //     },
      //     xAxis: [{
      //       type: "category",
      //       data: this.listState.orderFullYearAxis,
      //       axisTick: {
      //         alignWithLabel: true,
      //       },
      //     }, ],
      //     yAxis: [{
      //       type: "value",
      //     }, ],
      //     series: [{
      //       name: "Direct",
      //       type: "bar",
      //       barWidth: "60%",
      //       data: this.listState.orderFullYear,
      //       color: "yellowgreen",
      //     }, ],
      //   });

      // }
    },
    methods: {
      setVisit() {
        this.$API.dashboard.getVisitNumList().then((res) => {
          console.log(res);
          this.mycharts.setOption({
            title: {
              text: this.title,
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow",
              },
            },
            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true,
            },
            xAxis: [{
              type: "category",
              data: res.data.days,
              axisTick: {
                alignWithLabel: true,
              },
            }, ],
            yAxis: [{
              type: "value",
            }, ],
            series: [{
              name: "访问量",
              type: "line",
              barWidth: "60%",
              data: res.data.nums,
              color: "yellowgreen",
            }, ],
          });
        });
      },
      setMoney() {
        this.$API.dashboard.getMoneyList().then((res) => {
          console.log(res);
          this.mycharts.setOption({
            title: {
              text: this.title,
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow",
              },
            },
            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true,
            },
            xAxis: [{
              type: "category",
              data: res.data.timedata,
              axisTick: {
                alignWithLabel: true,
              },
            }, ],
            yAxis: [{
              type: "value",
            }, ],
            series: [{
              name: "销售额",
              type: "line",
              barWidth: "60%",
              data: res.data.moneydata,
              color: "yellowgreen",
            }, ],
          });
        });
      },
      //本天
      setDay() {
        const day = dayjs().format("YYYY-MM-DD");
        this.date = [day, day];
      },
      //本周
      setWeek() {
        const start = dayjs().day(1).format("YYYY-MM-DD");
        const end = dayjs().day(7).format("YYYY-MM-DD");
        this.date = [start, end];
      },
      //本月
      setMonth() {
        const start = dayjs().startOf("month").format("YYYY-MM-DD");
        const end = dayjs().endOf("month").format("YYYY-MM-DD");
        this.date = [start, end];
      },
      //本年
      setYear() {
        const start = dayjs().startOf("year").format("YYYY-MM-DD");
        const end = dayjs().endOf("year").format("YYYY-MM-DD");
        this.date = [start, end];
      },
    },
  };
</script>

<style scoped>
  .clearfix {
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  .tab {
    width: 100%;
  }

  .right {
    position: absolute;
    right: 0px;
  }

  .date {
    width: 250px;
    margin: 0px 20px;
  }

  .right span {
    margin: 0px 10px;
  }

  .charts {
    width: 100%;
    height: 300px;
  }

  ul {
    list-style: none;
    width: 100%;
    height: 300px;
    padding: 0px;
  }

  ul li {
    height: 8%;
    margin: 10px 0px;
  }

  .rindex {
    float: left;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: black;
    color: white;
    text-align: center;
  }

  .rindex2 {
    float: left;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    color: black;
    text-align: center;
  }

  .rvalue {
    float: right;
  }
</style>
