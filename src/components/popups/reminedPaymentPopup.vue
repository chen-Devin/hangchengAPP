<template>
   <div class="reminedPaymentPopupTpl" v-show="showOrHidden" :class="showClass == true ? 'active' : ''">
       <div class="reminedPopup-top colorBlue">确认提醒付款</div>
       <div class="reminedPopup-center">每天最多提醒一次哦！</div>
       <div class="reminedPopup-bottom">
           <div class="cancle" @click="cancleRemined">取消</div>
           <div class="confirmed colorBlue" @click="confirmRemined">确定</div>
       </div>
   </div>
</template>
<style lang="scss" scoped>
    .reminedPaymentPopupTpl{
        width:8.2rem;
        height:4.22rem;
        border-radius: .1rem;
        background-color: #fff;
        .reminedPopup-top{
            width: 100%;
            height: 1.1rem;
            line-height: 1.1rem;
            padding-left:.55rem;
            font-size: .42rem;
        }  
        .reminedPopup-center{
            width: 100%;
            font-size: .42rem;
            height: 2.02rem;
            line-height:2.02rem;
            text-align: center;

        } 
        .reminedPopup-bottom{
            display: flex;
            justify-content: flex-end;
            div{
                background-color: transparent;
                width: 1.2rem;
                height: 0.7rem;
                font-size: .42rem;
                outline-style:none;
                cursor: pointer;
                line-height: 0.7rem;
            }
        }
    }
</style>
<script>
export default {
  data () {
      return {
          showOrHidden:true,
      }
  },
  created () {
  },
  methods: {
     cancleRemined(){
        // this.showOrHidden =false 
     },
     confirmRemined(){
        //  this.showOrHidden =false ;
        //  let showOrHiddens=this.showOrHidden;
        //  this.$emit('listenChildEvent',showOrHiddens);
     },
  },
  mounted:function() {
        this.$root.eventBus.$on('paymentRemined', function(e) {
            // this.barCount++
            console.log(e);
            // this.btnArrRe = e;
            // this.$root.eventBus.$off('addTypesTo');
            Object.assign(this.popupVisibleRemined,e);
            console.log(this.saveStart);
            this.showClass = true;
        }.bind(this))
    },
  props: []
}
</script>


