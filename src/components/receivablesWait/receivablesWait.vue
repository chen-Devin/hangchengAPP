<template>
  <div class="receivablesWaitTpl">
      <paymentWaitCom>
          <div class="mui-card-footer">
                    <button v-show="isShowDetail" type="button" class="mui-btn mui-btn-primary mui-btn-outlined">收款明细</button>
                    <button v-show="isShowWaitDo" type="button" class="mui-btn mui-btn-primary mui-btn-outlined">电话沟通</button>
                    <button v-show="isShowReminding" type="button" class="mui-btn mui-btn-danger mui-btn-outlined">提醒付款</button>
                    <button v-show="isShowPressForMoney" type="button" class="mui-btn mui-btn-primary mui-btn-outlined">催款</button>
                    <button v-show="isShowWaitDo" type="button" class="mui-btn mui-btn-success mui-btn-outlined">到帐确认</button>
         </div>    
      </paymentWaitCom>    
  </div>
</template>
<style lang="scss" scoped>

</style>
<script>
import  paymentWaitCom from '@C/receivables/paymentWaitCom.vue';
export default {
  data () {
      return {
          typeDatas1 : '进口',
          typeDatas2 : '现结',
          waitType1:'1',
          commentTypeSS:'1',
          isShowWaitDo:false,    //待作
          isShowReminding:false,
          isShowPressForMoney:false
      }
  },
   created() {
        this.isShowOrHidden()
    },
    methods: {
        isShowOrHidden(){
            this.waitType1 = this.waitType1T;
            this.typeDatas1 = this.typeDatas1T;
            this.typeDatas2 = this.typeDatas2T;
            this.commentTypeSS = this.commentTypeS;
            if(this.waitType1 == '1'){
                this.isShowWaitDo = true;
            }else if(this.waitType1 == '2'){
                this.isShowReminding = true;
            }else if(this.waitType1 == '3'){
                this.isShowPressForMoney = true;
            }
        },
  components: {
      paymentWaitCom,
    },
    props: ['waitType1T','typeDatas1T','typeDatas2T','commentTypeS']
  }
}
</script>


