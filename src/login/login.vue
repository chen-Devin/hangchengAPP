<template>
    <div class='tmpl'>
        <form @submit.stop.prevent="login">
            <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
            <mt-button @click.login="handleClick">登录</mt-button>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
           username:'', 
           password:''
        }
    },
    created() {
        
    },
    methods: {
      login(){
        if (this.token) {
          this.$store.commit(types.LOGIN, this.token)
          let redirect = decodeURIComponent(this.$route.query.redirect || '/');
          this.$router.push({
            path: redirect
          })
        }
      }
    }
}
</script>

<style lang='scss'>
    
</style>