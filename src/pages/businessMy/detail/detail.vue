<template>
  <div class="detailTpl">
     <div class="detailEcharts" id="myChart">
     </div>
     <div class="detailFee">
         <ul class="mui-table-view">
            <li class="mui-table-view-cell detailFeeRow" v-for="(item,index) in billHistoryList" :key="index">
                <router-link class="mui-navigate-right" :to="'/businessMyIndo/businessFeeConfirmed/'+item.id">
                    <div class="mui-row">
                        <div class="mui-col-sm-3">
                            <li class="mui-table-view-cell">
                                {{item.billMonth|fmtDate('YYYY/MM')}}
                            </li>
                        </div>
                        <div class="mui-col-sm-3">
                            <li class="mui-table-view-cell">
                               {{item.targetName}}
                            </li>
                        </div>
                        <div class="mui-col-sm-5">
                            <li :class="['mui-table-view-cell',{'colorGreen':item.cost<0}]">
                              {{item.cost|filterNum}} 
                            </li>
                        </div>
                     </div>
                </router-link>
            </li>
        </ul>
     </div>    
  </div>      
</template>
<style lang="scss" scoped>
.detailTpl {
  .detailEcharts {
    width: 10.8rem;
    height: 4.98rem;
    font-size: 0.36rem;
  }
  .detailFee {
    .mui-table-view {
      .detailFeeRow {
        &:after {
          left: 0;
        }
        .mui-row {
            div {
              &:last-child {
                li {
                  color: #f85e1a;
                }
              }
            }
          }
        // &:nth-child(2n + 1) {
        //   .mui-row {
        //     div {
        //       &:last-child {
        //         li {
        //           color: #f85e1a;
        //         }
        //       }
        //     }
        //   }
        // }
        // &:nth-child(2n) {
        //   .mui-row {
        //     div {
        //       &:last-child {
        //         li {
        //           color: #3ab51e;
        //         }
        //       }
        //     }
        //   }
        // }
      }
      .mui-row {
        .mui-table-view-cell {
          height: 1.32rem;
          line-height: 1.32rem;
          font-size: 0.36rem;
          &:after {
            right: 0;
            left: -0.15rem;
          }
        }
        div {
          &:first-child {
            li {
              //   padding-left: 0.5rem;
              text-align: center;
              padding-right: 0.5rem;
            }
          }
          &:last-child {
            li {
              text-align: right;
            }
          }
        }
      }
      .mui-navigate-right {
        &:after {
          font-size: 0.36rem;
        }
      }
    }
  }
}
</style>
<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入折线图组件
require("echarts/lib/chart/line");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      detailFee: "+23415.25",
      billHistoryList: [],
      filterNum: 'base'
    };
  },
  filters:{
    filterNum(value){
      if(value>0){
        return '+'+value;
      }else{
         return value;
      }
    }
  },
  created () {
    this.getBillHistory();
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart"));
      let options = {
        title: {
          text: "人民币 元  总额",
          textStyle: {
            color: "#fff",
            fontSize: 14
          },
          left: "3%",
          top: "6%"
        },
        tooltip: {},
        xAxis: {
          type: "category",
          axisLine: {
            // 坐标轴线
            show: false // 默认显示，属性show控制显示与否
          },
          axisTick: {
            // 坐标轴小标记
            show: false // 属性show控制显示与否，默认不显示
            // inside : false,    // 控制小标记是否在grid里
            // length :5,         // 属性length控制线长
            // lineStyle: {       // 属性lineStyle控制线条样式
            // color: '#333',
            // width: 1
            // }
          },
          data: []
          // data: [
          //   {
          //     value: "5月",
          //     textStyle: {
          //       color: "#fff",
          //       fontSize: 14
          //     }
          //   },
          //   {
          //     value: "6月",
          //     textStyle: {
          //       color: "#fff",
          //       fontSize: 14
          //     }
          //   },
          //   {
          //     value: "7月",
          //     textStyle: {
          //       color: "#fff",
          //       fontSize: 14
          //     }
          //   },
          //   {
          //     value: "8月",
          //     textStyle: {
          //       color: "#fff",
          //       fontSize: 14
          //     }
          //   },
          //   {
          //     value: "9月",
          //     textStyle: {
          //       color: "#fff",
          //       fontSize: 14
          //     }
          //   },
          //   {
          //     value: "10月",
          //     textStyle: {
          //       color: "#fff",
          //       fontSize: 14
          //     }
          //   }
          // ]
          //   show: false
        },
        yAxis: {
          show: false, //是否显示坐标轴线
          // type : 'value',
          axisLabel: {
            showMaxLabel: true
          }
        },
        backgroundColor: "#F85E1A",
        textStyle: {
          color: "rgba(255, 255, 255, 1)",
          fontSize: 14
        },
        series: [
          {
            name: "金额",
            type: "line",
            stack: "金额",
            itemStyle: {
              normal: {
                label: {
                  show: true //是否显示折线图上折点的值
                },
                lineStyle: {
                  color: "#fff",
                  width: 2
                }
              }
            },
            data: [],
            // markPoint: {
            //   data: [{ type: "max", name: "最大值" }, { type: "min", name: "最小值" }]
            // }
            markPoint: {
              data: [{ type: "max", name: "最大值" }]
            }
          }
        ]
      };
      let dataX = ["5月", "6月", "7月", "8月", "9月", "10月"];
      let dataOpt = [1000, 900, 800, 900, 6849.9, 5100];
      for (let i = 0; i < dataX.length; i++) {
        options.xAxis.data[i] = dataX[i];
      }
      console.log(options.xAxis.data);
      for (let i = 0; i < dataOpt.length; i++) {
        options.series[0].data[i] = dataOpt[i];
      }
      console.log(options.series[0].data);
      // 绘制图表
      myChart.setOption(options);
    },
    getBillHistory() {
      const url = "http://192.168.1.207:8080/ucenter/business/module/getBusinessHistory.shtml&pageNum=1&pageSize=4";
      const _this = this;
      // this.$axios.get(url).then(function(res) {
      //     // console.log(res)
      //     _this.billHistoryList = res.objects.list;
      //   })
      //   .catch(function(res) {});
      var res = {
            code: "SUCCESS",
            msg: "成功",
            objects: {
              list: [
                {
                  id: 24,
                  billMonth: "2017-11",
                  targetId: 6003,
                  targetName: "二是563465",
                  cost: 6556.9,
                  ordersType: 1
                },
                {
                  id: 25,
                  billMonth: "2017-10",
                  targetId: 6003,
                  targetName: "二是563465",
                  cost: -6556.9,
                  ordersType: 1
                },
                {
                  id: 26,
                  billMonth: "2017-09",
                  targetId: 6003,
                  targetName: "二是563465",
                  cost: 6556.9,
                  ordersType: 1
                },
                {
                  id: 27,
                  billMonth: "2017-08",
                  targetId: 6003,
                  targetName: "二是563465",
                  cost: -6556.9,
                  ordersType: 1
                }
              ],
              total: 5,
              pageNum: 1,
              pageSize: 4,
              pages: 2,
              countRs: [
                {
                  billMonth: "2017-11",
                  receiveCost: 6556.9
                },
                {
                  billMonth: "2017-10",
                  receiveCost: 6556.9
                },
                {
                  billMonth: "2017-09",
                  receiveCost: 6556.9
                },
                {
                  billMonth: "2017-08",
                  receiveCost: 6556.9
                },
                {
                  billMonth: "2017-07",
                  receiveCost: 6556.9
                }
              ]
            }
          };
     _this.billHistoryList = res.objects.list;
     
    },
  },
 
};
</script>


