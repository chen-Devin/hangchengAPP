<template>
    <div class="paymentWaitTpl">
        <div class="mui-content">
            <div class="mui-card">
                <!--页眉，放置标题-->
                <div class="mui-card-header">
                    <h4>张国富</h4>
                    <p>超期25天</p>
                </div>
                <!--内容区-->
                <div class="mui-card-content">
                    <router-link to = '/'>
                        <businessTypeBox  class="box_l mui-media-object mui-pull-left"  :commentType = '1' :typeData = 'typeDatas1' dataRate = '￥8000'></businessTypeBox>
                        <div class="mui-media-body">
                            <p>37MSK1245734-9/MSKU2838120</p>
                            <p>华南物流提/湖南湘潭阳明装/YICT还/40GP&nbsp;&nbsp;&nbsp;&nbsp;17吨</p>
                        </div>
                        <businessTypeBoxRight v-show="isShowRightBox" class="box_l mui-media-object mui-pull-right"  :commentType = '2' :typeData = 'typeDatas2' dataRate = '2854.25'></businessTypeBoxRight>
                    </router-link>                    
                </div>
                <!--页脚，放置补充信息或支持的操作-->
                <div class="mui-card-footer">
                    <button v-show="isShowWaitDo" type="button" class="mui-btn mui-btn-primary mui-btn-outlined billInfo" @click="getAccountInfo">催账信息<span class="roundRed50">{{count}}</span></button>
                    <button type="button" class="mui-btn mui-btn-primary mui-btn-outlined" @click="getPhoneCall">电话沟通</button>
                    <button type="button" class="mui-btn mui-btn-primary mui-btn-outlined">付款明细</button>
                    <button v-show="isShowWaitDo" type="button" class="mui-btn mui-btn-danger mui-btn-outlined">我要付款</button>
                </div>
            </div>
            <mt-popup v-model="popupVisibleCall" position="center">
                <phoneCall></phoneCall>
            </mt-popup>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.paymentWaitTpl {
  margin-bottom: 0.36rem;
  .mui-content {
    .tmplBusinessTypeBox /deep/ {
      .box {
        .boxTop {
          font-size: 0.28rem;
        }
        .boxBottom {
          font-size: 0.28rem;
        }
      }
    }
    .mui-card-footer {
      .billInfo {
        position: relative;
        .roundRed50 {
          width: 0.32rem;
          height: 0.32rem;
          line-height: 0.32rem;
          font-size: 0.22rem;
          background-color: #ec2121;
          position: absolute;
          right: 0.1rem;
          top: 0.05rem;
        }
      }
    }
    .mint-popup {
      background-color: transparent;
      border-radius: 0.2rem;
      overflow: hidden;
    }
  }
}
</style>
<script>
import businessTypeBox from "@C/businessTypeBox.vue";
import businessTypeBoxRight from "@C/businessTypeBoxRight.vue";
import { Popup } from "mint-ui";
import phoneCall from "@C/paymentPendingCom/phoneCall.vue";
export default {
  data() {
    return {
      data: new Date(),
      typeDatas1: "月账单",
      typeDatas2: "月结",
      isShowRightBox: true,
      isShowWaitDo: true, //待作
      count: 4,
      popupVisibleCall: false
    };
  },
  created() {
    this.$isShowRightBox();
  },
  methods: {
    $isShowRightBox() {
      this.isShowRightBoxs != null
        ? (this.isShowRightBox = this.isShowRightBoxs)
        : (this.isShowRightBox = false);
    },
    getAccountInfo() {
      this.$router.push({
        path: "/businessMyIndo/accountInfo/:accountInfoId",
        params: {
          businessFeeConfirmedId: this.$route.params.accountInfoId
        }
      });
    },
    getPhoneCall() {
      this.popupVisibleCall = true;
    }
  },
  components: {
    businessTypeBox,
    businessTypeBoxRight,
    Popup,
    phoneCall
  },
  computed: {},
  props: ["isShowRightBoxs", "counts"]
};
</script>

