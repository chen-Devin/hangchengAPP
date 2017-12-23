<template>
  <div class="phoneCallTpl">
      <div class="phoneCallBox-top">
          <p>你要呼叫{{driverName}}司机吗？</p>
          <p>{{phoneNumber}}</p>
      </div>
      <div class="phoneCallBox-bottom">
          <div @click="cancel">取消</div>
          <div>呼叫</div>
      </div> 
  </div>
</template>
<style lang="scss" scoped>
    .phoneCallTpl{
        width: 7.42rem;
        height: 4.62rem;
        // background-color: #fff;
        overflow: hidden;
        border-radius: .2rem;
        .phoneCallBox-top{
            height: 3.66rem;
            padding: 1.3rem;
            background-color: #fff;
            p{  
                width: 100%;
                text-align: center;
                font-size: .4rem;
                line-height: .8rem;
                color:#000;
                margin: 0;
            }

        }
        .phoneCallBox-bottom{
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: .96rem;
            div{
                width:50%;
                font-size: .40rem;
                text-align: center;
                line-height:.96rem; 
                background-color: #27A2F0;
                color:#fff;
                &:first-child{
                    border-right: 1px solid #fff;
                }
                &:last-child{
                    border-left: 1px solid #fff;
                }
            }
        }
    }
</style>
<script>
export default {
  data () {
      return {
          driverName:'张国富',
          phoneNumber:'138-1111-2222',
        //   popupVisibleCall:''
      }
  },
  created () {
      
  },
  methods: {
      cancel(){
        //  this.popupVisibleCall = false
      }
  },
  props: ['popupVisibleCalls']
}
</script>



