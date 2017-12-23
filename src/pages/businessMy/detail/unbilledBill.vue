<template>
   <div class="unbilledBillTpl">
        <mt-swipe :auto="0" :show-indicators="false">
            <mt-swipe-item v-for="n in 4" :key="n">
                <mt-navbar v-model="selected">
                        <!-- <mt-tab-item id="n"  v-for="n in 4" :key="n">海格物流</mt-tab-item> -->
                        <mt-tab-item id="1">海格物流</mt-tab-item> 
                        <mt-tab-item id="2">安讯物流</mt-tab-item>
                        <mt-tab-item id="3">有信达物流</mt-tab-item>
                </mt-navbar>
                        <!-- tab-container -->
                    <!-- {{Logistics}} -->      
            </mt-swipe-item>  
      </mt-swipe> 
      <mt-tab-container v-model="selected">
                        <mt-tab-container-item id="1">
                            <div class="accountAmountContainer">
                                <div class="accountAmount"><span>已对帐金额</span>&nbsp;&nbsp;&nbsp;{{accountAmount}}</div>
                                <div class="outstandingAccount"><span>未对帐金额</span>&nbsp;&nbsp;&nbsp;{{outstandingAccount}}</div>
                            </div>
                            <detailCom :status="status" v-for="n in 4" :key="n"></detailCom> 
                            <!-- <mt-cell v-for="n in 10" :title="'内容 ' + n" /> -->
                        </mt-tab-container-item>
                        <mt-tab-container-item id="2">
                            <!-- <mt-cell v-for="n in 4" :title="'测试 ' + n" /> -->
                        </mt-tab-container-item>
                        <mt-tab-container-item id="3">
                            <!-- <mt-cell v-for="n in 6" :title="'选项 ' + n" /> -->
                        </mt-tab-container-item>
      </mt-tab-container>             
   </div> 
</template>
<style lang="scss" scoped>
.unbilledBillTpl {
  width: 100%;
  height: 12rem;
  .accountAmountContainer {
    margin-top: 0.3rem;
    font-size: 0.4rem;
    display: flex;
    justify-content: space-around;
    height: 1.95rem;
    border: 1px solid #d2d2d2;
    background-color: #fff;
    margin-bottom: 0.3rem;
    div {
      line-height: 1.95rem;
      span {
        color: #575757;
      }
    }
  }
  .accountAmountContainer[data-v-63164c42] {
    padding: 0;
  }
  .detailComTpl /deep/ {
    background-color: #fff;
    border-bottom: 1px solid #d2d2d2;
    height: 1.95rem;
    .mui-table {
      padding: 0 0.55rem;
      height: 1.95rem;
    }
  }
  .mint-swipe {
    height: 1.38rem;
    .mint-swipe-items-wrap {
      .mint-navbar {
        .mint-tab-item {
          font-size: 0.4rem !important;
          height: 1.35rem;
          line-height: 1.35rem;
          color: #242424;
          .mint-tab-item-label {
            font-size: 1.4rem !important;
            line-height: 1.35rem;
            color: #242424;
          }
        }
      }
    }
  }
  .accountAmountContainer {
    padding-top: 0.15rem;
  }
}
</style>
<style lang="scss">
.unbilledBillTpl {
  .mint-swipe-items-wrap {
    width: 100%;
    .mint-tab-item[data-v-63164c42] {
      width: 33.33%;
      .mint-tab-item-label {
        font-size: 0.4rem !important;
        line-height: 0.4rem;
        color: #242424;
      }
    }
  }
  // .mint-swipe-indicator {
  //   position: absolute;
  //   bottom: 0.2rem !important;
  //   left: 50%;
  //   transform: translateX(-50%);
  //   background-color: transparent;
  // }
}
</style>
<script>
import { Swipe, SwipeItem } from "mint-ui";
import { Navbar, TabItem } from "mint-ui";
import detailCom from "@C/detailCom";
export default {
  data() {
    return {
      LogisticsList: ["海格物流"],
      accountAmount: "￥23415.25",
      outstandingAccount: "￥23415.25",
      selected: "1"
    };
  },
  created() {},
  methods: {},
  components: {
    Swipe,
    SwipeItem,
    Navbar,
    TabItem,
    detailCom
  },
  props: ["status"]
};
</script>


