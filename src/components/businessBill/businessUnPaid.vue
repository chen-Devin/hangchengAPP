<template>
  <div class="businessUnpaidTpl">
        <div class="mui-content">
            <div class="mui-card">
                <!--页眉，放置标题-->
                <div class="mui-card-header">
                    <h4 class="colorRed">未付费用 (元)</h4>
                </div>
                <!--内容区-->
                <div class="mui-card-content">
                    <p>应付费用-已付费用-服务费+平台补贴=&nbsp;<span class="colorRed">{{unPaid}}</span></p>
                </div>
            </div>
                <!--页脚，放置补充信息或支持的操作-->
                <!-- <div class="mui-card-footer"></div> -->
        </div>
    </div> 
</template>
<style lang="scss" scoped>
    .businessUnpaidTpl{
        margin-top: .3rem;
        .mui-card-content{
          font-size: .32rem;
          color:#333333;
          height: 1.8rem;
          padding-left: .25rem;
          margin-bottom: 0.25rem;
            p{
                font-size: .34rem;
                color:#333333;
                line-height: 1.8rem;
                span{
                     display: inline-block;
                       font-size: .80rem;
                       text-align: right; 
                }
            }
       
      }
    }
</style>
<script>
export default {
  data () {
      return {
          unPaid:"3117.00",
      }
  }
}
</script>

      
  </div>       
</template>

  