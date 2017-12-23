<template>
    <div class="paymentWaitComTpl">
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
                        <businessTypeBox  class="box_l mui-media-object mui-pull-left"  :commentType = '1' :typeData = 'typeDatas2' dataRate = '2017.8'></businessTypeBox>
                        <div class="mui-media-body">
                            <p>账单周期8.1-8.31,共十票12个柜，含渡柜</p>
                            <p>总费用81451.25元，已付14039.10元</p>
                        </div>
                        <div class="rightRate mui-pull-right colorYellow">{{rightRate}}</div>
                        <!-- <businessTypeBoxRight v-show="isShowRightBox" class="box_l mui-media-object mui-pull-right"  :commentType = '2' :typeData = 'typeDatas2' dataRate = '12578'></businessTypeBoxRight> -->
                    </router-link>                    
                </div>
                <!--页脚，放置补充信息或支持的操作-->
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .paymentWaitComTpl{
        .mui-content{
            .mui-card{
                .mui-card-content{
                    padding-right: .15rem;
                    .tmplBusinessTypeBox /deep/{
                        .box{
                            .boxTop{
                             font-size: .28rem;
                            }
                            .boxBottom{
                             font-size: .28rem;
                            }
                        }
                    }
                    .rightRate{
                        font-size: .40rem;
                        line-height:1.1rem ;
                        
                    }
                }
            }
        }
    }
</style>
<script>
import businessTypeBox from '@C/businessTypeBox.vue'
// import businessTypeBoxRight from '@C/businessTypeBoxRight.vue'
export default {
    data() {
        return {
            data : new Date(),
            typeDatas1 : '出口',
            typeDatas2 : '月账单',
            // isShowRightBox:false,
            count:2,
            rightRate:'￥15000.00',
            billInfo:{}
        }
    },
    created() {
        this.getBillInfomation();
    },
    methods: {
        getBillInfomation(){
            this.billInfo = this.billInfomation;
        }
    },
    components:{
      businessTypeBox,  
    //   businessTypeBoxRight   
    },
    computed:{
        
    },
    props:['isShowRightBoxs','billInfomation']
}
</script>

