<template>
    <div class="accountInfoTpl">
        <paymentWaitCom></paymentWaitCom>  
         <div class="accountInfo">
             <div class="mui-content">
            <div class="mui-card">
                <!--页眉，放置标题-->
                <div class="mui-card-header">
                    <div>催账次数</div><div><span class="colorRed">{{count}}</span> 次</div>
                </div>
                <!--内容区-->
                <div class="mui-card-content">
                    <p>最近一次催账信息</p>
                    <ul>
                        <li>
                            <div>催账时间</div>
                            <div>{{createDate|fmtDate('YYYY-MM-DD HH:MM')}}</div>
                        </li>
                        <li>
                            <div>催账人</div>
                            <div>{{creator}}</div>
                        </li>
                        <li>
                            <div>催账留言</div>
                            <div>还有{{handlerCost}}元到帐运费未支付，请您及时安排支付。</div>
                        </li>
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
.accountInfoTpl {
  padding-top: 0.15rem;
  .accountInfo {
    margin-top: 0.3rem;
    .mui-content {
      .mui-card-header {
        font-size: 0.34rem;
        justify-content: flex-start;
        height: 0.82rem;
        div {
          &:first-child {
            width: 18%;
          }
        }
      }
      .mui-card-content {
        padding: 0;
        height: 3.5rem;
        p {
          font-size: 0.34rem;
          height: 0.82rem;
          line-height: 0.82rem;
          margin: 0;
          color: #333;
          padding-left: 0.15rem;
          &:after {
            position: absolute;
            top: 0.82rem;
            right: -0.15rem;
            left: -0.15rem;
            height: 1px;
            content: "";
            transform: scaleY(0.5);
            background-color: #d2d2d2;
          }
        }
        ul {
          li {
            display: flex;
            margin-top: 0.08rem;
            div {
              font-size: 0.34rem;
              //  height:.62rem;
              line-height: 0.62rem;
              color: #333;
              &:first-child {
                color: #d2d2d2;
                width: 16%;
                text-align: right;
              }
              &:last-child {
                padding-left: 0.5rem;
                width: 65%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<script>
import paymentWaitCom from "@C/paymentPendingCom/paymentWaitCom.vue";
import api from "../../../fetch/api";
import { axiosByGet } from "../../../fetch/axiosUtils";
export default {
  data() {
    return {
      count: "",
      handlerCost: "",
      creator: "",
      createDate: ""
    };
  },
  created() {
    this.get();
  },
  methods: {
    async get() {
      try {
        let res = await api.GetAccountInfo({ frbId: 1 });
        console.log(res);
        this.$nextTick(function() {
          this.count = res.count;
          console.log(this.count);
          this.createDate = res.createDate;
          this.creator = res.creator;
          this.handlerCost = res.handlerCost;
        });
      } catch (e) {
        console.log(e);
      }
    }
  },
  components: {
    paymentWaitCom
  }
};
</script>





