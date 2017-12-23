<template>
    <div class="myBillTmpl">
        <businessSwiper></businessSwiper> 
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                    <router-link :to="'/businessMy/detail'">
                        <!-- <span class="mui-icon mui-icon-home"></span> -->
                        <img src="../../assets/image/tubiao/6.png">
                        <div class="mui-media-body">历史账单</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                    <router-link :to="'/businessMy/unbilledBill'">
                        <!-- <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span> -->
                        <img src="../../assets/image/tubiao/7.png">
                        <div class="mui-media-body">未出账单</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                    <router-link :to="''">
                        <img src="../../assets/image/tubiao/8.png">
                        <div class="mui-media-body">账单设置</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3">
                    <router-link :to="''">
                        <img src="../../assets/image/tubiao/9.png">
                        <div class="mui-media-body">生成账单</div>
                    </router-link>
                </li>
            </ul> 
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .myBillTmpl{
        width: 100%;
        height: 2.14rem;
        .mui-content{
            .mui-table-view{
                height: 100%;
                .mui-table-view-cell{
                    height: 100%;
                    padding-top: 0;
                    padding-bottom: 0;
                    img{
                        width: 50%;
                    }
                    .mui-media-body{
                        height: 100%;
                        font-size:.34rem ;
                        line-height: .34rem;
                        margin-top: .15rem;
                    }
                }
                &:first-child{
                    margin: 0;
                }
            }
        }
    }
</style>
<script>
import { Navbar, TabItem } from 'mint-ui';
import businessSwiper from '@C/businessBill/businessSwiper.vue'
export default {
   data() {
        return {
            
        }
    },
    created() {
       
    },
    methods: {
        
    },
    components:{
       businessSwiper
    }
}
</script>

