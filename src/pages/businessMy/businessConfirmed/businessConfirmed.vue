<template>
  <div class="businessConfirmed">
        <businessNow></businessNow>
        <mainInfoCom></mainInfoCom>  
        <businessBillDetail></businessBillDetail> 
        <waiteForCom></waiteForCom>
        <businessBillConfirmForm></businessBillConfirmForm> 
  </div>
</template>
<style lang="scss" scoped>
.businessConfirmed{
    padding-top: .15rem;
    height: auto;
    overflow: auto;
    margin-bottom: .5rem;
   }

</style>
<script>
import businessNow from '@C/businessView/businessNow.vue'
import businessBillDetail from '@C/businessBill/businessBillDetail.vue'
import businessBillConfirmForm from '@C/businessBill/businessBillConfirmForm.vue'
import waiteForCom from '@C/businessBill/waiteForCom.vue'
import mainInfoCom from '@C/businessBill/mainInfoCom.vue'
export default {
  data() {
        return {
         
        }
    },
    created() {
     
    },
    methods: {
      getData(){

      }
      
    },
    components:{
      businessNow,
      businessBillDetail,
      businessBillConfirmForm, 
      waiteForCom,
      mainInfoCom, 
    }
}
</script>



