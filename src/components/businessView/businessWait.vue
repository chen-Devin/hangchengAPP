<template>
    <div class='tmplBusinessWait'>
        <div class="mui-content">
            <div class="mui-card">
                <!--页眉，放置标题-->
                <div class="mui-card-header">
                    <h4>中集盐田</h4>
                    <p>截止时间：{{ data | fmtDate()}}</p>
                </div>
                <!--内容区-->
                <div class="mui-card-content">
                    <router-link :to = "'/businessMyIndo/businessBillInfo/:businessBillInfoId'">
                        <businessTypeBox class="box_l mui-media-object mui-pull-left"  :commentType = 'commentTypeSS' :typeData = 'typeDatas1' dataRate = '6666'></businessTypeBox>
                        <div class="mui-media-body">
                            <p>TGP20170821</p>
                            <p>华中大鄂提/湖北鄂州装/YICT还/80GP&nbsp;&nbsp;20吨</p>
                        </div>
                        <businessTypeBoxRight class="box_l mui-media-object mui-pull-right"  :commentType = '2' :typeData = 'typeDatas2' dataRate = '预付'></businessTypeBoxRight>
                    </router-link>                   
                </div>
                <!--页脚，放置补充信息或支持的操作-->
                <div class="mui-card-footer">
                    <button v-show="isShowWaitDo" type="button" class="mui-btn mui-btn-primary mui-btn-outlined">改派推荐</button>
                    <button v-show="isShowWaitGathering" type="button" class="mui-btn mui-btn-primary mui-btn-outlined" @click="getReceivables">收款明细</button>
                    <button v-show="isShowWaitPayment" type="button" class="mui-btn mui-btn-primary mui-btn-outlined" @click="getAccountInfo">催款信息<span class="roundRed50">{{count}}</span></button>
                    <button type="button" class="mui-btn mui-btn-primary mui-btn-outlined" @click="getPhoneCall">电话沟通</button>
                    <button v-show="isShowWaitDo" type="button" class="mui-btn mui-btn-danger mui-btn-outlined">退单</button>
                    <button v-show="isShowWaitChecking" type="button" class="mui-btn mui-btn-danger mui-btn-outlined" @click="billDetail">账单明细</button>
                    <button v-show="isShowWaitGathering" type="button" class="mui-btn mui-btn-danger mui-btn-outlined" @click="Dunning">催账</button>
                    <button v-show="isShowWaitPayment" type="button" class="mui-btn mui-btn-danger mui-btn-outlined" @click="getPaymentDetail">付款明细</button>
                    <button v-show="isShowWaitDo" type="button" class="mui-btn mui-btn-warning mui-btn-outlined">出车</button>
                    <!-- <button v-show="isShowWaitReimbursing" :to="'/businessMyIndo/businessMyList/businessMyReimbursingInfo'" type="button" class="mui-btn mui-btn-warning mui-btn-outlined">费用报销</button> -->
                    <router-link :to="'/businessMyIndo/businessMyReimbursingInfo'"  v-show="isShowWaitReimbursing"  type="button" class="mui-btn mui-btn-warning mui-btn-outlined">费用报销</router-link>
                    <button v-show="isShowWaitChecking" type="button" class="mui-btn mui-btn-warning mui-btn-outlined" @click="confirmedBill">确认账单</button>
                    <button v-show="isShowWaitGathering" type="button" class="mui-btn mui-btn-warning mui-btn-outlined">到账确认</button>
                    <button v-show="isShowWaitPayment" type="button" class="mui-btn mui-btn-warning mui-btn-outlined" @click="getPayment">我要付款</button>
                    <button v-show="isShowReminedPayment" type="button" class="mui-btn mui-btn-warning mui-btn-outlined" @click="reminedPay">提醒付款</button>
                </div>
                
                <!-- <mt-popup v-model="popupVisibleCall" position="center" popup-transition="popup-fade"-->
                    <!-- <phoneCall></phoneCall> -->
                <!-- </mt-popup>-->
                 <mt-popup v-model="popupVisibleRemined" position="center" popup-transition="popup-fade"> 
                    <div class="reminedPaymentPopupTpl">
                        <div class="reminedPopup-top colorBlue">确认提醒付款</div>
                        <div class="reminedPopup-center">每天最多提醒一次哦！</div>
                        <div class="reminedPopup-bottom">
                            <div class="cancle" @click="cancleRemined">取消</div>
                            <div class="confirmed colorBlue" @click="confirmRemined">确定</div>
                        </div>
                    </div>
                    <!-- <reminedPaymentPopup></reminedPaymentPopup> -->
                    <!-- <reminedPaymentPopup v-on:listenChildEvent="reminedShowOrHidden"></reminedPaymentPopup> -->
                </mt-popup> 
            </div>
        </div>
    </div>
</template>

