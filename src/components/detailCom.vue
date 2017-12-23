<template>
  <div class="detailComTpl">
     <div class="mui-table">
            <div v-show="commit" class="mui-table-cell mui-col-xs-10" @click="getOrderDetail">
                <p class="mui-ellipsis">订舱号YML201708012450001/YMLU2800185</p>
                <p class="mui-h6 mui-ellipsis">做柜时间&nbsp;&nbsp;{{date| fmtDate('YYYY/MM/DD')}}</p>
            </div>
            <div v-show="!commit" class="mui-table-cell mui-col-xs-10">
                <div class="mui-table-cell mui-col-xs-1">
                    <input name="waybillId" value="0" type="checkbox">
                </div>
                <div class="mui-table-cell mui-col-xs-11" @click="getOrderDetail">
                    <p class="mui-ellipsis">订舱号YML201708012450001/YMLU2800185</p>
                    <p class="mui-h6 mui-ellipsis">做柜时间&nbsp;&nbsp;{{date| fmtDate('YYYY/MM/DD')}}</p>  
                </div>
            </div>
            <div class="mui-table-cell mui-col-xs-2 mui-text-right" @click="getOrderDetail">
                <p class="mui-h5">出&nbsp;&nbsp;口</p>
                <p class="mui-h5">345.4</p>
            </div>          
     </div>                               
  </div>
</template>
<style lang="scss" scoped>
.detailComTpl{
         .mui-table{
            input[name="waybillId"]{
                vertical-align: -.4rem;
            }
             p{
                &:nth-child(2n+1){
                    color:#333333;
                    line-height: 1rem;
                }
                &:nth-child(2n){
                    padding-bottom: .20rem;
                    color:#999;
                }
            }
            div{
                p{
                    font-size: .34rem;
                }
            }     
         }
                 
    }       
</style>
<script>
export default {
  data () {
      return {
          date:new Date(),
        commit: true
      }
  },
  created () {
      this.commit = this.status == "0" ? false : true
  },
  methods: {
      getOrderDetail(){
          this.$router.push({
                path:'/businessMy/monthBill/orderDetail',
                params:{
                   
                }
            });
      }
  },
  components: {
      
  }  ,
  props:["status"]
}
</script>


