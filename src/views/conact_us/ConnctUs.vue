<template>
  <div class="contact_us">
    <div class="banner">
      <img src="./img/banner.png" alt="">
    </div>
    <div class="locatin_list">
      <div class="detail" v-for='(item,index) in address_name' :key="index">
        <h3>{{ item.title}}</h3>
        <p class="locaton"><img src="./img/location.png" alt="">{{item.address}}</p>
        <p><img src="./img/person.png" alt="">联系人：{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { address_name } from './dict.js'
  export default {
    name:'ContactUs',
    data(){
      return {
        address_name
      }
    }
  }
</script>
<style lang="less" scoped>
.contact_us{
  .banner{
    margin-top: -55px;
    img{
      width: 100%;
    }
  }
  .locatin_list{
    .detail{
      width: 680px;
      margin: 30px auto;
      box-sizing: border-box;
      border: 2px solid @bor;
      box-shadow: 0 0 20px @bor;
      border-radius: 30px;
      padding: 30px 30px;
      h3{
        font-size: 27px;
        color: @f_c_2;
        font-weight: 400;
      }
      img{
        width: 30px;
        position: relative;
        top: 4px;
        margin-right: 10px;
      }
      .locaton{
        margin: 18px 0 10px;
        p{
          font-size: 24px;
          color: @f_c_7;
        }
      }
    }
  }
}
</style>
