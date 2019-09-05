<template>
  <div class="ordersuccess">
    <icon type="success"></icon>
    <p class="success">下单成功</p>
    <div class="des">
      <p class="thank">感谢您的查询，稍后会有客服为您提供服务</p>
      <p class="phone">请注意接听来来电</p>
    </div>
    <router-link v-bind:to="'index'" tag="div" class="btn">
    我知道了
    </router-link>

  </div>
</template>
<script>

import {
  Icon,
} from "vux";
export default {
  name: "OrderSuccess",
  components:{
    Icon,
  }
};
</script>
<style lang="less">
.ordersuccess {
  text-align: center;
  margin-top: 40px;
  .weui-icon-success{
    font-size: 150px;
  }
  .success {
    font-size: 48px;
    color: #87ba37;
    margin-top:40px;
  }
  .des {
    font-size: 30px;
    line-height: 60px;
    margin-top: 72px;
    .thank {
      color: @f_c_b;
    }

    .phone {
      color: @red;
    }
  }
  .btn {
    width: 440px;
    font-size: 36px;
    margin: 120px auto 0;
    background: white;
    height: 100px;
    line-height: 100px;
    color: @red;
    border-radius: 50px;
    border: 2px solid #d2d2d2;
    box-shadow: 1 20px #d2d2d2;
  }
}
</style>


