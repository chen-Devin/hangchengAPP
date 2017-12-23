<template>
  <div class="monthDetailTpl">
        <div class="monthDetailBox">
            <monthDetailCom class="mui-card"></monthDetailCom> 
        </div>
        <businessBillDetail></businessBillDetail> 
        <waiteForCom></waiteForCom>
        <businessBillGrenerating></businessBillGrenerating>  
  </div>
</template>
<style lang="scss" scoped>
.monthDetailTpl{
    height: auto;
    overflow: auto;
    margin-bottom: .85rem;
    padding-top:.15rem;
    .mui-card{
        padding:0;
    }
   }

</style>
<script>
import businessBillDetail from '@C/businessBill/businessBillDetail.vue'
import businessBillGrenerating from '@C/businessBill/businessBillGrenerating.vue';
import waiteForCom from '@C/businessBill/waiteForCom.vue'
// import mainInfoCom from '@C/businessBill/mainInfoCom.vue'
import monthDetailCom from '@C/businessBill/monthDetailCom.vue'
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
      businessBillDetail,
      businessBillGrenerating, 
      waiteForCom,
    //   mainInfoCom, 
      monthDetailCom,  
    }
}
</script>



