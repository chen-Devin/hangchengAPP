<template>
    <div class="chargeback">
        <businessNow></businessNow>
        <div class="userInfo">
            <div class="mui-card">
                <!--页眉，放置标题-->
                <div class="mui-card-header">
                    <span class="mui-media-object mui-pull-left icon-address mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">
                        <!-- <span class="span-address">退单地址</span> -->
                        <img src="../../../assets/image/tubiao/10.png" class="img-address" alt="">
                        <span class="name">小张</span>
                        <span class="mobile">186645894</span>
                        <p class='mui-ellipsis address'>深圳市南山区h前海路</p>
                    </div>
                    <div class="mui-pull-right div-phone">
                        <img src="../../../assets/image/tubiao/phone.png" class="mui-media-object mui-pull-left icon-phone" alt="">
                        <span class="span-phone">电话</span>
                    </div>
                </div>
                <!--内容区-->
                <div class="mui-card-content">
                    *注意事项：如果你已拿纸质设备交接单等资料，请你于退之日起1天内将设备交换单等资料送到上述退单地址，超期送回或未送回将产生500元/单的罚金，遗失设备交接单等资料，除500元/单的罚金外，还将承担丢柜、丢货所产生的一切损失。
                </div>
            </div>
        </div>
        <div class="mui-card div-reason">
            <div class="mui-card-header">
                <p>退单原因</p>
            </div>
            <div class="mui-card-content">
                <div class="row">
                    <span @click="selected1()" :class="{'active':s1===true}">时间冲突</span>
                    <span @click="selected2()" :class="{'active':s2===true}">进港塞车</span>
                    <span @click="selected3()" :class="{'active':s3===true}">拿单塞车</span>
                </div>
                <div class="row">
                    <span @click="selected4()" :class="{'active':s4===true}">业务冲突</span>
                    <span @click="selected5()" :class="{'active':s5===true}">车辆故障</span>
                    <span @click="selected6()" :class="{'active':s6===true}">其他原因</span>
                </div>
            </div>
        </div>
        <div class="mui-card div-description">
            <div class="mui-card-header">
                <p>退单原因描述：</p>
            </div>
            <div class="mui-card-content">
                <textarea name="description" id="" cols="30" rows="5" placeholder="再说几句话！把你的感觉都说出来。"></textarea>
            </div>
        </div>
        <div class="page-button-group">
            <mt-button type="primary" size="normal" class="btn-cancel">我不退了</mt-button>
            <mt-button type="danger" size="normal" class="btn-chargeback">我要退单</mt-button>
        </div>
    </div>
</template>
    
<script>
import businessNow from '@C/businessView/businessNow.vue'
export default {
    data() {
        return {
            s1: false,
            s2: false,
            s3: false,
            s4: false,
            s5: false,
            s6: false
        }
    },
    created() {

    },
    methods: {
        selected1: function(){
            this.s1 = !this.s1;
        },
        selected2: function(){
            this.s2 = !this.s2;
        },
        selected3: function(){
            this.s3 = !this.s3;
        },
        selected4: function(){
            this.s4 = !this.s4;
        },
        selected5: function(){
            this.s5 = !this.s5;
        },
        selected6: function(){
            this.s6 = !this.s6;
        },
    },
    components:{
        businessNow
    }
}
</script>

<style lang="scss">
    .chargeback{
        padding: .3rem .2rem;
        .mui-card{
            margin: 0;
        }
        .mui-content > .mui-card:first-child {
            margin-top: 0;
        }
        .userInfo{
            margin-top: .3rem;
            .mui-card-header{
                padding: 0.1rem 0;
                .icon-address{
                    font-size: .7rem;
                    margin-left: -.15rem;
                }
                .mui-media-body{
                    width: 85%;
                    .img-address{
                        width: 1.72rem;
                        vertical-align: -.06rem;
                    }
                    .name{
                        font-size: .3rem;
                        color: #333;
                    }
                    .mobile{
                        font-size: .3rem;
                        color: #333;
                        margin-left: .15rem;
                    }
                    .address{
                        margin-top: .13rem;
                        color: #999;
                        font-size: .3rem;
                    }
                }
                .div-phone{
                    width: 9%;
                    margin-left: .2rem;
                    .icon-phone{
                        width: .62rem;
                    }
                    .span-phone{
                        font-size: .3rem;
                        display: inline-block;
                        color: #27a2f0;
                    }
                }
            }
            .mui-card-content{
                color: #fd5e2f;
                font-size: .3rem;
                line-height: .44rem;
                height: auto;
                padding-bottom: .35rem;
            }
        }
        .div-reason{
            margin-top: .3rem;
            p{
                font-size: .4rem;
                color: #333;
            }
            .mui-card-header{
                height: .7rem;
            }
            .mui-card-content{
                height: auto;
                padding: .44rem 1.05rem .33rem;
                .row{
                    margin-bottom: .4rem;
                    display: flex;
                    flex-flow: row;
                    justify-content: space-between;
                }
                span{
                    display: inline-block;
                    width: 2.2rem;
                    height: .8rem;
                    line-height: .8rem;
                    border: solid 1px #27a2f0;
                    text-align: center;
                    font-size: .4rem;
                }
                span.active{
                    background: #26a2ff;
                    color: #fff;
                }
            }
        }
        .div-description{
            margin-top: .3rem;
            p{
                font-size: .4rem;
                color: #333;
            }
            .mui-card-header{
                height: .7rem;
            }
            .mui-card-content{
                height: auto;
                padding: .44rem .05rem .33rem;
                textarea{
                    font-size: .3rem;
                    background: #efeff4;
                    border: none;
                }
                textarea::-webkit-input-placeholder {
                    /* WebKit browsers */
                    color: #ccc;
                }
                textarea:-moz-placeholder {
                    /* Mozilla Firefox 4 to 18 */
                    color: #ccc;
                }
                textarea::-moz-placeholder {
                    /* Mozilla Firefox 19+ */
                    color: #ccc;
                }
                textarea::-ms-input-placeholder {
                    /* Internet Explorer 10+ */
                    color: #ccc;
                }
            }
        }
        .page-button-group{
            padding: .5rem 0 .3rem;
            margin-bottom: 1rem;
            float: right;
            .mint-button{
                font-size: .3rem;
                padding: 0;
                width: 2rem;
                height: .76rem;
            }
        }
    }
    @media screen and (max-width: 410px) {
        .span-address{
            width: 2.1rem !important;
            height: 0.56rem !important;
        }
    }
</style>