<template>
    <div class="billInfoExpensesWaitTpl">
        <paymentWaitCom></paymentWaitCom>
        <div class="billInfo-container">
            <div class="mui-content">
                <div class="mui-card">
                    <!--页眉，放置标题-->
                    <div class="mui-card-header">
                        <h4 class="colorGrey">账单信息</h4>
                    </div>
                    <!--内容区-->
                    <div class="mui-card-content">
                        <div class="mui-table">
                          <div class="mui-table-cell mui-col-xs-3 colorLightGrey">账单生成时间</div>
                          <div class="mui-table-cell mui-col-xs-9">{{ createDate | fmtDate('YY-MM-DD HH:MM')}}</div>                  
                        </div> 
                        <div class="mui-table">
                          <div class="mui-table-cell mui-col-xs-3 colorLightGrey">总运费</div>
                          <div class="mui-table-cell mui-col-xs-9">{{transportCost}}元</div>                  
                        </div>    
                        <div class="mui-table">
                          <div class="mui-table-cell mui-col-xs-3 colorLightGrey">报销费</div>
                          <div class="mui-table-cell mui-col-xs-9">{{extraCost}}元</div>                
                        </div>
                        <div class="mui-table">
                          <div class="mui-table-cell mui-col-xs-3 colorLightGrey">预收费</div>
                          <div class="mui-table-cell mui-col-xs-9">500</div>                
                        </div>    
                        <div class="mui-table">
                          <div class="mui-table-cell mui-col-xs-3 colorLightGrey">合计</div>
                          <div class="mui-table-cell mui-col-xs-9 colorRed">{{totalCost}}元&nbsp;&nbsp;<span class="colorLightGrey">注：(合计=总运费+报销费-预付费)</span>&nbsp;&nbsp;</div>              
                        </div>
                        <div class="mui-table">
                          <div class="mui-table-cell mui-col-xs-3 colorLightGrey">账单确认时间</div>
                          <div class="mui-table-cell mui-col-xs-9">{{ verifyDate | fmtDate('YYYY-MM-DD HH:MM')}}</div>                          
                        </div> 
                        <div class="mui-table">
                          <div class="mui-table-cell mui-col-xs-3 colorLightGrey">确认应收金额</div>
                          <div class="mui-table-cell mui-col-xs-9">{{handleCost}}元</div>                
                        </div>         
                    </div>
                </div>
             </div>
         </div> 
         <div class="businessPaid">
            <div class="mui-content">
                <div class="mui-card">
                    <!--页眉，放置标题-->
                    <div class="mui-card-header">
                        <h4 class="colorGreen">已确认收款金额 (元)</h4>
                    </div>
                    <!--内容区-->
                    <div class="mui-card-content">
                        <p><span class="">2017-09-10</span>&nbsp;收款&nbsp;&nbsp;&nbsp;<span class="colorGreen">{{Paid}}</span>&nbsp;元&nbsp;(已确认)</p>
                        <p><span class="">2017-09-10</span>&nbsp;收款&nbsp;&nbsp;&nbsp;<span class="colorGreen">{{Paid}}</span>&nbsp;元&nbsp;(待确认)</p>
                        <p>已确认合计<span class=""> 2000 </span>元，待确认合计：<span class=""> 1000 </span>元，合计<span class="colorBlue">7000</span>&nbsp;元</p>
                    </div>
                </div>
          </div>
          <div class="mui-content">
                <div class="mui-card">
                    <!--页眉，放置标题-->
                    <div class="mui-card-header">
                        <h4 class="colorGreen">待确认收款金额 (元)</h4>
                    </div>
                    <!--内容区-->
                    <div class="mui-card-content">
                        <p><span class="">2017-09-10</span>&nbsp;待确认&nbsp;&nbsp;&nbsp;<span class="colorGreen">{{Paid}}</span>&nbsp;元&nbsp;(已确认)</p>
                        <p><span class="">2017-09-10</span>&nbsp;待确认&nbsp;&nbsp;&nbsp;<span class="colorGreen">{{Paid}}</span>&nbsp;元&nbsp;(待确认)</p>
                        <p>已确认合计<span class=""> 2000 </span>元，待确认合计：<span class=""> 1000 </span>元，合计<span class="colorBlue">7000</span>&nbsp;元</p>
                    </div>
                </div>
          </div>
        </div>
        <div class="businessUnpaid">
            <div class="mui-content">
                <div class="mui-card">
                    <!--页眉，放置标题-->
                    <div class="mui-card-header">
                        <h4 class="colorRed">未收费用 (元)</h4>
                    </div>
                    <!--内容区-->
                    <div class="mui-card-content">
                        <p><span class="colorRed">{{Paid}}</span> 未收金额 = 确认应收费用-已收费用</p>
                    </div>
                  </div>
              </div>
      </div> 
       <p class="colorRed ReminedText"> &nbsp;*为了保障您的权益，请账单到期后再进行费用支付，提前支付对您的信用与美誉提升有帮助</p>        
       <div class="confirm-btn">
              <button type="button" class="mui-btn mui-btn-primary" @click="">收款明细</button>
              <button type="button" class="mui-btn mui-btn-warning">账单明细</button>
              <button type="button" class="mui-btn mui-btn-success">确认收款</button>
        </div>              
    </div>
