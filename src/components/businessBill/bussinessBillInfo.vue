<template>
  <div class="businessConfirmed-billGenerating">
            <div class="mui-content">
                <div class="mui-card">
                    <!--页眉，放置标题-->
                    <div class="mui-card-header">
                        <h4 class="colorGrey">账单生成信息</h4>
                    </div>
                    <!--内容区-->
                    <div class="mui-card-content">
                        <div class="mui-table">
                          <div class="mui-table-cell mui-col-xs-2">生成时间</div>
                          <div class="mui-table-cell mui-col-xs-2">2017-11-3</div>      
                          <div class="mui-table-cell mui-col-xs-8">12:35</div>            
                        </div> 
                        <div class="mui-table">
                          <div class="mui-table-cell mui-col-xs-2">账单金额</div>
                          <div class="mui-table-cell mui-col-xs-10">36451.25元</div>                  
                        </div>    
                        <div class="mui-table">
                          <div class="mui-table-cell mui-col-xs-2">生成人</div>
                          <div class="mui-table-cell mui-col-xs-10">王前进</div>                
                        </div>       
                    </div>
                </div>
             </div>           
        </div>
</template>
<style lang="scss" scoped>
    .businessConfirmed-billGenerating{
          margin-top: .3rem;
          height: auto;
         .mui-card-content{
          font-size: .32rem;
          color:#333333;
          padding-left: .15rem;
          height:auto;
         }
         .mui-table{
             margin-bottom: .3rem;
         }
     }
</style>

<script>

export default {
  data () {
      return {
         title1:"账单生成信息",
         title2:"账单确认信息",
         time1:"生成时间",
         time2:"确认时间",
         createrTime:"2017-11-3",
         confirmEdTime:"2017-11-3",
         person1:"生成人",
         person2:"确认人",
         creater:"王前进",
         ConfirmationPerson:"王美丽"   
      }
  },
    created() {
      
    },
    methods: {
      getData(){

      }
    },
    components:{
     
      
    }
}
</script>


