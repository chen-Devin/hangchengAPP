<template>
    <div class="popDriverSearch">
        <div class="header">
            <div class="button-group">
                <mt-button type="default" size="normal" class="btn-cancel" v-on:click="hidePopDriverSearch">取消</mt-button>
                <mt-button type="primary" size="normal" class="btn-sure" v-on:click="sendDriverToParent">确认</mt-button>
            </div>
        </div>
        <div class="body">
            <form action="">
                <div class="searchBar">
                    <div class="tab">
                        <span class="carNo" @click="selected(1)" :class="{'active mui-icon mui-icon-checkmarkempty':i===1}">车牌号码</span>
                        <span class="phone" @click="selected(2)" :class="{'active mui-icon mui-icon-checkmarkempty':i===2}">手机号码</span>
                        <span class="name" @click="selected(3)" :class="{'active mui-icon mui-icon-checkmarkempty':i===3}">司机姓名</span>
                    </div>
                    <div class="form-group">
                        <input type="text" class="searchText">
                        <mt-button type="default" size="normal" class="btn-search">查询</mt-button>
                    </div>
                </div>
                <div class="driverList">
                    <div class="item" v-for="driver in driverList" :key="driver.carNo">
                        <input type="radio" name="driver" v-on:click="setDriver(driver)">
                        <span class="carNo">{{driver.carNo}}</span>
                        <span class="phone">{{driver.phone}}</span>
                        <span class="name">{{driver.name}}</span>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
    
<script>
export default {
    data() {
        return {
            i: 1,
            driverList: [
                {"carNo": "粤A","phone": "123","name": "A"},
                {"carNo": "粤B","phone": "456","name": "B"}
            ],
            driver: {"carNo": "","phone": "","name": ""}
        }
    },
    created() {

    },
    methods: {
        selected ($index) {
            this.i = $index;
        },
        sendDriverToParent:function(){
            this.$emit("listenToChildEvent",this.driver);
        },
        hidePopDriverSearch:function(){
            this.$emit("hidePopDriverSearch");
        },
        setDriver:function(driver){
            this.driver.carNo = driver.carNo;
            this.driver.phone = driver.phone;
            this.driver.name = driver.name;
        }
    },
    components:{
        
    }
}
</script>

<style lang="scss">

.popDriverSearch{
    background: #fff;
    .header{
        height: 1.41rem;
        border-bottom: solid 1px #ddd;
        display: table;
        width: 100%;
        .button-group{
            display: table-cell;
            vertical-align: middle;
            .btn-cancel{
                margin-left: .2rem;
                font-size: .38rem;
                height: .94rem;
            }
            .btn-sure{
                float: right;
                margin-right: .2rem;
                font-size: .38rem;
                height: .94rem;
            }
        }
    }
    .body{
        .searchBar{
            height: 2.66rem;
            border-bottom: solid 1px #ddd;
            padding: .32rem .89rem;
            .tab{
                display: flex;
                flex-flow: row;
                justify-content: space-between;
                span{
                    border: solid 1px #d6d6d6;
                    display: inline-block;
                    padding: .18rem;
                    font-size: .36rem;
                    border-radius: .1rem;
                    position: relative;
                }
                span.active{
                    padding: .21rem .18rem .15rem;
                    background: #26a2ff;
                    color: #fff;
                    border: #26a2ff 1px solid;
                }
                .mui-icon-checkmarkempty:before {
                    border-radius: 50%;
                    color: #27a2f0;
                    font-weight: 900;
                    font-size: 0.2rem;
                    background-color: #fff;
                    position: absolute;
                    bottom: .03rem;
                    right: .03rem;
                }
            }
            .form-group{
                margin-top: .33rem;
                .searchText{
                    width: 78%;
                    height: .94rem;
                }
                .btn-search{
                    width: 1.5rem;
                    height: .94rem;
                    font-size: .38rem;
                    color: #4293da;
                    float: right;
                }
            }
        }
        .driverList{
            .item{
                height: 1.2rem;
                line-height: 1.15rem;
                padding: 0 .89rem;
                border-bottom: solid 1px #ddd;
                span{
                    display: inline-block;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                input{
                    width: 5%;
                    vertical-align:-.06rem;
                }
                .carNo{
                    width: 33%;
                    font-size: .4rem;
                }
                .phone{
                    width: 38%;
                    font-size: .4rem;
                }
                .name{
                    width: 18%;
                    font-size: .4rem;
                }
            }
        }
    }
}
</style>