</template>
<style lang="scss" scoped>
.billInfoExpensesWaitTpl {
  padding-top:.2rem;
  height: auto;
  .ReminedText{
    font-size: .28rem;
    padding:.15rem;
    line-height: .5rem;
    margin:0;
  }
  .mui-card-content {
    font-size: 0.32rem;
    color: #333333;
    padding-left: 0.15rem;
    height: auto;
  }
  .mui-table {
    margin-bottom: 0.3rem;
    .mui-table-cell{
        &:first-child{
            text-align: right;
            padding-right: .15rem;
        }
        &:nth-child(2){
            padding-left: .15rem;
        }
    }
  }
  .businessPaid {
    margin-top: 0.3rem;
    .mui-card-content {
      font-size: 0.34rem;
      color: #333333;
      // height: 1.8rem;
      // padding-left: 2.34rem;
      margin-bottom: 0.25rem;
      p {
        font-size: 0.34rem;
        color: #333333;
        line-height: .72rem;
      }
    }
  }
  .businessUnpaid {
    margin-top: 0.3rem;
    .mui-card-content {
      font-size: 0.32rem;
      color: #333333;
      line-height: .72rem;
      padding-left: 0.25rem;
      margin-bottom: 0.25rem;
      p {
        font-size: 0.34rem;
        color: #333333;
        line-height: 1.8rem;
        span {
          display: inline-block;
          font-size: 0.8rem;
          text-align: right;
        }
      }
    }
  }
  .confirm-btn{
    margin-top:0;
  }
}
</style>

<script>
import paymentWaitCom from "@C/paymentPendingCom/paymentWaitCom.vue";
export default {
  data() {
    return {
      Paid:1000,
      data:new Date(),
      createDate:'',
      transportCost:'',
      extraCost:'',
      totalCost:'',
      handleCost:'',
      verifyDate:'',
      handleCost:'',
      perpayment:'',
      handledCost:'',
      committedState:'',
      confirmedTotal:'',
      toBeConfirmedTotal:'',
      total:'',
      nonPayment:'',
      expenditureRecord:[],

    };
  },
  created() {
   this.get();
  },
  methods: {
    getData() {},
    async get(){
      try {
        let res = await api.GetBillInfo({ 
          billTime:new Date(),
          fhbId:this.$route.params.businessBillInfoId
        });
          console.log(res);
          this.$nextTick(function() {
          this.billMonth = res.billMonth;
          this.transportCost = res.transportCost;
          this.extraCost = res.extraCost;
          this.handleCost = res.handleCost;
          this.totalCost = this.extraCost + this.extraCost ;
          this.verifyDate = res.verifyDate;
          this.handleCost = res.handleCost;
          this.perpayment = res.perpayment;
          this.handledCost = res.handledCost;
          this.committedState = res.committedState;
          this.confirmedTotal = res.confirmedTotal;
          this.toBeConfirmedTotal = res.toBeConfirmedTotal;
          this.total = res.total;
          this.nonPayment = res.nonPayment;
          this.expenditureRecord = res.expenditureRecord;
          this.overDue = res.overDue;
          if(this.overDue==0){
            this.hasExpenditureRecord = '待付款';
          }else{
            this.overDue = '超期';
            this.hasExpenditureRecord = res.overDueDay + '天';
          }
            });
          } catch (e) {
            console.log(e);
          }
        },  
  },
  components: {
    paymentWaitCom
  }
};
</script>


