<template>
    <div class="waybillDetail">
        <div class="companyInfoBox">
            <div class="companyInfo">
                <p class="name">深圳市捷联运通物流有限公司</p>
                <p class="nameE">SHENZHEN JIELIANYUNTONG LOGISTICS CO.,LTD</p>
                <p class="address">深圳市盐田区东海大道和亨家园16A03室</p>
                <p class="phone"><span>TEL:0755-25039529</span><span>FAX:0755-25039529</span></p>
            </div>
        </div>
        
        <h3>托运单</h3>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">客户信息</mt-tab-item>
            <mt-tab-item id="2">作业信息</mt-tab-item>
            <mt-tab-item id="3">车辆信息</mt-tab-item>
            <mt-tab-item id="4">客户反馈</mt-tab-item>
            <mt-tab-item id="5">托运须知</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div class="itemBox" v-for="index in 3" :key="index">
                    <div class="item">
                        <span class="title">收交货人</span>
                        <span class="content">东莞大东来鞋厂/罗小姐/13798571201罗小姐</span>
                    </div>
                    <div class="item">
                        <span class="title">装卸货地</span>
                        <span class="content">东莞大东来鞋厂/罗小姐/13798571201罗小姐</span>
                    </div>
                    <div class="item">
                        <span class="title">做柜时间</span>
                        <span class="content">东莞大东来鞋厂/罗小姐/13798571201罗小姐</span>
                    </div>
                    <div class="item auto">
                        <span class="title">装卸备注</span>
                        <p class="content">东莞大东来鞋厂/罗小姐/13798571201罗小姐</p>
                    </div>
                </div>
                <div class="itemBox">
                    <div class="item last">
                        <span class="title">报关方式</span>
                        <span class="content">转关/带司机本/凤岗封关/</span>
                    </div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div class="itemBox-1">
                    <div class="item">
                        <span class="title">订舱号</span>
                        <span class="content">东莞大东来鞋厂/罗小姐/13798571201罗小姐</span>
                    </div>
                    <div class="item">
                        <span class="title">提还柜地</span>
                        <span class="content">东莞大东来鞋厂/罗小姐/13798571201罗小姐</span>
                    </div>
                    <div class="item">
                        <span class="title">柜型柜号</span>
                        <span class="content">东莞大东来鞋厂/罗小姐/13798571201罗小姐</span>
                    </div>
                    <div class="item">
                        <span class="title">客户工作号</span>
                        <span class="content">东莞大东来鞋厂/罗小姐/13798571201罗小姐</span>
                    </div>
                    <div class="item last">
                        <span class="title">操作备注</span>
                        <p class="content">东莞大东来鞋厂/罗小姐/13798571201罗小姐东莞大东来鞋厂/罗小姐/13798571201罗小姐东莞大东来鞋厂/罗小姐/13798571201罗小姐</p>
                    </div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <div class="itemBox-1">
                    <div class="item">
                        <span class="title">车牌拖架</span>
                        <span class="content">东莞大东来鞋厂/罗小姐/13798571201罗小姐</span>
                    </div>
                    <div class="item">
                        <span class="title">司机信息</span>
                        <span class="content">东莞大东来鞋厂/罗小姐/13798571201罗小姐</span>
                    </div>
                    <div class="item">
                        <span class="title">海关编号/IC卡</span>
                        <span class="content">东莞大东来鞋厂/罗小姐/13798571201罗小姐</span>
                    </div>
                    <div class="item last">
                        <span class="title">拖头拖架</span>
                        <span class="content">东莞大东来鞋厂/罗小姐/13798571201罗小姐</span>
                    </div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <div class="itemBox-1">
                    <div class="item">
                        <span class="title">到离厂仓时间</span>
                        <span class="content">东莞大东来鞋厂/罗小姐/13798571201罗小姐</span>
                    </div>
                    <div class="item">
                        <span class="title">到离关场时间</span>
                        <span class="content">东莞大东来鞋厂/罗小姐/13798571201罗小姐</span>
                    </div>
                    <div class="item">
                        <span class="title">货物重量</span>
                        <span class="content">东莞大东来鞋厂/罗小姐/13798571201罗小姐</span>
                    </div>
                    <div class="item">
                        <span class="title">收交货人签名</span>
                        <span class="content">东莞大东来鞋厂/罗小姐/13798571201罗小姐</span>
                    </div>
                    <div class="item last">
                        <span class="title">收交货备注</span>
                        <p class="content">东莞大东来鞋厂/罗小姐/13798571201罗小姐东莞大东来鞋厂/罗小姐/13798571201罗小姐</p>
                    </div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="5">
                <div class="notice">
                    <p>(1) 东莞大东来鞋厂/罗小姐/13798571201罗小姐东莞大东来鞋厂/罗小姐/13798571201</p>
                    <p>(2) 罗小姐东莞大东来鞋厂/罗小姐/13798571201罗小姐东莞大东来鞋厂/罗小姐/13798571201罗小姐东莞大东来鞋厂/罗小姐/13798571201罗小姐东莞大东来鞋厂/罗小姐/13798571201罗小姐</p>
                    <p>(3) 东莞大东来鞋厂/罗小姐/13798571201罗小姐东莞大东来鞋厂/罗小姐/13798571201</p>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
        <div class="page-button-group group-order">
            <mt-button type="default" size="normal" class="btn-prev">上一条</mt-button>
            <mt-button type="primary" size="normal" class="btn-order">我要接单（15分）</mt-button>
            <mt-button type="default" size="normal" class="btn-next">下一条</mt-button>
        </div>
        <div class="page-button-group group-drawOut">
            <router-link to="/businessMy/waybill/reassignment" class="a-reassignment"><mt-button type="primary" size="normal" class="btn-reassignment">改派推荐</mt-button></router-link>
            <mt-button type="primary" size="normal" class="btn-drawOut">出车</mt-button>
            <mt-button type="primary" size="normal" class="btn-ark">约柜</mt-button>
            <router-link to="/businessMy/waybill/chargeback" class="a-chargeback"><mt-button type="primary" size="normal" class="btn-chargeback">退单</mt-button></router-link>
        </div>
    </div>
