<template>
  <div class="costVerifideTpl">
      <businessNow></businessNow>
      <accuredExpenses></accuredExpenses> 
      <businessPaid></businessPaid>  
      <platformCost></platformCost>
      <businessUnPaid></businessUnPaid>
      <businessBillConfirmForm></businessBillConfirmForm> 
  </div>     
</template>
<style lang="scss" scoped>
.costVerifideTpl{
    padding-top: .15rem;
    padding-bottom: .5rem;
    overflow: auto;
}
</style>
<script>
import businessNow from '@C/businessView/businessNow.vue'
import accuredExpenses from '@C/businessBill/accuredExpenses.vue'
import businessPaid from '@C/businessBill/businessPaid.vue'
import platformCost from '@C/businessBill/platformCost.vue'
import businessUnPaid from '@C/businessBill/businessUnPaid.vue'
import businessBillConfirmForm from '@C/businessBill/businessBillConfirmForm.vue'
export default {
  data () {
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
      accuredExpenses, 
      businessPaid, 
      platformCost,
      businessUnPaid,
      businessBillConfirmForm,
    }
}
</script>


