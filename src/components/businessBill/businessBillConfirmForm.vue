<template>
  <div class="conformerTpl-footer">
            <p class="colorRed">* 请您认真核对单证费用，费用经双方确认后不能更改，到期后按双方确认的费用收款。</p>
            <!-- <mt-checklist title="" v-model="value" :options="['我确认以上单证费用属实，不存在费用异议']">
            </mt-checklist> -->
            <div class="mui-content">
                <form class="mui-input-group">
                    <div class="checkbox">
                        <input name="checkbox" id="promise" value="0" type="checkbox" v-model="checked">
                        <label for="promise">我确认以上单证费用属实，不存在费用异议。</label>            
                    </div>
                    <div class="confirm-btn">
                            <button type="button" class="mui-btn mui-btn-success">电话沟通</button>
                            <button type="button" class="mui-btn mui-btn-danger" @click="objectionShow">异议</button>
                            <button type="button" class="mui-btn mui-btn-warning" @click="costComparisonShow">对比</button>
                            <button type="button" class="mui-btn mui-btn-primary" @click="confirmedInfo">确认</button>
                    </div> 
			          </form>
                <mt-popup v-model="popupVisible" position="bottom" class="popup">
                    <div class="objection-box">
                        <form action="">
                            <div class="form-group">
                                <label for="waitFor">待收金额为：</label>
                                <input type="text" name="" placeholder="请输入金额" class="waitForFee" id="waitFor" v-model="waitForFee">    
                            </div>
                            <div class="form-content">
                                <p>请输入异议原因</p>
                                <textarea ref="textAreaRef" class="objection-content" v-model="objection" placeholder="请输入异议原因，包括费用、付款时间等信息，方便付款方查找原因。"></textarea> 
                                <div class="objection-btn">
                                    <button type="button" class="mui-btn mui-btn-gray" @click="noObjection">我没异议</button>
                                    <button type="button" class="mui-btn bgBlue submit-btn mui-btn-blue" @click="myObjection">我的异议</button>  
                                </div>
                            </div>
                        </form>   
                    </div>
                </mt-popup>
                <mt-popup position="bottom" class="popup" v-model="popupVisible2" id="popup2">
                    <div class="objection-box">
                        <form action="" class="form2">
                         <p class="form-group form-title">费用对比<span class="mui-icon mui-icon-close" @click="clickClose"></span></p>
                            <div class="form-content" id="form-content">
                                <ul>
                                    <li class="popup-header">
                                        <div class="header-l">运费</div>
                                        <div class="header-c">报销</div>
                                        <div class="header-r">已收</div>
                                    </li>
                                    <li>
                                        <ul class="mui-table-view">
                                            <li class="mui-table-view-cell" v-for="n in 3" :key="n">
                                                <comparisonFeeCom></comparisonFeeCom>  
                                            </li>
                                        </ul>
                                   </li>
                                </ul>
                                <waiteForCom></waiteForCom> 
                            </div>
                            </form>  
                    </div>
                 </mt-popup> 
                <!-- <costComparison @hidePanel="costComparisonHide" v-show="panelShow" :panelShow="panelShow"></costComparison> -->
                 <mt-popup position="bottom" class="popup" v-model="popupVisible3" id="popup3">
                     <div class="objection-box">
                        <form action="" class="form2">
                         <p class="form-group form-title">费用对比<span class="mui-icon mui-icon-close" @click="clickClose"></span></p>
                            <div class="form-content" id="form-content">
                                <ul>
                                    <li class="popup-header">
                                        <div class="header-l">费用名称</div>
                                        <div class="header-c">预期费用(元)</div>
                                        <div class="header-r">确认费用(元)</div>
                                    </li>
                                    <li>
                                        <ul class="mui-table-view">
                                            <li class="mui-table-view-cell">
                                                <div>运费</div>
                                                <div>145.15</div>
                                                <div>0.00</div>  
                                            </li>
                                            <li class="mui-table-view-cell">
                                                <div>过磅费</div>
                                                <div>145.15</div>
                                                <div>0.00</div>  
                                            </li>
                                            <li class="mui-table-view-cell">
                                                <div>高速费</div>
                                                <div>145.15</div>
                                                <div>0.00</div>  
                                            </li>
                                            <li class="mui-table-view-cell">
                                                <div>其他费</div>
                                                <div>145.15</div>
                                                <div>0.00</div>  
                                            </li>
                                            <li class="mui-table-view-cell">
                                                <div>预付款</div>
                                                <div>145.15</div>
                                                <div><span class="colorRed">0.00</span></div>  
                                            </li>
                                            <li class="mui-table-view-cell">
                                                <div>服务费</div>
                                                <div>145.15</div>
                                                <div>0.00</div>  
                                            </li>
                                            <li class="mui-table-view-cell">
                                                <div>旺季加价</div>
                                                <div>145.15</div>
                                                <div>0.00</div>  
                                            </li>
                                            <li class="mui-table-view-cell">
                                                <div>应收费用</div>
                                                <div>145.15</div>
                                                <div><span class="colorRed">0.00</span></div> 
                                            </li>
                                        </ul>
                                   </li>
                                </ul>
                                <waiteForCom v-if="iswaiteForCom"></waiteForCom> 
                            </div>
                            </form>  
                    </div>
                 </mt-popup> 
            </div>    
        </div>    
