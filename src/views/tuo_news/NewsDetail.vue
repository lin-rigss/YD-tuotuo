<template>
  <div class="newsdetail">
    <div class="top">
      <h2>{{detail.title}}</h2>
      <p>{{detail.createTime}}</p>
    </div>
    <div class="content">
      <div v-html="detail.content">
        {{detail.content}}
      </div>
    </div>
  </div>
</template>
<script>
import { api } from '../../api'
export default {
  name: "newsDetail",
  data(){
    return {
      detail:{}
    }
  },
 methods:{
    getNew(id){
      api.getNewsDetail(id).then((res) => {
        if(res.success){
          this.detail = res.data
        }
      })
    }
  },
  mounted() {
    const newid = this.$route.query.newid || 1
    this.getNew({id:Number(newid)}) 
  }
};
</script>
<style lang="less">
.newsdetail{
  .top{
    text-align: center;
    margin-top: 20px;
    h2{
      margin: 20px 0 10px;
    }
  }
  .content{
    font-size: 34px;
    width: 90%;
    margin: 0 5%;
    p{
      line-height: 38px !important;
      span{
        font-size: 26px !important;
      }
    }
    img{
      width: 100%;
      display: inline-block;
      margin:10px auto;
    }
  }
}
</style>

