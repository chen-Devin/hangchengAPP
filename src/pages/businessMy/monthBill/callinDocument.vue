<template>
    <div class="callinDocument">
        <div class="mui-content">
            <ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">
                <li class="mui-table-view-cell" v-for="n in 4" :key="n">
                    <detailCom status="0"></detailCom>  
                </li>                         
            </ul>
        </div>
        <div class="page-button-group">
            <mt-button type="default" size="normal" class="btn-noCallin" @click="noCallin">暂不调入</mt-button>
            <mt-button type="primary" size="normal" class="btn-callin" @click="callin">现在调入</mt-button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.callinDocument{
    height: auto;
    overflow: auto;
    .mui-content{
        margin-bottom: 3rem;
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
        .btn-noCallin{
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
import detailCom from '@C/detailCom';
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
        detailCom
    }
}
</script>



