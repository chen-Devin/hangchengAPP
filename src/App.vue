<template>
  <div id="app">
    <!-- 1.0 标题 -->
    <mt-header fixed :title="title"></mt-header>
    <p v-show="isShowBack" @click="goBack" class="backStyle">&lt;</p>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
        <!-- 3.0 底部的TabBar -->
    <!-- <mt-tabbar fixed :class="isHiddenTabbar ? 'hiddenTabbarStyle' : ''"> -->
    <mt-tabbar fixed>
      <mt-tab-item id="首页">
        <router-link to="/home">
          <span>我的首页</span>
        </router-link>
      </mt-tab-item>

      <mt-tab-item id="找货">
        <router-link to="/findCommodity">
          <span>找货</span>
        </router-link>
      </mt-tab-item>

      <mt-tab-item id="我的业务">
        <router-link to="/businessMy">
          <span>我的业务</span>
        </router-link>
      </mt-tab-item>

      <mt-tab-item id="我的">
        <router-link to="/mine">
          <span>我的</span>
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isShowBack:false,
    }
  },
  created(){
      this.isShowOrHidden(this.$route.path)
    },
  computed: {
    title () {
        switch (this.$route.path.split('/')[1]) {
            case '':
              return "运单详情"
            case 'home':
              return "运单详情"
            case 'findCommodity':
              return "找货"
            case 'businessMy':
              return "我的业务"
            case 'mine':
              return "我的"
            case 'businessMy/waybillDetail':
              return "运单详情"
        }
      }
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    },
    isShowOrHidden(path){
      if(path == '/home'){
        this.isShowBack = false
      }else{
        this.isShowBack = true
      }
    }
  },
  watch:{
    $route:function (newVal, oldVal) {
      this.isShowOrHidden(newVal.path)
    }
  }

}
</script>

<style lang="scss">
.mint-header{
  height: 1.6rem;
}
.mint-header-title{
  font-size: .52rem
}
.mint-tabbar{
  height: 1rem;
  a{
    font-size: .38rem;
    line-height: .38rem;
    // margin-top: .3rem;
  }
}
.backStyle{
  position: fixed; 
  left: .5rem;
  top:0.55rem;
  z-index: 2;
  font-size: .5rem;
  color: #ffffff;
  font-weight: 900;
}
</style>
