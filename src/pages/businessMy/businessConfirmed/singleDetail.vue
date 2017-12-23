<template>
    <div class="singleDetail">
      <businessNow></businessNow>
      <accuredExpenses></accuredExpenses> 
      <businessPaid></businessPaid>  
      <platformCost></platformCost>
      <businessUnPaid></businessUnPaid>
      <businessBillGrenerating></businessBillGrenerating>
    </div>
</template>
<style lang="scss" scoped>

</style>
<script>
import businessNow from '@C/businessView/businessNow.vue'
import accuredExpenses from '@C/businessBill/accuredExpenses.vue'
import businessPaid from '@C/businessBill/businessPaid.vue'
import platformCost from '@C/businessBill/platformCost.vue'
import businessUnPaid from '@C/businessBill/businessUnPaid.vue'
import businessBillGrenerating from '@C/businessBill/businessBillGrenerating.vue';
export default {
   data () {
       return {
           
       }
   },
   created () {
       
   },
   methods: {
       
   },
   components: {
      businessNow,
      accuredExpenses, 
      businessPaid, 
      platformCost,
      businessUnPaid,
      businessBillGrenerating, 
   }
}
</script>


