<template>
    <div class='tmplBusinessNow'>
        <h3 v-show="isHideHs">当前业务</h3>
        <div class="mui-content">
            <div class="mui-card">
                <!--页眉，放置标题-->
                <div class="mui-card-header">
                    <h4>中集盐田</h4>
                    <p>截止时间：{{ data | fmtDate()}}</p>
                </div>
                <!--内容区-->
                <div class="mui-card-content">
                    <router-link to = '/'>
                        <businessTypeBox  class="box_l mui-media-object mui-pull-left"  :commentType = '1' :typeData = 'typeDatas1' dataRate = '8000'></businessTypeBox>
                        <div class="mui-media-body">
                            <p>YML20170812{{ waitDataS.waybillAddress }}</p>
                            <p>华南物流提/湖南湘潭阳明装/YICT还/40GP&nbsp;&nbsp;&nbsp;&nbsp;17吨</p>
                        </div>
                        <businessTypeBoxRight v-show="isShowRightBox" class="box_l mui-media-object mui-pull-right"  :commentType = '2' :typeData = 'typeDatas2' dataRate = '12578'></businessTypeBoxRight>
                    </router-link>                    
                </div>
                <!--页脚，放置补充信息或支持的操作-->
                <!-- <div class="mui-card-footer"></div> -->
            </div>
        </div>
    </div>
</template>

<script>
import businessTypeBox from '@C/businessTypeBox.vue'
import businessTypeBoxRight from '@C/businessTypeBoxRight.vue'
export default {
    data() {
        return {
            data : new Date(),
            typeDatas1 : '出口',
            typeDatas2 : '现结',
            isShowRightBox:false,
            waitDataS:{},
            isHideHs:false
        }
    },
    created() {
        // this.$nextTick(function(){
        //     this.waitDataS = this.waitData;
        //     // this.$isShowRightBox()
        // })
        this.$isShowRightBox()
        
    },
    methods: {
        $isShowRightBox(){
            this.isShowRightBoxs != null ? this.isShowRightBox = this.isShowRightBoxs : this.isShowRightBox = false;
            console.log(this.waitData)

            this.waitDataS = this.waitData;
            this.isHideH !=null ? this.isHideHs = this.isHideH : this.isHideHs = false;
            console.log(this.waitDataS[0])
        }
    },
    components:{
      businessTypeBox,  
      businessTypeBoxRight   
    },
    computed:{
        
    },
    props:['isShowRightBoxs','waitData','isHideH']
}
</script>

<style scoped>
    
</style>