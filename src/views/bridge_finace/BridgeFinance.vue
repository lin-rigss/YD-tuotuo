<template>
 <div class="bridge_finance">
   <img src="./img/banner.png" alt="" class="banner">
   <div class="business">
        <h3>
           业务流程
        </h3>
        <img src="./img/businessFlow.png" alt="" class="business">
   </div>
   <div class="hzhb">
     <h3>
       合作伙伴
     </h3>
     <img src="./img/hzhb.png" alt="">
   </div>
   
  </div>
</template>
 
<script>
  export default {
    name:'bridgefinace'
  }
</script>
<style lang="less" scoped>
.bridge_finance{
 
  img{
    width: 100%;
  }
  h3{
    .text_title(@color:@f_c_e;@font_size:48px)
  }
  .banner{
    display: inline-block;
    margin-top: -60px;
  }
  .business{
    background: @bac;
    margin-top: -8px;
    overflow: hidden;
    h3{
      margin: 40px 0 20px;;
    }
  }
  .hzhb{
    background: white;
    padding-bottom: 60px;
    h3{
      margin: 40px 0 30px;
    }
  }
}
</style>
