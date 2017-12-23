<template>
    <div class="reminedPayTpl">
        <paymentWaitCom></paymentWaitCom>
          <div class="toPayerWords">
             <div class="mui-content">
                <div class="mui-card">
                    <!--页眉，放置标题-->
                    <div class="mui-card-header">
                        <div>给付款人的话</div>
                    </div>
                    <!--内容区-->
                    <div class="mui-card-content">
                        <p>运单{{WayBillNum}}应于9月21日付款，限于超期{{overdue}}天，请及时安排付款。</p>
                    </div>
                </div>
                <!-- <div class="mui-card"> -->
                    <!--页眉，放置标题-->
                    <div class="moreWords">
                        <div>还想说点什么</div>
                    </div>
                    <!--内容区-->
                     <div class="mui-card moreWords-content">
                        <div class="mui-card-content">
                            <textarea ref="textAreaRef" name="" id="" cols="30" rows="10" placeholder="如果你还有什么话对付款人说，请在此输入"></textarea>
                        </div>
                    </div>
                <!--页脚，放置补充信息或支持的操作-->
                <div class="mui-card-footer confirm-btn">
                    <button type="button" class="mui-btn mui-btn-primary">电话沟通</button>
                    <button type="button" class="mui-btn mui-btn-default" @click="getReceivables">收款明细</button>
                    <button type="button" class="mui-btn mui-btn-primary" @click="PressPayment">我要催帐</button>
                </div>
        </div>
         </div>
    </div>        
</template>
<style lang="scss" scoped>
.reminedPayTpl {
  padding-top: 0.15rem;
  .ToastCom {
    .mint-toast-text {
      font-size: 0.34rem !important;
    }
  }

  .toPayerWords {
    margin-top: 0.3rem;
    .mui-content {
      .mui-card {
        background-color: transparent;
        padding: 0;
        .mui-card-header {
          font-size: 0.34rem;
          justify-content: flex-start;
          height: 0.94rem;
          background-color: #fff;
          // border-bottom: 1px solid #d2d2d2;
        }
        .mui-card-content {
          padding: 0;
          height: 1.58rem;
          background-color: #f6f6f6;
          p {
            font-size: 0.34rem;
            height: 1.58rem;
            line-height: 0.82rem;
            margin: 0;
            color: #333;
            padding: 0 0.25rem;
            background-color: #f6f6f6;
          }
        }
      }
      .moreWords {
        margin-top: 0.3rem;
        background-color: #f6f6f6;
        font-size: 0.34rem;
        padding-left: 0.35rem;
        div {
          line-height: 0.5rem;
        }
      }
      .moreWords-content {
        margin-top: 0.1rem;
        .mui-card-content {
          height: 2.5rem;
          border-color:transparent;
          textarea {
            font-size: 0.34rem;
            line-height: 0.5rem;
            height: 2.5rem;
            padding-left: 0.55rem;
            outline-style: none;
            border: none;
            &::placeholder {
              font-size: 0.34rem;
              line-height: 0.5rem;
              color: #d2d2d2;
            }
          }
        }
      }
      .confirm-btn {
        margin: 0.5rem 0;
        padding-right: 0;
        &:before {
          background-color: transparent;
        }
        .mui-btn {
          &:last-child {
            margin-right: 0.2rem;
          }
        }
        .mui-btn-default {
          background-color: #d2d2d2;
        }
      }
    }
  }
}
</style>
<script>
import paymentWaitCom from "@C/paymentPendingCom/paymentWaitCom.vue";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      count: 1,
      accounting: "15000",
      Urger: "李千万",
      overdue: "5",
      WayBillNum:'YIT168168820170801001'
    };
  },
  created() {},
  methods: {
    getReceivables() {
      this.$router.push({
        path: "/businessMyIndo/receivables",
        params: {
          // reminedPayId:this.$route.params.reminedPayId
        }
      });
    },
    PressPayment() {
      this.$root.eventBus.$emit("newsCount", this.count++);
      Toast({
        message: "催账成功",
        position: "middle",
        duration: 2000,
        className: "ToastCom"
      });
        //1.获取textarea中的值
        const content = this.$refs.textAreaRef.value; 
        console.log(content) ;
        //2.发送网络请求  
        
        //清空原先写的内容，跳至待收款列表页
        this.$refs.textAreaRef.value='';
        this.$router.push({
        path: "/businessMyIndo/businessMyList/2"
      });

    }
    
  },
  components: {
    paymentWaitCom,
    Toast
  }
};
</script>



