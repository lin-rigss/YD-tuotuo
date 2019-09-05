
<template>
  <div class="common_pro">
    <h3>
      运车常见问题解答
    </h3>
    <div class="issues_list">
      <div class="detail" v-for="(item,index) in commonIssues" :key="index">
        <h4 class="clearfix"><span class="index">Q{{ index>8 ? index+1:`0${index+1}` }}</span> <span class="title"> {{item.title}} </span> </h4>
        <p v-html='item.desc'>
        </p>
      </div>
    </div>
  </div>
</template>
 
<script>
import { commonIssues } from './dict.js'
export default {
  name: "commonproblem",
  data(){
    return {
      commonIssues
    }
  }
};
</script>
<style lang="less" scoped>
.common_pro {
  h3 {
    .text_title(@font_size:48px);
    margin: 30px auto;
  }
  .issues_list {
    padding-bottom: 100px;
    .detail {
      box-sizing: border-box;
      margin: 30px 40px;
      padding: 0 0 20px;
      border-bottom: 2px solid @bor;
      &:last-child{
        border-bottom:none;
      }
      .index{
         font-size: 33px;
         color: @f_c_e;
         vertical-align: top;
         position: relative;
         top: -6px;
      }
      .title{
        display: inline-block;
        width: 87%;
      }
      h4{
        color: #3c2f29;
        font-size: 29px;
        font-weight: 400;
      }
      p{
        box-sizing: border-box;
        padding-left: 74px;
        font-size: 24px;
        color:#818080;
      }
    }
  }
}
</style>
