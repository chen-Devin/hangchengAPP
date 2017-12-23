<template>
    <div class='tmplBusinessMyReimbursing'>
        <businessNow></businessNow>
        <reimbursingTemporaries></reimbursingTemporaries>
        <p>*为了保证您的权益,请于还柜后第二天准确提交需要委托方支付的异常费用，并将相关票据正本交付给委托人或者委托方指定地点,逾期或漏报责任自负。</p>
        <!-- <div class="mui-content">
            <div class="mui-input-row mui-checkbox mui-left">
                <label>checkbox左侧显示示例</label>
                <input name="checkbox1" value="Item 1" type="checkbox">
            </div>
        </div> -->
        <div class="checkbox1">
            <input name="checkbox1" id="promise" value="0" type="checkbox" v-model="checked">
            <label for="promise">我承诺以上费用均为本单证真实发生的费用,我愿意承担因提供虚假费用及票据所产生的所有责任。</label>            
        </div>
        <div class="mui-content">
            <div class="confirm-btn">
                <!-- <button type="button" class="mui-btn mui-btn-success">查看轨迹</button> -->
                <router-link :to="'/businessMyIndo/businessMyTrack'"  type="button" class="mui-btn mui-btn-success">查看轨迹</router-link>
                <!-- <button type="button" class="mui-btn mui-btn-warning">查看回单</button>   -->
                <button type="button" class="mui-btn mui-btn-danger">费用暂存</button>
                <button type="button" class="mui-btn mui-btn-primary">报销费用</button>
            </div> 
        </div>
        <popupsCostType :showS = 'addTypess'></popupsCostType>
    </div>
</template>

<script>
import businessNow from '@C/businessView/businessNow.vue'
import reimbursingTemporaries from '@C/businessReimbursing/reimbursingTemporaries.vue'
import popupsCostType from '@C/popups/popupsCostType.vue'
export default {
    
    data() {
        return {
            checked:'',
            addTypess:false
        }
    },
    created() {
        
    },
    methods: {
        promiseShow(){
            console.log(this.checked);
        }
    },
    components:{
      businessNow,
      reimbursingTemporaries,
      popupsCostType
    }
}
</script>

<style lang = 'scss'>   
    .tmplBusinessMyReimbursing{
        padding: .3rem 0rem;
        /* text-align: center; */
        >p{
            color: #f95b5b;
            font-size: .32rem;
            display: inline-block;
            margin-left:.22rem;
            line-height: 1.6;
            width: 95%;           
            margin-top: .5rem;
            text-align: left;
        }
        .checkbox1{
            font-size: .32rem;
            display: flex;
            margin-left:.22rem;
            line-height: 1.6;
            width: 95%; 
            text-align: left;
            input{
                width: .45rem;
                position: absolute;
                height: .45rem;
                /* margin-top: 0.1rem; */
            }
            label{
                margin-left: 0.6rem;
                line-height: 1.6;
            }
        }
    }
</style>