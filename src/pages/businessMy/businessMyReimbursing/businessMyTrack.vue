<template>
    <div class='tmplBusinessMyTrack'>
        <div class="businessMyTrackTop">
            <ul>
                <li>
                    <span>运单编号</span>
                    <span>YIH697512345/海格物流</span>
                </li>
                <li>
                    <span>订&nbsp;&nbsp;舱&nbsp;&nbsp;号</span>
                    <span>SZT9845512345</span>
                </li>
                <li>
                    <span>柜号柜型</span>
                    <span>PCIU8432607/40GP</span>
                </li>
                <li>
                    <span>铅封关封</span>
                    <span>ABSA4545/CUS4782</span>
                </li>
                <li>
                    <span>车牌司机</span>
                    <span>粤BSBL45/张大江</span>
                </li>
            </ul>
        </div>
        <div class="businessMyTrackBottom">
            <businessMyTrackSum></businessMyTrackSum>
        </div>
    </div>
</template>

<script>
import businessMyTrackSum from '@C/businessMyTrackS/businessMyTrackSum'
export default {
    data() {
        return {
            
        }
    },
    created() {

    },
    methods: {
        
    },
    components:{
      businessMyTrackSum  
    },
}
</script>

<style lang='scss'>
    .tmplBusinessMyTrack{
        .businessMyTrackTop{
            padding: .5rem .5rem;
            font-size: .42rem;
            background-color: #fff;
            li{
                display: flex;
                
                height: 1rem;
                span{
                    line-height: 1rem;
                }
                
                :first-child{
                    padding-right: 0.6rem;
                    flex: 3;
                    text-align:right;
                }
                :last-child{
                    flex: 9;
                    color: #8f8f8f;
                }
            }
        }
    }
</style>