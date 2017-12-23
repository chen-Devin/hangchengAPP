<template>
    <div class="accuredExpensesTpl">
        <div class="mui-content">
            <div class="mui-card">
                <!--页眉，放置标题-->
                <div class="mui-card-header">
                    <h4>应付费用 (元)</h4>
                </div>
                <!--内容区-->
                <div class="mui-card-content">
                     <div class="accuredExpenses-left accured">
                         <ul>
                             <li>运费</li>
                             <li>高速费</span></li>
                         </ul>
                     </div>
                     <div class="accuredExpenses-left-c accured">
                         <ul>
                             <li><span class="colorOrange">{{freight}}</span></li>
                             <li><span class="colorOrange">{{highSpeedFee}}</span></li>
                         </ul>
                     </div>
                     <div class="accuredExpenses-right-c accured">
                         <ul>
                             <li>过磅费</span></li>
                             <li>其他费</span></li>    
                         </ul>
                     </div>  
                     <div class="accuredExpenses-right accured">
                         <ul>
                             <li><span class="colorOrange">{{weighingFee}}</span></li>
                             <li><span class="colorOrange">{{othersFee}}</span></li>    
                         </ul>
                     </div>                       
                </div>
                <!--页脚，放置补充信息或支持的操作-->
                <!-- <div class="mui-card-footer"></div> -->
            </div>
           </div>
    </div>
</template>
<style lang="scss" scoped>
    .accuredExpensesTpl{
        margin-top: .3rem;
        .mui-card-content{
          display: flex;
          font-size: .34rem;
          color:#333333;
          height: 100%;
          margin-bottom: 0.25rem;
          justify-content: space-around;
          padding-top: .25rem;
            ul{
                
                li{
                    margin: 0;
                    line-height: .78rem;
                    text-align: right;
                    span {
                       display: inline-block;
                       font-size: .50rem;
                       text-align: right; 
                       
                    }
                    
                }
              }
        .accured{
            // width: 25%;
            &:nth-child(2n+1){
                ul{
                    li{
                        line-height: .76rem;
                    }
                }
            }
        }
      }
    }
</style>
<script>
export default {
  data () {
      return {
          freight:"3000.00",
          highSpeedFee:"256.45",
          weighingFee:"45.00",
          othersFee:"215.55"
      }
  }
}
</script>


