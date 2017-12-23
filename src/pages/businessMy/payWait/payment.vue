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
                                <div>账单生成时间</div>
                                <div>{{ data | fmtDate('YYYY-MM-DD &nbsp; HH:mm')}}</div>
                            </li>
                            <li>
                                <div>总运费</div>
                                <div>{{payAmount}}元</div>
                            </li>
                            <li>
                                <div>报销费</div>
                                <div>{{payAmount}}元</div>
                            </li>
                            <li>
                                <div>预付费</div>
                                <div>{{payAmount}}元</div>
                            </li>
                            <li>
                                <div>合计</div>
                                <div><span class="c-red">{{payAmount}}元</span><span class="c-d2d2d2"> * (合计=总运费+报销费-预付费)</span></div>
                            </li>
                            <li>
                                <div>账单确认时间</div>
                                <div>{{ data | fmtDate('YYYY-MM-DD &nbsp; HH:mm')}}</div>
                            </li>
                            <li>
                                <div>确认应付金额</div>
                                <div>{{payAmount}}</div>
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
                                <div>付款金额</div>
                                <div><input type="number" placeholder="请输入付款金额"></div>
                            </li>
                            <li>
                                <div>备注</div>
                                <div><textarea name="" id="" cols="30" rows="2"></textarea></div>
                            </li>
                        </ul>
                    </div> 
                </div>
                <p class="remind">
                  *为了保障您的权益，请账单到期后再进行费用支付，提前支付对您的信用与美誉提升有帮助。
                </p>
                <div class="button-group">
                  <mt-button type="primary" size="normal" class="btn-payment">立即付款</mt-button>
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
      }
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
                width: 23%;
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
          }
        }
      }
      .paymentInfo {
        .mui-card-content {
          height: 3rem;
          padding-top: .3rem;
          ul {
            li {
              margin-bottom: .4rem;
              div {
                height: .86rem;
                line-height: 0.86rem;
                input {
                  font-size: 0.34rem;
                  height: 0.8rem;
                  // line-height: 0.8rem;
                  color: #d2d2d2;
                }
                &:first-child {
                  color: #333;
                }
                :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                  color: #d2d2d2;
                }

                ::-moz-placeholder { /* Mozilla Firefox 19+ */
                  color: #d2d2d2;
                }

                input:-ms-input-placeholder{
                  color: #d2d2d2;
                }

                input::-webkit-input-placeholder{
                  color: #d2d2d2;
                }
                textarea {
                  height: 1.2rem;
                  line-height: .4rem;
                  font-size: .3rem;
                  padding: .15rem 15px;
                }
              }
            }
            li + li {
              div {
                height: 1.6rem;
              }
            }
          }
        }
      }
      p.remind {
        margin: 1.8rem .2rem .6rem;
        color: #ef4545;
        font-size: .32rem;
        line-height: .5rem;
      }
      .button-group{
        padding: 0 .2rem .2rem;
        margin-bottom: 1rem;
      }
      .btn-payment {
        width: 100%;
        font-size: .43rem;
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



   
