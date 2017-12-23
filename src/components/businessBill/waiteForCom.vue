<template>
  <div class="businessConfirmed-waited">
        <div class="mui-content">
            <div class="mui-card">
                <!--页眉，放置标题-->
                <div class="mui-card-content">
                        待收 = 运费 + 报销 - 已付 + 平台补贴 - 平台服务费 = <span class="colorOrange"> 65412.15 </span>元
                </div>
            </div>
        </div>    
   </div>
</template>
<style lang="scss" scoped>
    .businessConfirmed-waited{
          margin-top: .5rem;
          padding: 0 .2rem;
        //   height: .8rem;
         .mui-card-content{
          font-size: .34rem;
          color:#333333;
          height: 100%;
          line-height: .34rem;
          margin-bottom: .25rem;
          padding-top: .25rem;
          padding-left: .25rem;
         }
         .mui-card{
             padding: 0;
             margin: 0;
         }
     }
</style>
<script>
export default {
  
}
</script>



