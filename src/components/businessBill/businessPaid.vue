<template>
    <div class="businessPaidTpl">
        <div class="mui-content">
            <div class="mui-card">
                <!--页眉，放置标题-->
                <div class="mui-card-header">
                    <h4 class="colorGreen">已付费用 (元)</h4>
                </div>
                <!--内容区-->
                <div class="mui-card-content">
                    <p>预付款&nbsp;&nbsp;&nbsp;<span class="colorGreen">{{prePaid}}</span></p>
                </div>
            </div>
                <!--页脚，放置补充信息或支持的操作-->
                <!-- <div class="mui-card-footer"></div> -->
        </div>
    </div> 
</template>
<style lang="scss" scoped>
    .businessPaidTpl{
        margin-top: .3rem;
        .mui-card-content{
          font-size: .34rem;
          color:#333333;
          height: 1.8rem;
          
          padding-left: 2.34rem;
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
          prePaid:"500.00",
          
      }
  },
  created () {
      
  },
  methods: {
      
  },
  props: [""]
}
</script>


