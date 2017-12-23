<template>
<div class="tmplBusinessSwiper">
  <mt-swipe :auto="0">
    <mt-swipe-item v-for="n in 4" :key="n">
         <businessMonthBill></businessMonthBill>         
    </mt-swipe-item> 
</mt-swipe>
</div>
</template>
<style lang="scss" scoped>
    .tmplBusinessSwiper{
        width: 100%;
        height: 9.2rem;
        background-color: #26A2FF;
        .mint-swipe-indicator{
            .mint-swipe-indicators{
            position: absolute;
            bottom:0.2rem !important;
            left: 50%;
            transform: translateX(-50%);
            } 
        }
       
    }
</style>


<script>

import businessMonthBill from '@C/businessBill/businessMonthBill.vue'
import { Swipe, SwipeItem } from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
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
       businessMonthBill,
        Swipe,
        SwipeItem
    }
}
</script>

