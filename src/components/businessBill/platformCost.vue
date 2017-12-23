<template>
    <div class="platformCostTpl">
        <div class="mui-content">
            <div class="mui-card">
                <!--页眉，放置标题-->
                <div class="mui-card-header">
                    <h4 class="colorBlue">平台费用 (元)</h4>
                </div>
                <!--内容区-->
                <div class="mui-card-content">
                    <div>服务费&nbsp;&nbsp;&nbsp;<span class="colorBlue">{{servicePaid}}</span></div>
                    <div>平台补贴&nbsp;&nbsp;&nbsp;<span class="colorBlue">{{platformSubsidies}}</span></div>
                </div>
            </div>
                <!--页脚，放置补充信息或支持的操作-->
                <!-- <div class="mui-card-footer"></div> -->
        </div>
    </div> 
</template>
<style lang="scss" scoped>
    .platformCostTpl{
        margin-top: .3rem;
        .mui-card-content{
          display: flex;
          justify-content:space-around;
          font-size: .34rem;
          color:#333333;
          height: 1.8rem;  
          margin-bottom: 0.25rem;
            div{
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
          servicePaid:"150.00",
          platformSubsidies:"250"
      }
  }
}
</script>


