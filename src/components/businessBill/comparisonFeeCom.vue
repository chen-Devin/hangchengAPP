<template>
    <div class="comparisonFeeTpl">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell">
                <div>订舱号</div>
                <div>168816820170808/YMLU2800185/粤B3A51</div>
            </li>
            <li class="mui-table-view-cell">
                <div>1500.00</div>
                <div>145.15</div>
                <div><div>0.00</div><span class="charge roundBlue50">收</span></div>
            </li class="mui-table-view-cell">
            <li class="mui-table-view-cell">
                <div class="colorBlue">1500.00</div>
                <div class="colorBlue">145.15</div>
                <div><div class="colorRed">500.00</div><span class="pay roundRed50">付</span></div>
            </li>
        </ul>
    </div>
</template>
 <style lang="scss" scoped>
    .comparisonFeeTpl{
        .mui-table-view{
            padding: 0;
            li{
                display: flex;
                padding:0;
                // height:.8rem;
                position: relative;
                div{
                    width:33%;
                    font-size: .34rem;
                    height:.8rem;
                    line-height: .8rem;
                    color:#333;
                    text-align: right;
                    // padding-left: .15rem;
                    &:first-child{
                        width:17%;
                    }
                    &:nth-child(3){
                        display: flex;
                        justify-content: flex-end;
                        div{
                            width: 80%;
                        }
                        span{
                         position: absolute;
                         right: .1rem;
                         bottom:.15rem;
                       }
                    }
                    
                }
                &:first-child{
                    div{
                        text-align: center;
                        &:first-child{
                            width:20%;
                        }
                        &:last-child{
                            width:80%;
                        }
                    }
                }
            }
        }
    }
 </style>
 <script>
 
 export default {
   
 }
 </script>
 
  