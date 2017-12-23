<template>
    <div class='businessConfirmed-billdetail'>     
        <div class="mui-content">
            <div class="mui-card">
                <!--页眉，放置标题-->
                <div class="mui-card-header">
                    <h4 class="colorBlue">账单明细</h4>
                </div>
                <!--内容区-->
                <div class="mui-card-content">
                    <div class="mui-content">
                        <ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">
                             <li class="mui-table-view-cell" v-for="n in 4" :key="n">
                                <detailCom :status="status"></detailCom>  
                            </li>                         
                        </ul>
                </div>    
                </div>
                <!--页脚，放置补充信息或支持的操作-->
            </div>
           </div>
        </div>   
    </div>       
</template>
<style lang="scss" scoped>
     .businessConfirmed-billdetail{
          margin-top: .3rem;
          .mui-card-content{
          font-size: .34rem;
          color:#333333;
          height: 100%;
          margin-bottom: 0.25rem;
          padding-top: 0;
          .mui-content{
              background-color:transparent;
          }
          .mui-table-view{
              &:first-child{
                  margin-top:.1px;
              }
              .mui-table-view-cell{
                      padding:.22rem .15rem;
                      &:after{
                          left:.08rem;
                      }
                  }
          }
        }
     }
     
</style>
<script>
// import detailComponent from '@C/detailComponent';
import detailCom from '@C/detailCom';
export default {
  data () {
      return {
          date:new Date()
      }
  },
  created () {
      
  },
  methods: {
      
  },
  components: {
    //  detailComponent, 
    detailCom,
  },
    props:["status"]
}
</script>


