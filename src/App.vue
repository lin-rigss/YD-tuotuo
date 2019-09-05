<template>
  <div
    style="height:100%;"
    id="app"
  >
    <router-view></router-view>
  </div>
</template>

<script>
// const userInfo = JSON.parse(localStorage.getItem('user'))
// console.log(userInfo)

export default {
  name: "app",
  mounted() {
    this.$nextTick(() => {

    });
  }
};
</script>

<style lang="less">
@button-default-active-bg-color: black;
@import "~vux/src/styles/reset.less";
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/tap.less";
@import "./styles/common/skin.less";
#app {
  max-width: 1500px;
  margin: 0 auto;
}
.footerBtn {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 100;
    height: 118px;
    font-size: 38px;
    background: @red;
    color: white;
    line-height: 118px;
    text-align: center;
  }
.clearfix {
  &:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }
}
</style>


