<template>
    <div class='tmplBusinessMyList'>
        <div>
        <mt-navbar v-model="selected" fixed>
            <mt-tab-item id="0">全部</mt-tab-item>
            <mt-tab-item id="1">待对账</mt-tab-item>
            <mt-tab-item id="2">待收款</mt-tab-item>
            <mt-tab-item id="3">待付款</mt-tab-item>
            <mt-tab-item id="4">月账单</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="0">
                <!-- <mt-cell v-for="n in 10" :key="n"   :title="'content ' + n" /> -->
                <!-- <mt-cell v-for="n in 10" :key="n"   :title="'content ' + n"> -->
                    <!-- <div v-for="n in 10" :key="n">你是二笔{{ n }}</div> -->
                    <businessWait v-for="n in 6" :key="n" :commentTypeS='1' :waitType1T = '0' :typeDatas1T="typeDatas1Ts + n" :typeDatas2T = "typeDatas2Ts + n"></businessWait>
                <!-- </mt-cell>         -->
            </mt-tab-container-item>
            <mt-tab-container-item id="1">
                <!-- <mt-cell v-for="n in 4"  :key="n" :title="'content ' + n" /> -->
                <businessWait v-for="n in 10" :key="n" :commentTypeS='2' :waitType1T = '1' :typeDatas1T="typeDatas1Ts + n" :typeDatas2T = "typeDatas2Ts + n"></businessWait>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <businessWait v-for="n in 5" :key="n" :commentTypeS='2' :waitType1T = '2' :typeDatas1T="typeDatas1Ts + n" :typeDatas2T = "typeDatas2Ts + n"></businessWait>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <businessWait v-for="n in 3" :key="n"  :commentTypeS='1' :waitType1T = '3' :typeDatas1T="typeDatas1Ts + n" :typeDatas2T = "typeDatas2Ts + n"></businessWait>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <businessWait v-for="n in 3" :key="n" :commentTypeS='1' :waitType1T = '4' :typeDatas1T="typeDatas1Ts + n" :typeDatas2T = "typeDatas2Ts + n"></businessWait>
            </mt-tab-container-item>
        </mt-tab-container>
        
        </div>
    </div>
</template>
    
<script>
import { Navbar, TabItem } from 'mint-ui';
import businessWait from '@C/businessView/businessWait.vue'
import paymentWait from '@C/paymentPendingCom/paymentWait.vue'
import api from '../../fetch/api'
import { axiosByGet } from '../../fetch/axiosUtils';
export default {
    data() {
        return {
            selected:'2',
            typeDatas1Ts:'出口',
            typeDatas2Ts:'月结',
            paymentList:[],

        }
    },
    created() {
        this.getRouteId();
        this.get();
        // this.getPaymentListData()
    //   this.GetPaymentDetail();
       
    },
    methods: {
        getRouteId(){
            console.log(this.$route.params.businessMyListId);
            console.log(Navbar.name);
            this.selected = this.$route.params.businessMyListId
        },
       async get(){
        try {
            let res = await api.GetBusinessMy();
            console.log(res);
            // console.log(123);
            // this.objs = res.concat(res);
        } catch (e) {
            console.log(e);
            }
        },
   
    },
    components:{
        Navbar,
        TabItem,
        businessWait,
        paymentWait,
    }
}
</script>

<style lang = 'scss'>
.tmplBusinessMyList{
    
    .mint-navbar{
        height: 1.4rem;
        top: 1.6rem;
        border-bottom: 0.08rem solid #fff;
        .mint-tab-item{
            padding: 0;
            .mint-tab-item-label{
                line-height: 1.4rem;
                font-size: 0.45rem;
                color: #333;
            }
        }
        .is-selected{  
            border-bottom  : 0.08rem solid  #27a2f0;      
            .mint-tab-item-label{
                color: #27a2f0;
            }
        }
        
    }
    .mint-tab-container{
        top: 1.53rem;
        .tmplBusinessWait{
            margin-bottom: .36rem;
        }
    }
}
</style>