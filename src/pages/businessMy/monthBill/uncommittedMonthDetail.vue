<template>
    <div class="uncommittedMonthDetail">
        <div class="monthDetailBox">
            <monthDetailCom class="mui-card"></monthDetailCom> 
        </div>
        <businessBillDetail status="0"></businessBillDetail>
        <div class="page-button-group">
            <mt-button type="default" size="normal" class="btn-callout" @click="callout">调出单证</mt-button>
            <mt-button type="primary" size="normal" class="btn-callin" @click="callin">调入单证</mt-button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.uncommittedMonthDetail{
    height: auto;
    overflow: auto;
    .businessConfirmed-billdetail{
        margin-bottom: 3rem;
    }
    .mui-card{
        padding:0;
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
            font-size: .42rem;
            padding: 0;
            height: 1.1rem;
        }
        .btn-callout{
            width: 48%;
        }
        .btn-callin{
            width: 48%;
        }
    }
}

</style>
<script>
import { MessageBox } from 'mint-ui';
import monthDetailCom from '@C/businessBill/monthDetailCom.vue'
import businessBillDetail from '@C/businessBill/businessBillDetail.vue'
export default {
    data() {
        return {
            
        }
    },
    created() {
        
    },
    methods: {
        callout: function(){
            MessageBox.confirm('您确认要将选择单证调出2017年11月账单外吗?',"调出单证").then(action => {
                MessageBox.alert('操作成功').then(action => {
                
                });
            });
        },
        callin: function(){
            this.$router.push({path: '/businessMy/monthBill/callinDocument'});
        }
    },
    components:{
        monthDetailCom,  
        businessBillDetail
    }
}
</script>



