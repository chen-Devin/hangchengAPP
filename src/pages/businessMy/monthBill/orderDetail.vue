<template>
    <div class="orderDetail">
        <div class="container">
            <div class="top">
                <div class="item">
                    <p>应付费用(人民币元)</p>
                    <span class="total">353.40</span>
                </div>
                <div class="item">
                    <div class="left">
                        <span class="title">做柜时间</span>
                        <span class="content">2017/10/11</span>
                    </div>
                    <div class="right">
                        <span class="title">委托人</span>
                        <span class="content">安讯物流</span>
                    </div>
                </div>
            </div>
            <div class="top middle">
                <div class="item">
                    <span class="title" style="letter-spacing: .16rem;">订舱号</span>
                    <span class="content">YML2017080112450001</span>
                </div>
                <div class="item">
                    <div class="left">
                        <span class="title">箱号箱型</span>
                        <span class="content">YML2017080YML2</span>
                    </div>
                    <div class="right">
                        <span class="title">货&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重</span>
                        <span class="content">1650KG</span>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <span class="title">车&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;牌</span>
                        <span class="content">2017/10/11</span>
                    </div>
                    <div class="right">
                        <span class="title">司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机</span>
                        <span class="content">安讯物流</span>
                    </div>
                </div>
                <div class="item">
                    <div class="left">
                        <span class="title">提柜地点</span>
                        <span class="content">2017/10/11</span>
                    </div>
                    <div class="right">
                        <span class="title">还柜地点</span>
                        <span class="content">安讯物流</span>
                    </div>
                </div>
            </div>
            <p class="title">费用明细</p>
            <accuredFee></accuredFee> 
            <platformCost></platformCost>
            <businessUnPaid></businessUnPaid>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.orderDetail{
    height: auto;
    overflow: auto;
    .container{
        margin-bottom: 2rem;
        .top{
            background: #fff;
            .item{
                height: 2.6rem;
                padding: .5rem .45rem;
                border-bottom: solid 1px #ccc;
                p{
                    font-size: .35rem;
                    color: #333;
                    margin-bottom: .45rem;
                }
                .total{
                    font-size: .93rem;
                    color: #333;
                    font-weight: bold;
                }
                .left{
                    float: left;
                    width: 58%;
                }
                .right{
                    float: right;
                    width: 38%;
                }
                .title{
                    font-size: .4rem;
                    color: #828181;
                    width: 1.7rem;
                    display: inline-block;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    vertical-align: -.05rem;
                }
                .content{
                    font-size: .4rem;
                    color: #333;
                    display: inline-block;
                    // margin-left: .28rem;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    vertical-align: -.06rem;
                    padding-left: .2rem;
                    width: 80%;
                }
                .left .content{
                    width: 67%;
                }
                .right .content{
                    width: 50%;
                }
            }
            .item + .item{
                height: 1.2rem;
                padding: .25rem .45rem;
                border-bottom: solid 1px #ccc;
            }
        }
        .middle{
            margin-top: .3rem;
            border-top: solid 1px #ccc;
            .item{
                height: 1.2rem;
                padding: .25rem .45rem;
            }
        }
        p.title{
            font-size: .4rem;
            margin: .5rem 0 -.26rem .4rem;
        }
    }
}

</style>
<script>
import { MessageBox } from 'mint-ui';
import detailCom from '@C/detailCom';
import accuredFee from '@C/businessBill/accuredFee.vue'
import platformCost from '@C/businessBill/platformCost.vue'
import businessUnPaid from '@C/businessBill/businessUnPaid.vue'
export default {
    data() {
        return {
            
        }
    },
    created() {
        
    },
    methods: {
        noCallin: function(){
            this.$router.go(-1);
        },
        callin: function(){
            MessageBox.confirm('您确认要将选择单证调入2017年11月账单内吗?',"调入单证").then(action => {
                MessageBox.alert('操作成功').then(action => {
                
                });
            });
        }
    },
    components:{
        detailCom,
        accuredFee,
        platformCost,
        businessUnPaid
    }
}
</script>



