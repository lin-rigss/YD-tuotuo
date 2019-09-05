<template>
  <div class="tuo_news">
    <div class="new_list">
      <!-- v-for="(item,index) in list" -->
      <div class="content" @click="() => toDetail(item.id)" v-for="(item) in list" :key="item.id">
        <h3 class="padding">{{item.title}}</h3>
        <img :src="item.imgUrl" alt="">
        <p class="desc padding">
          {{item.description}}
        </p>
        <p class="time padding">{{item.createTime}}</p>
      </div>
      <!-- <div class="content">
        <h3 class="padding">妥妥运车就是这么得天独厚</h3>
        <p class="desc padding">
          冷风机爱德华斯拉夫静安寺冷风机爱德华斯拉夫静安寺冷风机爱德华斯拉夫静安寺冷风机爱德华斯拉夫静安寺冷风机爱德华斯拉夫静安寺冷风机爱德华斯拉夫静安寺冷风机爱德华斯拉夫静安寺冷风机爱德华斯拉夫静安寺冷风机爱德华斯拉夫静安寺冷风机爱德华斯拉夫静安寺冷风机爱德华斯拉夫静安寺冷风机爱德华斯拉夫静安寺冷风机爱德华斯拉夫静安寺冷风机爱德华斯拉夫静安寺
        </p>
        <p class="time padding">2018-06-06</p>
      </div> -->
    </div>
    <template v-if="!loadOver">
      <div class="loadMore" v-if="!isLoading" @click="fetchData">查看更多</div>
      <p style="text-align:center;margin-top:15px" v-if="isLoading">
        <inline-loading></inline-loading
        ><span
          style="vertical-align:middle;display:inline-block;font-size:14px;"
          >&nbsp;&nbsp;加载中</span
        >
      </p>
    </template>

    <div class="nomore" v-if="loadOver">
      <divider>我也是有底线的</divider>
    </div>
  </div>
</template>
<script>
import { api } from "../../api";
import { Divider, InlineLoading } from "vux";
export default {
  name: "tuonews",
  components: {
    Divider,
    InlineLoading
  },
  data() {
    return {
      list: [],
      loadOver: false,
      isLoading: true,
      page: 1,
      size: 4
    };
  },
  methods: {
    getList(query) {
      api.getNewsList(query).then(res => {
        if(res.success){
          this.isLoading = false
          this.list = res.data.records
          if(this.list.length === res.data.total){
              this.loadOver = true
          }
        }
      });
    },
    toDetail(id) {
      this.$router.push({
        path: "/newsdetail",
        query: {
          newid: id
        }
      });
    },
    fetchData() {
      this.isLoading = true;
    }
  },
  mounted() {
    let query ={
      page: this.page,
      size: this.size
    }
    this.getList(query);
  }
};
</script>
<style lang="less">
.tuo_news {
  width: 100%;
  // background-color: @bac;
  // min-height: 100vh;
  margin-top: -60px;
  padding-top: 75px;
  .new_list {
    .content {
      margin-bottom: 14px;
      background: white;
      padding-bottom: 10px;
      img{
        width: 90%;
        margin: 6px 5%;
      }
    }
    .padding {
      padding: 0 30px;
    }
    h3 {
      font-size: 32px;
      color: @f_c_2;
      height: 76px;
      line-height: 76px;
      font-weight: 500;
    }
    .desc {
      font-size: 26px;
      color: #777777;
      line-height: 36px;
      margin-top: -6px;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .time {
      font-size: 24px;
      color: #cccccc;
      margin-top: 8px;
    }
  }
  .loadMore {
    text-align: center;
    color: #999;
    font-size: 26px;
    margin: 30px auto;
  }
  .nomore {
    font-size: 26px;
    width: 60%;
    margin: 30px 20%;
  }
}
</style>

