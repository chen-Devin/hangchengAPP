<template>
    <div class="paymentTpl">
        <paymentWaitCom></paymentWaitCom>  
         <div class="accountInfo">
             <div class="mui-content">
                <div class="mui-card">
                    <!--页眉，放置标题-->
                    <div class="mui-card-header">
                        <div>账单信息</div>
                    </div>
                    <!--内容区-->
                    <div class="mui-card-content">
                        <ul>
                            <li>
                                <div>应收金额</div>
                                <div>{{payAmount}}元</div>
                            </li>
                            <li>
                                <div>已收金额</div>
                                <div>{{payAmount}}元</div>
                            </li>
                            <li>
                                <div>未收金额</div>
                                <div>{{payAmount}}元</div>
                            </li>
                        </ul>
                    </div> 
                </div>
                <div class="mui-card paymentInfo">
                    <!--页眉，放置标题-->
                    <div class="mui-card-header">
                        <div>付款信息</div>
                    </div>
                    <!--内容区-->
                    <div class="mui-card-content">
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
                                <div>{{Payee}}</div>
                            </li>
                            <li>
                                <div>收款人</div>
                                <div>{{Drawee}}</div>
                            </li>
                        </ul>
                    </div> 
                </div>
                <div class="mui-card affirmInfo">
                    <!--页眉，放置标题-->
                    <div class="mui-card-header">
                        <div>收账确认</div>
                    </div>
                    <!--内容区-->
                    <div class="mui-card-content">
                        <ul>
                            <li>
                                <div>确认金额</div>
                                <div><span class="c-red">{{payAmount}}</span>元</div>
                            </li>
                            <li>
                                <label class="lblAffirm"><input type="checkbox">我确认已收到上述收款人支付，上述确认金额所对应的费用。</label>
                            </li>
                        </ul>
                    </div> 
                </div>
                <div class="button-group">
                  <mt-button type="default" size="normal" class="btn-phone">电话沟通</mt-button>
                  <mt-button type="primary" size="normal" class="btn-affirm">我确认</mt-button>
                </div>
            </div>
         </div>
    </div>
</template>
<style lang="scss" scoped>
.paymentTpl {
  padding-top: 0.15rem;
  .accountInfo {
    margin-top: 0.3rem;
    .mui-content {
      .mui-card {
        margin-top: .3rem;
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
          height: auto;
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
                font-size: 0.32rem;
                height: 0.6rem;
                line-height: 0.6rem;
                color: #333;
                &:first-child {
                  color: #d2d2d2;
                  width: 15%;
                  text-align: right;
                }
                &:last-child {
                  padding-left: 0.3rem;
                  width: 77%;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  .c-red {
                    color: #ef4545;
                  }
                  .c-d2d2d2 {
                    color: #d2d2d2;
                  }
                }
              }
              .lblAffirm {
                font-size: .32rem;
                letter-spacing: -.019rem;
                margin-top: .2rem;
                input {
                  vertical-align: -.11rem;
                  margin-right: .1rem;
                  width: .35rem;
                }
              }
            }
          }
        }
      }
      .affirmInfo {
        .mui-card-content {
          padding-bottom: .43rem;
        }
      }
      .button-group{
        padding: 0 .2rem .2rem;
        position: fixed;
        bottom: 1rem;
        right: 0;
      }
      .btn-phone {
        width: 2rem;
        height: .76rem;
        font-size: .34rem;
      }
      .btn-affirm {
        width: 2rem;
        height: .76rem;
        font-size: .34rem;
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
    
  },
  methods: {
    
  },
  components: {
    paymentWaitCom
  }
};
</script>



   