</template>
    
<script>
import { Navbar, TabItem } from 'mint-ui';
export default {
    data() {
        return {
            selected:'1' 
        }
    },
    created() {

    },
    methods: {
        
    },
    components:{
        Navbar,
        TabItem
    }
}
</script>

<style lang="scss">

.waybillDetail{
    padding-top: .4rem;
    background: #fff;
    
    .companyInfoBox{
        text-align: center;
    }
    
    .companyInfo{
        display: inline-block;
        text-align: left;
        .name{
            font-size: .45rem;
        }
        .nameE{
            font-size: .2rem;
        }
        .address{
            font-size: .3rem;
        }
        .phone{
            font-size: .3rem;
            span{
                margin-right: .25rem;
            }
        }
        p{
            margin-bottom: 0rem;
            color: #000;
            line-height: 0.5rem;
        }
    }
    h3{
        font-size: .4rem;
        text-align: center;
        letter-spacing: .5rem;
        margin: .4rem 0;
    }
    .mint-navbar{
        background-color: #fff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        text-align: center;
        border-top: solid 1px #ddd;
        border-bottom: solid 1px #ddd;
        .mint-tab-item-label{
            font-size: .38rem;
        }
    }
    .mint-tab-container{
        overflow: hidden;
        position: relative;
        background: #fff;
        margin-bottom: 3rem;
        .mint-tab-container-wrap{
            .mint-tab-container-item{
                .itemBox{
                    border-bottom: .28rem solid #eaeaea;
                    padding:0 0.2rem;
                }
                .itemBox-1{
                    padding:0 0.2rem;
                }
                .item{
                        height: 1.2rem;
                        line-height: 1.2rem;
                        border-bottom: dotted 1px #eeeeee;
                        .title{
                            font-size: .40rem;
                            color: #a09f9f;
                            text-align: right;
                            width: 27%;
                            float: left;
                            line-height: 1.2rem;
                        }
                        .content{
                            font-size: .40rem;
                            color: #575757;
                            width: 68%;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            float: right;
                            line-height: 1.2rem;
                            margin-bottom: 0;
                        }
                    }
                    .item{
                        p.content{
                            overflow: initial;
                            white-space: normal;
                            line-height: 0.6rem;
                            margin-top: 0.3rem;
                            margin-bottom: 0.3rem;
                            word-break:break-all;
                        }
                    }
                    .item.auto{
                        width: 100%;
                        height: auto;
                        min-height: 1.2rem;
                        display: inline-block;
                        border-bottom: none;
                    }
                    .item.last{
                        border: none;
                    }
                    .notice{
                        padding: .3rem .2rem;
                        word-break: break-all;
                        p{
                            line-height: 0.6rem;
                            font-size: .37rem;
                        }
                    }

            }
        }
    }
    .page-button-group{
        background: #eaeaea;
        padding: .4rem .3rem;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        position: fixed;
        bottom: 1rem;
        left: 0;
        width: 100%;
        .mint-button{
            font-size: .4rem;
            padding: 0;
            height: 1rem;
        }

        .btn-prev{
            width: 22%;
        }
        .btn-order{
            width: 50%;
        }
        .btn-next{
            width: 22%;
        }
        .a-reassignment{
            width: 24%;
        }
        .btn-drawOut{
            width: 22%;
        }
        .btn-ark{
            width: 22%;
        }
        .a-chargeback{
            width: 22%;
        }
        .btn-reassignment{
            width: 100%;
        }
        .btn-chargeback{
            width: 100%;
        }
    }
}

a{
    color: #000;
}
</style>