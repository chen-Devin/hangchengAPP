<template>
  <div class="costComparisonTpl">
      <div class="mui-content"> 
            <mt-popup v-show="myPanelShow" position="bottom" class="popup">
                <!-- <button class="mui-icon mui-icon-close">关闭弹窗</button> -->
                    <div class="objection-box">
                    </div>
            </mt-popup>
      </div> 
  </div>
</template>
<style lang="scss" scoped>
.costComparisonTpl{
    width:100%;
    height: 10.52rem;
}
</style>
<script>
import { Popup } from 'mint-ui';
export default {
  data () {
      return {
         myPanelShow:this.paneShow
      }
  },
  created () {
      
  },
  methods: {
      
  },
  components: {
      Popup,
  },
  props:['panelShow']
  
}
</script>

