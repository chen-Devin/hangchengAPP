<template>
  <div class="mainInfo">
           <div class="mui-content">
            <div class="mui-card">
                <!--页眉，放置标题-->
                <div class="mui-card-header">
                    <h4>概要信息</h4>
                </div>
                <!--内容区-->
                <div class="mui-card-content">
                     <div class="mainInfo-left">
                         <ul>
                             <li>输港运单&nbsp;<span class="colorOrange">{{ticketCount1}}</span>票<span class="colorOrange">{{cabinetCount1}}</span>个柜</li>
                             <li>运费{{freight}}元</li>
                             <li>平台服务费&nbsp;{{ServiceCharge}}元</li>
                             <li>未收<span class="colorBlue">{{unpaid}}</span>元</li>
                         </ul>
                     </div>
                     <div class="mainInfo-right">
                         <ul>
                             <li>渡柜运单&nbsp;<span class="colorOrange">{{ticketCount2}}</span>票<span class="colorOrange">{{cabinetCount2}}</span>个柜</li>
                             <li>报销{{reimbursement}}元&nbsp;&nbsp;已付{{paid}}元</li>
                             <li>平台补贴&nbsp;{{subsidy}}元</li>
                             <li>账期60天&nbsp;&nbsp;预计支付日期<span class="colorBlue">{{expectedPayment| fmtDate('YYYY.MM.DD')}}</span></li>
                         </ul>
                     </div>                       
                </div>
                <!--页脚，放置补充信息或支持的操作-->
                <!-- <div class="mui-card-footer"></div> -->
            </div>
           </div>
       </div>
</template>
<style lang="scss" scoped>
    .mainInfo{
        //  padding-top: .15rem;
         .mui-card-content{
          display: flex;
          font-size: .34rem;
          color:#333333;
          height: 100%;
          margin-bottom: 0.25rem;
            ul{
                li{
                    margin: .15rem 0;
                    padding-left: 0.55em;
                    .colorOrange{
                        color:#F76220;
                    }
                    .colorBlue{
                         color:#44AEF2;
                    }
                }
              }
        .mainInfo-left{
            width: 40%;
        }
        .mainInfo-right{
            width: 60%;
        }
      }
    }
</style>
<script>
export default {
  data () {
      return {
          data : new Date(),
          objs:[],
          ticketCount1:8,
          cabinetCount1:12,
          freight:80000.00,
          ServiceCharge:0,
          unpaid:65412.15,
          ticketCount2:2,
          cabinetCount2:3,
          reimbursement:1451.25,
          paid:16039.10,
          subsidy:0,
          expectedPayment:new Date(),
      }
  },
  created () {
      
  },
  methods: {
      
  },
  components: {
      
  }
}
</script>



