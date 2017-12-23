<template>
    <div class="receivablesTpl">
        <paymentWaitCom></paymentWaitCom>  
         <div class="accountInfo">
             <div class="mui-content">
                <div class="mui-card">
                    <!--页眉，放置标题-->
                    <div class="mui-card-header">
                        <div>付款明细</div>
                    </div>
                    <!--内容区-->
                    <div class="mui-card-content" v-for="item in 2" :key="item">
                        <ul>
                            <li>
                                <div>付款时间</div>
                                <div>{{ data | fmtDate('YYYY-MM-DD &nbsp; HH:mm')}}</div>
                            </li>
                            <li>
                                <div>付款金额</div>
                                <div>{{payAmount}}</div>
                            </li>
                            <li>
                                <div>付款人</div>
                                <div>{{Drawee}}</div>
                            </li>
                            <li>
                                <div>收款人</div>
                                <div>{{Payee}}</div>
                            </li>
                            <li>
                                <div>状态</div>
                                <div>{{state}}</div>
                            </li>
                            <li>
                                <div>到账时间</div>
                                <div>{{ data | fmtDate('YYYY-MM-DD &nbsp; HH:mm')}}</div>
                            </li>
                            <li>
                                <div>到账金额</div>
                                <div>{{accountAmount}}</div>
                            </li>
                            <li>
                                <div>确认人</div>
                                <div>{{ConfirmPerson}}</div>
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
.receivablesTpl {
  padding-top: 0.15rem;
  .accountInfo {
    margin-top: 0.3rem;
    .mui-content {
      .mui-card-header {
        font-size: 0.34rem;
        justify-content: flex-start;
        height: 0.82rem;
        padding-left: 0.55rem;
        &:after{
          background-color:transparent;
        }
        div {
          &:first-child {
            width: 18%;
          }
        }
      }
      .mui-card-content {
        padding: 0;
        height: 5.05rem;
        // border-bottom: 1px solid #c8c7cc;
        padding: 0.15rem 0.55rem;
        &:after{
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          height: 1px;
          content: '';
          // -webkit-transform: scaleY(.5);
          transform: scaleY(.5);
          background-color: #c8c7cc;
        }
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
            div {
              font-size: 0.34rem;
              height: 0.6rem;
              line-height: 0.6rem;
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
export default {
  data() {
    return {
      receivablesArr: [],
      data: new Date(),
      payAmount: "30000.00",
      Payee: "张国富",
      Drawee: "王前进",
      state: "已确认",
      accountAmount: "30000.00",
      ConfirmPerson: "王美丽"
    };
  },
  created() {
    this.getReceivablesList();
  },
  methods: {
    getReceivablesList() {
      // this.$http.get(url).then(res=>{
      // })
    }
  },
  components: {
    paymentWaitCom
  }
};
</script>



   
