<template>
    <div class='tmplFindCommodityInfo'>
        <div class="title">
            <div class="titleBtn">
                <a class="titleBtnOne" :class="{'colorOne':!colorType}" @click="titleBtnOneClick">指定运输</a><a class="titleBtnTwo" :class="{'colorOne':colorType}" @click="titleBtnTwoClick">市场货源</a>
            </div>
        </div>
        <div class="centent">
            <!-- <findCommodi :pastDueShow = 'true' ></findCommodi> -->
            <findCommodi :pastDueShow = 'true'></findCommodi>
            <findCommodi></findCommodi>
        </div>
    </div>
</template>
    
<script>
import findCommodi from '@C/businessView/findCommodi.vue'
export default {
    data() {
        return {
            colorType:true
        }
    },
    created() {

    },
    methods: {
        titleBtnTwoClick(){
            this.colorType = false;
        },
        titleBtnOneClick(){
            this.colorType = true;
        }
    },
    components:{
      findCommodi
    }
}
</script>

<style lang = "scss">
    .tmplFindCommodityInfo{
        
        .title{
            position: relative;
            top: .3rem;
            text-align: center;
           .titleBtn{
               display: inline-block;
               /* width: 5.7rem; */
               height: .9rem;
               a{
                   display: inline-block;
                   width: 2.85rem;
                   box-sizing: border-box;
                   height: .9rem;
                   line-height: .9rem;
                   font-size: .4rem;
                   color: #fff;
                   background-color: #27a2f0;
                   border: 1px solid #27a2f0;
               }
               .titleBtnOne{
                    
                    border-bottom-left-radius: .45rem;
                    border-top-left-radius: .45rem;
                    
                }
                .titleBtnTwo{
                    /* background-color: #fff;
                    color: #27a2f0;
                    border: 1px solid #999; */
                    border-bottom-right-radius: .45rem;
                    border-top-right-radius: .45rem;
                }
                .colorOne{
                    background-color: #fff;
                    color: #27a2f0;
                    border: 1px solid #999;
                } 
                
           } 
        }
        .centent{
            position: relative;
            top:.2rem;
        }
    }
</style>