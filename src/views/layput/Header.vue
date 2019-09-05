<template>
  <div class="mobil_container">
    <div class="header clearfix">
      <img
        src="./img/back.png"
        alt=""
        class="back"
        @click="goback"
      >
      <img
        src="./img/logo.png"
        alt=""
        class="logo"
      >
      <img
        src="./img/home.png"
        alt=""
        class="right"
        @click="goHome"
      >
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Header",
  methods:{
    goback(){
      this.$router.go(-1)
    },
    goHome(){
      this.$router.push('/index')
    }
  }
};
</script>
<style lang="less">
.mobil_container {
  .header {
    background: url("./img/head-bg.png") 0 0 no-repeat;
    width: 100%;
    height: 180px;
    background-size: 100% 180px;
    position: relative;
    .logo {
      position: absolute;
      width: 200px;
      left: 50%;
      top: 10px;
      margin-left: -100px;
    }
    .back {
      float: left;
      width: 80px;
      margin: 22px 0 0 32px;
    }
    .right {
      float: right;
      margin: 26px 48px 0 0;
      width: 76px;
    }
  }
}
</style>
