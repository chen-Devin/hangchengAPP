<template>
    <div class="billTpl-container">
        <div class="mui-card billTpl" style="margin-bottom: 0.72rem;">
            <ul class="mui-table-view mui-table-view-chevron bill-title">
                <li class="mui-table-view-cell mui-media">
                    <div class="bill-title-l mui-pull-left">
                        <div class="div-orange"></div>
                    </div>
                    <div class="bill-title-c mui-pull-left">
                        <p>张国富</p>
                        <p>2017年11月账单</p>
                    </div>
                    <div class="bill-title-r mui-pull-right div-round">本期</div>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <div class="mui-media-object mui-pull-right amount">￥13808.24</div>
                        <div class="mui-media-body">
                            运费总额
                            <p class='mui-ellipsis'>账单确认截止日&nbsp;11/5</p>
                        </div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <div class="mui-media-object mui-pull-right amount">￥6849.9</div>
                        <div class="mui-media-body">
                            报销总额
                            <p class='mui-ellipsis'>收款时间</p>
                        </div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <div class="mui-media-object mui-pull-right amount">￥13808.24</div>
                        <div class="mui-media-body">
                            应收总额
                            <p class='mui-ellipsis'>账单确认截止日</p>
                        </div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media">
                    <a href="javascript:;">
                        <div class="mui-media-object mui-pull-right amount">￥6849.9</div>
                        <div class="mui-media-body">
                            待收金额
                            <p class='mui-ellipsis'>收款时间</p>
                        </div>
                    </a>
                </li>	
            </ul>
        </div>
        <div class="bill-btn">
            <!-- <router-link :to="{ path:'/home/game', query: { status:  1} }"><button type="button" class="mui-btn">账单明细</button></router-link> -->
            <button type="button" class="mui-btn" @click="monthDetail">账单明细</button>
            <button type="button" class="mui-btn" @click="adjustMoney">金额调整</button>
            <button type="button" class="mui-btn" @click="submitBill">账单确认</button>
        </div>
    </div>  
</template>
<style lang="scss" scoped>
.billTpl-container{
    padding: 0 1.08rem;
    .billTpl{
        padding: 0;
        border-bottom: none;
        .mui-table-view .mui-media-object{
            max-width:none;
            line-height: .88rem;
            height: auto;
        }
        .mui-table-view-chevron .mui-table-view-cell {
            padding-right: 10px;
            padding: .22rem .46rem;
            > a:not(.mui-btn){
                margin-right: 0;
                padding-right: 0;
            }
        }
        .bill-title{
            li{
                .div-orange{
                    width: 20%;
                    display: inline-block;
                    width: 0.9rem !important;
                    height: 0.9rem;                    
                    background-color: #D65124;
                    text-align: center;
                    line-height: 0.9rem;
                    margin-top: 0.15rem;
                }
                .bill-title-c{
                    width: 60%;
                    p{
                        font-size:.40rem;
                        color:#000;
                        line-height:.6rem;
                        padding-left: 0.33rem;
                    }
                }
                .div-round{
                    width: 20%;
                    display: inline-block;
                    width: 1.1rem;
                    height: 1.1rem;                    
                    color: #D65124; 
                    border:1px solid #D65124; 
                    border-radius: 50%;
                    text-align: center;
                    line-height: 1.1rem;
                    margin-bottom: .25rem;
                    font-size: .42rem;
                }
                &:first-child{
                    height: 1.6rem;
                    padding-right: .3rem;
                }
                &:nth-child(2n+1) {
                    a{
                        .mui-media-body{
                            p{
                                color:#63C95B;
                            }
                        }
                    }             
                }     
                a{
                    .amount{
                        font-size: .40rem;
                    }
                    .mui-media-body{
                        font-size: .40rem;
                        p{
                            font-size: .24rem;
                            color:#F14242;
                            margin-top: 0.1rem;
                            line-height: initial;
                        }
                    }
                }
            }
        }
    }
    .bill-btn{
        background-color:#26A2FF; 
        display: flex;
        text-align: center;
        justify-content: space-between;
        padding:0 .2rem;
        .mui-btn{
            color:#0fa4e0;
            font-size: .4rem;   
            line-height: inherit;
            
        }
    }
}
.mint-msgbox-title{
    text-align: left;
    margin-left: .5rem;
}
</style>

<script>
import { MessageBox } from 'mint-ui';
export default {
    data(){
        return{
            billArr:[],
            status: 0   //账单是否提交
        }
    },
    created(){
        this.billConfirm();
    },
    methods:{
        billConfirm(id){
        },
        monthDetail: function(){
            if (this.status == 0) {
                this.$router.push({path: '/businessMy/monthBill/uncommittedMonthDetail', query: {selected: "2"}});
            } else {
                this.$router.push({path: '/businessMyIndo/monthDetail/:monthDetailId'});
            }
        },
        adjustMoney: function(){
            MessageBox.prompt(" ", "待收金额调整").then(({ value, action }) => {
                MessageBox.alert('操作成功').then(action => {
                
                });
            });
        },
        submitBill: function(){
            MessageBox.confirm('您确认要提交账单吗?',"提交账单").then(action => {
                MessageBox.alert('提交成功').then(action => {
                
                });
            });
        }
    }
}
</script>