<script>
import businessTypeBox from "@C/businessTypeBox.vue";
import businessTypeBoxRight from "@C/businessTypeBoxRight.vue";
import { Popup } from "mint-ui";
import phoneCall from "@C/paymentPendingCom/phoneCall.vue";
import reminedPaymentPopup from "@C/popups/reminedPaymentPopup.vue";
import api from '../../fetch/api'
export default {
  data() {
    return {
      data: new Date(),
      typeDatas1: "进口",
      typeDatas2: "现结",
      waitType1: "1",
      commentTypeSS: "1",
      isShowWaitDo: false, //待作
      isShowWaitReimbursing: false, //已完成
      isShowWaitChecking: false, //待对账
      isShowWaitGathering: false, //待收款
      isShowWaitPayment: false, //待付款
      isShowReminedPayment:true,
      popupVisibleCall: false,
      popupVisibleRemined:false,
      count:0,
    //   parentMsg1:false
    };
  },
  created() {
    this.isShowOrHidden();
  },
  methods: {
    isShowOrHidden() {
      this.waitType1 = this.waitType1T;
      this.typeDatas1 = this.typeDatas1T;
      this.typeDatas2 = this.typeDatas2T;
      this.commentTypeSS = this.commentTypeS;
      // console.log(this.commentTypeSS);
      console.log(this.waitType1T);
      if (this.waitType1 == "0") {
        this.isShowWaitDo = true;
      } else if (this.waitType1 == "1") {
        this.isShowWaitChecking = true;
      } else if (this.waitType1 == "2") {
        this.isShowWaitGathering = true;
      } else if (this.waitType1 == "3") {
        this.isShowWaitPayment = true;
      } else if (this.waitType1 == "4") {
        this.isShowWaitReimbursing = true;
      }
    },
    confirmedBill() {
      if (this.typeDatas2 == "现结") {
        this.$router.push({
          path: "/businessMyIndo/businessFee/:businessFeeId",
          params: {
            businessFeeId: this.$route.params.businessFeeId
          }
        });
      } else {
        this.$router.push({
          path: "/businessMyIndo/businessConfirmed/:businessConfirmedId",
          params: {
            businessConfirmedId: this.$route.params.businessConfirmed
          }
        });
      }
    },
    billDetail() {
      if (this.typeDatas2 == "现结") {
        this.$router.push({
          path: "/businessMyIndo/singleDetail/:singleDetailId",
          params: {
            businessFeeId: this.$route.params.singleDetailId
          }
        });
      } else {
        this.$router.push({
          path: "/businessMyIndo/monthDetail/:monthDetailId",
          params: {
            businessConfirmedId: this.$route.params.monthDetailId
          }
        });
      }
    },
    getAccountInfo() {
      this.$router.push({
        path: "/businessMyIndo/accountInfo/:accountInfoId",
        params: {
          frbId:this.$route.params.accountInfoId
        }
      });
    },
    // async get(){
    //     try {
    //         let res = await api.GetAccountInfo({frbId:1});
    //         console.log(res);
    //         console.log(123);
    //         this.objs = res.concat(res);
    //     } catch (e) {
    //         console.log(e);
    //         }
    //     },
    getPhoneCall() {
      this.popupVisibleCall = true;
    },
    Dunning(){
            this.$router.push({
            path: "/businessMyIndo/reminedPay/:reminedPayId",
            params: {
            reminedPayId:this.$route.params.reminedPayId
            }
      });
    },
    getReceivables(){
         this.$router.push({
            path: "/businessMyIndo/receivables",
            params: {
            // reminedPayId:this.$route.params.reminedPayId
            }
      });
    },
    getPaymentDetail(){
         this.$router.push({
            path: "/businessMyIndo/paymentDetail",
            params: {
            }
      });
    },
    getPayment(){
         this.$router.push({
            path: "/businessMyIndo/payment",
            params: {
            }
      });
    },
    reminedPay(){
        this.popupVisibleRemined = true;    
    },
     cancleRemined(){
        this.popupVisibleRemined=false;
     },
     confirmRemined(){
       
        this.popupVisibleRemined=false;
     },
  },
  mounted () {
      this.$root.eventBus.$on('newsCount',function(count){
          var _this = this;
             _this.count = count;
             console.log(count);
         });
  },
  components: {
    businessTypeBox,
    businessTypeBoxRight,
    Popup,
    // phoneCall,
    // reminedPaymentPopup
  },
  computed: {},
  props: ["commentTypeS", "waitType1T", "typeDatas1T", "typeDatas2T"]
};
</script>


<style lang="scss" scoped>
.tmplBusinessWait {
  .roundRed50 {
    width: 0.32rem;
    height: 0.32rem;
    line-height: 0.38rem;
    font-size: 0.22rem;
    background-color: #ec2121;
    position: absolute;
    right: 0.01rem;
    top: 0.02rem;
  }
  .mint-popup{
     background:transparent; 
  }
  .reminedPaymentPopupTpl{
        width:8.2rem;
        height:4.22rem;
        border-radius: .1rem;
        background-color: #fff;
        .reminedPopup-top{
            width: 100%;
            height: 1.1rem;
            line-height: 1.1rem;
            padding-left:.55rem;
            font-size: .42rem;
        }  
        .reminedPopup-center{
            width: 100%;
            font-size: .42rem;
            height: 2.02rem;
            line-height:2.02rem;
            text-align: center;

        } 
        .reminedPopup-bottom{
            display: flex;
            justify-content: flex-end;
            div{
                background-color: transparent;
                width: 1.2rem;
                height: 0.7rem;
                font-size: .42rem;
                outline-style:none;
                cursor: pointer;
                line-height: 0.7rem;
            }
        }
  }    
}
</style>

   
            
