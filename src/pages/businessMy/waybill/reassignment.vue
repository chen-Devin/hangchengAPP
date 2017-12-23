<template>
    <div class="reassignment">
        <div class="page-cell">
            <div @click="showPopDriverSearch" class="info-showPop">
                <mt-cell title="车牌号" is-link v-bind:value="driver.carNo" class="carNo"></mt-cell>
                <mt-cell title="司机姓名" is-link v-bind:value="driver.name"></mt-cell>
                <mt-cell title="联系电话" is-link v-bind:value="driver.phone"></mt-cell>
            </div>
            <mt-cell title="身份证号" value="44565656565656"></mt-cell>
        </div>
        <p>改派推荐说明</p>
        <textarea name="description" id="" cols="30" rows="10"></textarea>
        <div class="page-button-group">
            <mt-button type="default" size="normal" class="btn-cancel">取消</mt-button>
            <mt-button type="primary" size="normal" class="btn-reassignment">改派推荐</mt-button>
        </div>
        <popDriverSearch :class="{'show':show===true}" v-on:listenToChildEvent="showDriverFromChild" v-on:hidePopDriverSearch="showPopDriverSearch"></popDriverSearch>
        <div :class="{'v-modal':show===true}" @click="showPopDriverSearch"></div>
    </div>
</template>
    
<script>
import popDriverSearch from '@P/businessMy/waybill/popDriverSearch.vue'
export default {
    data() {
        return {
            show: false,
            driver: {"carNo": "","phone": "","name": ""}
        }
    },
    created() {

    },
    methods: {
        showPopDriverSearch(){
            this.show = !this.show;
        },
        showDriverFromChild:function(data){
            this.driver.name = data.name;
            this.driver.carNo = data.carNo;
            this.driver.phone = data.phone;
            this.show = !this.show;
        }
    },
    components:{
        popDriverSearch
    }
}
</script>

<style lang="scss">

.reassignment{
    background: #fff;
    padding-bottom: .08rem;
    .mint-cell{
        height: 1.5rem;
        line-height: 1.5rem;
        border-bottom: 0;
        .mint-cell-wrapper{
            height: 1.5rem;
            line-height: 1.5rem;
            color: #333;
            .mint-cell-value{
                margin-right: .5rem;
                color: #d2d2d2;
            }
            .mint-cell-value.is-link{
                font-size: .38rem;
                margin-right: .5rem;
            }
        }
    }
    .info-showPop .mint-cell:last-child{
        background-image: none;
    }
    p{
        height: 1.02rem;
        line-height: 1.22rem;
        background: #efeff4;
        font-size: 0.39rem;
        padding-left: .2rem;
        border-bottom: solid 1px #ddd;
    }
    textarea{
        width: 94%;
        margin: .49rem auto;
        display: block;
        background: #efeff4;
        font-size: 0.3rem;
        border: none;
    }
    .page-button-group{
        padding: .4rem .3rem;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 1rem;
        .mint-button{
            font-size: .46rem;
            padding: 0;
            height: 1.45rem;
        }
        .btn-cancel{
            width: 48%;
        }
        .btn-reassignment{
            width: 48%;
        }
    }
    .popDriverSearch{
        position: fixed;
        bottom: -9rem;
        left: 0;
        width: 100%;
        transition: bottom 0.5s;
        z-index: 3;
    }
    .popDriverSearch.show{
        display: block;
        bottom: 0;
        -webkit-box-shadow: 0px -5px 7px 0px rgba(0, 0, 0, 0.1);
        box-shadow: 0px -5px 7px 0px rgba(0, 0, 0, 0.1);
    }
    .v-modal{
        z-index: 2;
    }
}
</style>