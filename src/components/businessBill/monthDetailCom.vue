<template>
   <div class="monthDetailComTpl">
         <div class="mui-content">
             <ul class="">
                <li class="monthDetail-header">
                    <div class="header-l">2017年10月账单</div>
                    <div class="header-r">付款方 安讯物流</div>
                </li>
                <li class="monthDetail-content">
                    <ul class="mui-table-view">
                        <li class="mui-table-view-cell">
                            <div>
                                <div>运费总额</div>
                                <div>￥23415.25</div>
                            </div>
                            <div>
                                <div>报销总额</div>
                                <div>￥23415.25</div>
                            </div>
                        </li>
                        <li class="mui-table-view-cell">
                            <div>
                                <div>应收总额</div>
                                <div>￥23415.25</div>
                            </div>
                            <div>
                                <div>待收金额</div>
                                <div>￥23415.25</div>
                            </div>
                        </li>
                         <li class="mui-table-view-cell">
                            <div class="colorBlue">收款时间</div>
                            <div class="colorBlue">12/03-12/08</div>                      
                        </li>
                    </ul>
                 </li>
            </ul>                    
        </div>
   </div> 
</template>
<style lang="scss" scoped>
    .monthDetailComTpl{
        height: 4.24rem;
        margin-top: .3rem;
        padding: 0 .2rem ;
        .monthDetail-header{
            height: .9rem;
            display: flex;
            justify-content: space-between;
            font-size: .4rem;
            color:#242424;
            background-color: #fff;
            border-left: .05px solid #27A2F0;
            border-bottom:1px solid #D2D2D2;
            padding:0;
            div{
                line-height: .9rem;
                padding:0 .5rem;
            }

        }
        .monthDetail-content{
           .mui-table-view{
               border-radius: 0; 
                .mui-table-view-cell{
                    display: flex;
                    justify-content: space-around;
                    padding:0;
                    &:after{
                        background-color:transparent ;
                    }
                    &:last-child{
                       padding-left: 42%;
                        div{
                            line-height: .6rem;
                            padding-left:8%;
                            height:.96rem ;
                            &:first-child{
                                text-align: right;
                                padding-left: 22%;
                                // width:32%;
                            }
                        }
                    }   
                    div{
                        font-size: .4rem;
                        display: flex;
                        justify-content:space-between;
                        width:50%;
                        padding-left:.25rem;
                        div{
                            line-height: 1.2rem;
                            &:first-child{
                                color:#5F5F5F;
                                width:45%;    
                            }
                             &:last-child{
                                width:55%; 
                             }
                        }
                    }
                    
                }

            }
        }
    // }
 }        
</style>
<script>
export default {
  data () {
      return {
          
      }
  },
  created () {
      
  },
  methods: {
      
  },
  components: {
      
  }
}
</script>


