<template>
    <div class='tmplBusinessInfo'>
      
      <div class="flexTop">
        <mt-cell class="tit" title="我的业务"  to="/businessMyIndo/businessMyList/0"  is-link  value="查看更多的业务"></mt-cell>

        <mt-tabbar class="tabbar">
          <mt-tab-item>
            <router-link to="/businessMyIndo/businessMyList/1">
              <!-- <img src="../assets/image/tubiao/1.png"> -->
              <img src="../../assets/image/tubiao/1.png">
              <div>待对账</div>
            </router-link>
          </mt-tab-item>

          <mt-tab-item >
            <router-link to="/businessMyIndo/businessMyList/2">
              <img src="../../assets/image/tubiao/2.png">
              <div>待付款</div>
            </router-link>
          </mt-tab-item>

          <mt-tab-item class="">
            <router-link to="/businessMyIndo/businessMyList/3">
              <img src="../../assets/image/tubiao/3.png">
              <div>待收款</div>
            </router-link>
          </mt-tab-item>

          <mt-tab-item>
            <router-link to="/businessMyIndo/businessMyList/4">
              <img src="../../assets/image/tubiao/4.png">
              <div>待评价</div>
            </router-link>
          </mt-tab-item>

          <mt-tab-item>
            <router-link to="/businessMyIndo/businessMyBill">
              <img src="../../assets/image/tubiao/5.png">
              <div v-for="(item,index) in waitArr">月账单{{item.waybillAddress}}</div>
            </router-link>
          </mt-tab-item>
        </mt-tabbar>
      </div>
      <div class="prBottom">
        <div v-for="(item,index) in waitArr"><businessNow2 :isShowRightBoxs = 'true' :waitData = 'item' :isHideH = 'index == 0?true:""'></businessNow2></div>
        <div v-for="(item,index) in runingArr"><businessNow2 :isShowRightBoxs = 'true' :waitData = 'item' :isHideH = 'index == 0?true:""'></businessNow2></div>
        <div v-for="(item,index) in runingArr"><businessNow2 :isShowRightBoxs = 'true' :waitData = 'item'></businessNow2></div>
      </div>
    </div>

</template>
    
<script>
import businessNow2 from '@C/businessView/businessNow2.vue'
import businessWait from '@C/businessView/businessWait.vue'
import api from '../../fetch/api'
import { axiosByGet } from '../../fetch/axiosUtils';

export default {
    data() {
        return {
          data : new Date(),
          objs:[],
          typeDatas1Ts:'出口',
          typeDatas2Ts:'月结',
          waitArr:[],
          runingArr:[],
        }
    },
    created() {
          this.get();   
    },
    methods: {
      getData(){

      },
      async get(){
        try {
          // debugger;
            let res = await api.GetBusinessMy();
            console.log(res);
            this.$nextTick(function(){
              this.runingArr = res.runing;
              console.log(this.runingArr);
              this.waitArr = res.wait;
            })
            
        } 
        catch (e) {
            console.log(e);
        }
      }

    },
    components:{
      businessNow2,
      businessWait
    }
}
</script>
<style lang = 'scss'>
  .tmplBusinessInfo {
    display: flex;
    height: 100%;
    flex-direction:column ;
    .flexTop{
      top: 1.6rem;
      right: 0;
      left: 0;
      position: fixed;
      z-index: 1;
      .tabbar.mint-tabbar{            
        top:0;
        height: 2rem;
        background-color: #ffffff;
        position: relative;
        .mint-tab-item.is-selected{
          background-color: #fff;
        }
        a{
        font-size: .4rem;
        line-height: .50rem; 
        margin-top:0;
        color: #333;
        }
        img{
          padding-top: .1rem;
          width: .8rem;
        }     
      }
    }

    h3{
        color: #666;
        font-size: .4rem;
        margin: .68rem 0 .2rem .3rem;
    }
    .prBottom{
        position: relative;
        top:3rem;
    }
    [v-cloak] {
      display: none;
    }
  }
</style>