</template>
<style lang="scss" scoped>
.conformerTpl-footer {
  margin: 0.25rem;
  font-size: 0.32rem;
  height: auto;
  p {
    font-size: 0.28rem;
    line-height: 0.42rem;
  }
  form {
    background-color: transparent;
    margin: 0.3rem -0.15rem 0;
    border: none;
    .form-group {
      border-bottom: 1px solid #bcbcbc;
      padding: 0 0.35rem 0.25rem 0.35rem;
      label {
        font-size: 0.4rem;
      }
      .waitForFee {
        width: 75%;
        outline: none;
        border: none;
        height: 0.4rem;
        font-size: 0.4rem;
        &::placeholder {
          color: #d2d2d2;
        }
      }
    }
    .form-title {
      margin: 0;
      height: 100%;
      position: relative;
      font-size: 0.4rem;
      text-align: center;
      color: #333333;
      padding-bottom: 0.45rem;
      span {
        position: absolute;
        right: 0.35rem;
        font-size: 0.5rem;
      }
    }
    .checkbox {
      padding-left: 0.1rem;
      input {
        width: 0.4rem;
        height: 0.4rem;
        vertical-align: bottom;
      }
    }
  }
  .form2 {
    #form-content {
      padding: 0.4rem 0.35rem;
      .mui-content {
        .businessConfirmed-waited {
          margin-top: 0;
        }
      }
      ul {
        border: 1px solid #e5e5e5;
        .popup-header {
          display: flex;
          justify-content: space-between;
          height: 0.8rem;
          background-color: #e5e5e5;
          div {
            line-height: 0.8rem;
            padding: 0 0.4rem;
            width: 33.33%;
          }
          .header-l {
            padding-left: 0.5rem;
            text-align: left;
          }
          .header-r {
            padding-right: 1rem;
            text-align: center;
          }
          .header-c {
            padding-right: 1rem;
            text-align: center;
          }
        }
        .mui-table-view-cell {
          padding: 0;
        }
      }
    }
  }
  .mui-input-group:after {
    background-color: transparent;
  }
  .mui-input-group:before {
    background-color: transparent;
  }
  .mint-popup-bottom {
    width: 100%;
    padding: 0.25rem 0.15rem 0;
    height: 12rem;
    .objection-box {
      width: 100%;
      .form-content {
        padding: 0.65rem 0.72rem 0;
        p {
          font-size: 0.4rem;
          text-align: center;
          line-height: 0.4rem;
          margin-bottom: 0.65rem;
          color: #333333;
        }
        .objection-content {
          width: 100%;
          height: 7rem;
          background-color: #eeeeee;
          border: none;
          border-radius: 0.1rem;
          font-size: 0.4rem;
          padding: 0.25rem;
          &::placeholder {
            color: #fcfcfc;
            font-size: 0.4rem;
            line-height: 0.7rem;
          }
        }
        .objection-btn {
          display: flex;
          justify-content: space-between;
          padding-top: 0.15rem;
          .mui-btn {
            width: 4rem;
            height: 1.2rem;
            font-size: 0.4rem;
            border-radius: 0.1rem;
          }
        }
      }
    }
  }
  #popup2 {
    height: 11.2rem;
  }
  #popup3 {
    waiteforcom {
      display: none;
    }
    height: 10rem;
    .form-content {
      padding: 0;
      ul {
        border: none;
        .popup-header {
          background-color: transparent;
          font-size: 0.4rem;
          height: 1.2rem;
          div {
            line-height: 1.2rem;
            padding: 0;
          }
        }
      }
      .mui-table-view {
        &:after {
          background-color: transparent;
        }
        .popup-header {
          text-align: center;
        }
        .mui-table-view-cell {
          display: flex;
          justify-content: space-around;
          height: 0.86rem;
          &:after {
            background-color: transparent;
          }
          div {
            width: 33.33%;
            font-size: 0.4rem;
            line-height: 0.86rem;
            text-align: center;
          }
          &:last-child {
            border-top: 1px solid #bcbbbb;
            div {
              line-height: 1.3rem;
            }
          }
        }
      }
    }
  }
}
</style>
<script>
import { Popup } from "mint-ui";
// import costComparison from '@C/businessBill/costComparison.vue'
import comparisonFeeCom from "@C/businessBill/comparisonFeeCom.vue";
import waiteForCom from "@C/businessBill/waiteForCom.vue";
import api from '../../fetch/api'
import { axiosByGet } from '../../fetch/axiosUtils';
export default {
  data() {
    return {
      popupVisible: false,
      checked: "checked",
      waitForFee: "",
      objection: "",
      //   panelShow:true,
      popupVisible2: false,
      popupVisible3: false,
      iswaiteForCom: true,
      confirmed: "",
      feeList:[]
    };
  },
  created() {
    this.get();
  },
  methods: {
    async get(){
      try {
          let res = await api.GetBusinessCon();
          console.log(res); 
      } 
      catch (e) {
          console.log(e);
      }
    },
    getObjection() {},
    objectionShow() {
      this.popupVisible = true;
    },
    noObjection() {
      this.popupVisible = false;
    },
    myObjection() {
      //  const content = this.$refs.textAreaRef.value;
      // const formData = new forData();
      this.popupVisible = false;
    },
    costComparisonShow() {
      //   this.panelShow = true;
      //  this.popupVisible2 = true;
      var res = {
        code: "SUCCESS",
        msg: "成功",
        objects: [
          {
            receivedTransportCost: 345.54,
            handledPaidCost: 0,
            carNo: "粤B125987",
            arkNo: "TEMU4437714",
            receivedExtraCost: 345.45,
            receivedPaidCost: 0,
            soNumber: "SO34532452345",
            handledTransportCost: null,
            handledExtraCost: null
          },
          {
            receivedTransportCost: 345.54,
            handledPaidCost: 0,
            carNo: "粤B125987",
            arkNo: "TEMU4437714",
            receivedExtraCost: 345.45,
            receivedPaidCost: 0,
            soNumber: "SO34532452345",
            handledTransportCost: null,
            handledExtraCost: null
          }
        ]
      };
      const url = ":http://127.0.0.1:8080/ucenter/finance/monthBillCostComparison.shtml?receivedId=23"
      console.log(url);
      const _this = this;
      // this.$axios.get(url).then(function(res) {
      //     // console.log(res)
      //     _this.billHistoryList = res.objects.list;
      //   })
      //   .catch(function(res) {});
       _this.count = res.objects.count;
       _this.createDate = res.objects.createDate;
       _this.creator = res.objects.creator;
       _this.handlerCost = res.objects.handlerCost;

    
      this.popupVisible3 = true;
      if (this.popupVisible3) {
        this.iswaiteForCom = false;
      } else {
        this.iswaiteForCom = true;
      }
    },
    clickClose() {
      //    this.panelShow = false;
      this.popupVisible2 = false;
      this.popupVisible3 = false;
    },
    confirmedInfo() {
      if (this.typeDatas2 == "现结") {
        this.$router.push({
          path: "/businessMyIndo/businessFeeConfirmed/:businessFeeConfirmedId",
          params: {
            businessFeeConfirmedId: this.$route.params.businessFeeConfirmedId
          }
        });
      } else {
        this.$router.push({
          path: "/businessMyIndo/businessFeeConfirmed/:businessFeeConfirmedId",
          params: {
            businessFeeConfirmedId: this.$route.params.businessFeeConfirmedId
          }
        });
      }
    }
  },
  components: {
    Popup,
    comparisonFeeCom,
    //   costComparison,
    waiteForCom
  },
  props: ["objectionId"]
};
</script>


