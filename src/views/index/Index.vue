<template>
  <div class="index_conainer">
    <div class="tuo_header">
      <div class="logo">
        <img
          src="../../assets/img/slogan01.png"
          alt=""
          class="imgT"
        >
        <img
          src="../../assets/img/logo.png"
          alt=""
        >
        <img
          src="../../assets/img/slogan02.png"
          alt=""
          class="imgT"
        >
      </div>
      <div class='banner1'>
        <swiper
          :list="baseList"
          loop
          height='200px'
        ></swiper>
      </div>
    </div>
    <a
      class="hot_line"
      :href="phone"
    >
      <img
        src="../../assets/img/call.png"
        alt=""
        class="call"
      >
      <span class="yunche"> 运车热线：</span>
      <span class="phone"> 400-877-1107 </span>
    </a>
    <div class="tuo_grid clearfix">
      <router-link
        tag="dl"
        v-for="(item,index) in navList"
        :to='item.url'
        :key='index'
      >
        <dt @click="navLink(item)"><img
            :src="item.imgUrl"
            alt=""
          ></dt>
        <dd>{{item.text}}</dd>
      </router-link>
    </div>
    <div class="tuo_form">
      <group>
        <x-address
          title="始发地"
          :list='addressList'
          placeholder="请选择始发地"
          value-text-align='left'
          v-model="submitParams.departurePlace.value"
        ></x-address>
      </group>

      <group>
        <x-address
          title="目的地"
          :list='addressList'
          placeholder="请选择目的地"
          value-text-align='left'
          v-model="submitParams.destination.value"
        ></x-address>
      </group>
      <!-- <x-input title="手机号">
          <span
            slot="right"
            class="price_lock"
            @click="quiryPrice"
          >
            <img
              src="../../assets/img/btn-inquiry.png"
              alt=""
            ></span>
        </x-input> -->
      <group>
        <popup-picker
          title="车&nbsp;&nbsp;&nbsp;型"
          value-text-align='left'
          :data='carStyle'
          placeholder="请选择车型"
          :fixed-columns="2"
          :columns=2
          v-model='submitParams.brandId.value'
          show-name
          @on-change='carChange'
        ></popup-picker>
      </group>
      <!-- <x-address
          title="车&nbsp;&nbsp;&nbsp;型"
          :list='[]'
          placeholder="请选择车型"
          value-text-align='left'
        >
        </x-address> -->
      <group>
        <x-input
          title="手机号"
          v-model='submitParams.phone.value'
        >
          <span
            slot="right"
            class="price_lock"
            @click="quiryPrice"
          >
            <img
              src="../../assets/img/btn-inquiry.png"
              alt=""
            ></span>
        </x-input>
      </group>

    </div>
    <div class="five_step">
      <h3>妥妥运车，只需<span>5</span>步</h3>
      <div class="detail_step">
        <dl>
          <dt> <img
              src="../../assets/img/car_step_01.png"
              alt=""
              class="step"
            ></dt>
          <dd>1.快速下单</dd>
        </dl>

        <img
          src="../../assets/img/right_row.png"
          alt=""
          class="row"
        >
        <dl>
          <dt> <img
              src="../../assets/img/car_step_02.png"
              alt=""
              class="step"
            ></dt>
          <dd>2.验车提车</dd>
        </dl>

        <img
          src="../../assets/img/right_row.png"
          alt=""
          class="row"
        >
        <dl>
          <dt> <img
              src="../../assets/img/car_step_03.png"
              alt=""
              class="step"
            ></dt>
          <dd>3.签署协议</dd>
        </dl>

        <img
          src="../../assets/img/right_row.png"
          alt=""
          class="row"
        >
        <dl>
          <dt> <img
              src="../../assets/img/car_step_04.png"
              alt=""
              class="step"
            ></dt>
          <dd>4.妥妥运车</dd>
        </dl>

        <img
          src="../../assets/img/right_row.png"
          alt=""
          class="row"
        >
        <dl>
          <dt> <img
              src="../../assets/img/car_step_05.png"
              alt=""
              class="step"
            ></dt>
          <dd>5.验车交车</dd>
        </dl>

      </div>
    </div>
    <div class="six_goods">
      <h3><span>6</span>大优势-让运车更安心！</h3>
      <div class="cont">
        <dl
          class="six_detail"
          v-for="(item,index) in six_goods"
          :key='index'
        >
          <dt>{{ index+1 }}</dt>
          <dd>
            <p class="title">{{item.title}}</p>
            <p class="desc">{{item.desc}}</p>
          </dd>
        </dl>
      </div>
    </div>
    <div class="two_hundred">
      全国陆续上线 <span class="two"> 200 <span class="jia">+</span></span>家运输网点
    </div>
    <router-link
      class="tuo_map"
      tag="div"
      to="/contactus"
    >
      <div class="btn"> 查看网点 ></div>
    </router-link>
    <div class="car_xinlai">
      车主的<span>信赖</span>，我们的<span>承诺</span>！
    </div>
    <div class="tuo_swiper2">
      <swiper dots-position='center'>
        <swiper-item class="banner" v-for="(item,index) in promiseBannerList" :key='index'>
          <dl>
            <dt>
              <img
                :src="item.img"
                alt=""
              >
              <p class="name">{{item.name}}</p>
            </dt>
            <dd>
              <p>
               {{item.desc}}
              </p>
            </dd>
          </dl>
        </swiper-item>
      </swiper>
    </div>
    <div class="car_issues">
      运车常见<span>问题解答</span>
    </div>
    <div class="common_issues">
      <template v-for='(item,index) in common_issues'>
        <div
          v-bind:key="index"
          class="issuesList"
        >
          <cell
            is-link
            :border-intent="false"
            :arrow-direction="item.toggle ? 'up' : 'down'"
            @click.native="item.toggle  =! item.toggle "
          >
            <div
              slot="title"
              class="title_issues"
            >
              <span class="q">Q{{index+1}}</span>
              <p>{{item.title}}</p>
            </div>
          </cell>
          <p
            v-bind:key="index"
            class="slide"
            :class="item.toggle ?'animate':''"
            v-html="item.desc"
          ></p>
        </div>
      </template>
    </div>
    <div class="tuo_footer">
      <a :href="phone">
        <img
          src="../../assets/img/b-btn-call.png"
          alt=""
        ></a>
    </div>
    <Dialog :visible.sync='showDialogStyle' :priceResult='priceResult'></Dialog>
  </div>
</template>
<script>
import { globalData, api } from "api";
import { config, getCascaderSelectedName } from "utils";

import {
  Grid,
  XInput,
  Cell,
  Swiper,
  SwiperItem,
  Group,
  XAddress,
  PopupPicker,
  ChinaAddressData
} from "vux";
import Dialog from "./Dialog.vue";
import { navList, six_goods, common_issues } from "./dict.js";
const { getCarStyle } = globalData;
const { getPriceResult } = api;
const { hotline } = config;

export default {
  name: "Index",

  components: {
    XInput,
    Cell,
    Swiper,
    SwiperItem,
    PopupPicker,
    XAddress,
    Group,
    Dialog
  },
  data() {
    return {
      carBoss: false,
      navList,
      six_goods,
      common_issues,
      phone: "tel:" + hotline,
      addressList: ChinaAddressData,
      carStyle: [], // 车辆款型
      showDialogStyle: false,
      priceResult:{},
      submitParams: {
        departurePlace: {
          value: [],
          message: "请选择始发地"
        },
        destination: {
          value: [],
          message: "请选择目的地"
        },
        brandId: {
          value: [],
          message: "请选择车型"
        },
        phone: {
          value: "",
          message: "请输入手机号"
        }
      },
      selectCarStyle: [],
      promiseBannerList: [
        {
          img: require('./img/head1.jpg'),
          name: "王先生",
          desc: "朋友介绍用了妥妥，她家客服很亲切，从提车到交车全程跟进，总能收到系统推送的车辆状态，安心，下次出行还会选择妥妥。"
        },
         {
          img: require('./img/head2.jpg'),
          name: "张先生",
          desc: "经常去带着老婆旅游，自己开车路途太累，到了地方打车味道难闻，还是喜欢开自己的车在喜欢的城市，感谢妥妥这个平台，让我们这些旅游爱好者感受到了方便。"
        },
         {
          img: require('./img/head3.jpg'),
          name: "李女士",
          desc: "喜欢带着家人自驾游，朋友介绍了妥妥运车，客服告知的时间很准时，不用在当地多等，客服很耐心给予发车时间和到车时间意见，到了就去提车，省心省力。"
        },
        {
          img: require('./img/head4.jpg'),
          name: "孙女士",
          desc: "很不错的一个平台，以前只知道货物可以发物流，没想到车也可以发物流，车辆很安全的就到达目的地，还有车辆合同和保险提供，运着很安心，公司很正规。"
        },
        {
          img: require('./img/head5.jpg'),
          name: "陈先生",
          desc: "说北京买车便宜，朋友正好在北京卖车，正愁怎么运回来呢，网上搜到了妥妥运车，就试着用了，很专业还帮忙验车拍了好多照片。收到完好无损，时效也有保障。"
        },
      ],
      baseList: [
        {
          url: "javascript:",
          img: require("./img/first.png")
          // title: "送你一朵fua"
        },
        {
          url: "javascript:",
          img: require("./img/second.png")
          // title: "送你一辆车"
        },
        {
          url: "javascript:",
          img: require("./img/third.png")
          // title: "送你一次旅行",
        }
      ]
    };
  },
  methods: {
    carChange(val) {
      //   console.log(val);
    },
    goHome() {},
    navLink(item) {
      if (!item.url) {
        this.showTip();
      }
    },
    showTip() {
      this.$vux.toast.show({
        text: "暂时未开放",
        time: 2000,
        type: "warn",
        position: "middle"
      });
    },
    quiryPrice() {

      let params = this.submitParams;
      let fields = {};
      for (let key in params) {
        fields[key] = params[key].value;
        if (params[key].value.length === 0) {
          this.$vux.toast.show({
            text: params[key].message,
            type: "text",
            position: "top",
            width: "auto"
          });
          return;
          break;
        }
      }
      fields["departurePlace"] = getCascaderSelectedName(
        this.addressList,
        fields.departurePlace
      );
      fields["destination"] = getCascaderSelectedName(
        this.addressList,
        fields.destination
      );
      fields['brandId'] = getCascaderSelectedName(this.carStyle, fields.brandId)
      getPriceResult(fields).then((res) => {
          if(res.success){
            this.priceResult = {
              start: fields.departurePlace[0],
              end: fields.destination[0],
              phone: fields.phone,
              // style: fields.brandId.join(''),
              style: fields.brandId.join(''),
              fee: res.data.fee.toFixed(2),
            }
            // console.log(this.priceResult)
            this.showDialogStyle = true;
          }else{
              this.$vux.toast.show({
                text: "查询失败",
                // time: 900000,
                type: "cancel",
                position: "middle"
            });
          }
      })
      //   submitParams
      //   this.showTip();
    }
  },
  mounted() {
    getCarStyle().then(res => {
      if (res.success) {
        this.carStyle = res.list;
      }
    });
  }
};
</script>
<style lang="less">
.index_conainer {
  // max-width: 818px;
  // margin: auto;
  background: white;
  font-size: 50px;
  color: white;
  .tuo_header {
    text-align: center;
    .logo {
      background: url("../layput/img/head-bg.png") center center no-repeat;
      width: 100%;
      height: 160px;
      background-size: cover;
      position: relative;
      z-index: 20;
      padding-top: 14px;
      padding-bottom: 6px;
    }
    .imgT {
      margin-top: 26px;
    }
    img {
      width: 26%;
      vertical-align: top;
      margin: 0 10px;
    }
  }
  .banner1 {
    margin-top: -78px;
  }
  .hot_line {
    display: block;
    width: 100%;
    background-color: @f_c_e;
    height: 120px;
    line-height: 120px;
    box-sizing: border-box;
    color: white;
    .call {
      width: 66px;
      vertical-align: middle;
      margin-left: 28px;
    }
    .yunche {
      font-size: 40px;
    }
  }
  .tuo_grid {
    padding: 24px 0 20px;
    background: white;
    dl {
      width: 15%;
      margin: 0 5%;
      display: inline-block;
      color: @f_c_2;
      text-align: center;
      dt {
        img {
          width: 100%;
        }
      }
      dd {
        font-size: 26px;
      }
    }
    dl:nth-child(-n + 4) {
      margin-bottom: 17px;
    }
  }
  .tuo_form {
    background-color: @bac;
    height: 450px;
    overflow: hidden;
    padding: 0 40px;
    .weui-cell_access .weui-cell__ft:after {
      width: 18px;
      height: 18px;
    }
    .hei {
      height: 20px;
      background: @bac;
    }
    .price_lock {
      background: @bac;
      position: absolute;
      right: -40px;
      height: 96px;
      width: 220px;
      top: -24px;
      img {
        width: 210px;
        position: relative;
        top: 8px;
      }
    }
    .weui-cell {
      background: white;
      margin: 20px 40px;
      border-radius: 8px;
      color: @f_c_2;
      font-size: 28px;
      padding: 0;
      .weui-input {
        border-left: 1px solid @f_c_2;
        text-indent: 40px;
      }
    }
    .weui-cell:before {
      border-top: none;
    }
    .vux-popup-picker-select {
      width: 100%;
      position: relative;
      margin-left: 30px;
      padding-left: 30px;
      border-left: 1px solid @f_c_2;
      /* height: 20px; */
    }
  }
  .five_step {
    color: white;
    background-color: @f_c_2;
    overflow: hidden;
    .detail_step {
      margin: 0 auto;
      width: 92%;
      text-align: center;
      dl {
        display: inline-block;
        width: 17%;
        margin: 24px 0 40px 0;
        img {
          width: 88px;
        }
        dd {
          font-size: 24px;
        }
      }
      .row {
        width: 20px;
        vertical-align: middle;
        margin: 0 -20px;
        position: relative;
        top: -74px;
      }
    }
    h3 {
      text-align: center;
      margin-top: 17px;
      font-size: 40px;
      span {
        color: @f_c_e;
        font-family: @f_m_n;
        font-size: 60px;
        margin: 0 10px;
      }
    }
  }
  .six_goods {
    width: 100%;
    background: url("../../assets/img/advantage-bg.png") 0 0 no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    // height: 1800px;
    margin-top: -32px;
    overflow: hidden;
    padding-bottom: 400px;
    // .six_goods:before{content: ""; display: block; padding-top: 100%;}
    h3 {
      text-align: center;
      margin-top: 48px;
      margin-bottom: 36px;
      font-size: 44px;
      color: @f_c_2;
      span {
        color: @f_c_e;
        font-family: "STZhongsong";
        font-size: 84px;
        margin: 0 20px;
        position: relative;
        top: 10px;
      }
    }
    .cont {
      .six_detail {
        width: 86%;
        margin: 40px 7%;
        padding-bottom: 28px;
        border-bottom: 1px solid @bor;
        display: flex;
        align-items: center; /*垂直居中*/
        //  justify-content: center;/*水平居中*/
        dt {
          display: inline-block;
          width: 100px;
          height: 100px;
          background-color: @f_c_e;
          border-radius: 50%;
          text-align: center;
          line-height: 100px;
          margin-right: 40px;
          font-family: @f_m_n;
          font-size: 64px;
          flex-shrink: 0;
        }
        dd {
          display: inline-block;
          .title {
            color: @f_c_2;
            font-size: 36px;
          }
          .desc {
            color: @f_c_7;
            font-size: 26px;
            // margin-top: 10px;
            line-height: 36px;
          }
        }
      }
      .six_detail:last-child {
        border-bottom: none;
      }
    }
  }
  .two_hundred {
    width: 100%;
    background: @f_c_e;
    height: 120px;
    font-size: 40px;
    line-height: 120px;
    color: @f_c_f;
    text-align: center;
    .two {
      font-size: 70px;
      font-family: @f_m_n;
      margin-right: -10px;
    }
    .jia {
      font-size: 50px;
      position: relative;
      top: -20px;
      left: -24px;
    }
    span {
      color: white;
    }
  }
  .tuo_map {
    background: url("../../assets/img/map.png") 0 0 no-repeat;
    width: 100%;
    height: 574px;
    background-size: 100% 100%;
    overflow: hidden;
    .btn {
      color: @f_c_e;
      width: 200px;
      margin: 0 auto;
      font-size: 24px;
      border: 2px solid @f_c_e;
      box-sizing: border-box;
      padding: 10px 20px;
      text-align: center;
      border-radius: 60px;
      box-shadow: 0 0 4px @f_c_e;
      margin-top: 40px;
    }
  }
  .common_issues {
    color: @f_c_3;
    padding-bottom: 100px;
    .issuesList {
      margin: 10px 0 0 40px;
      padding-right: 40px;
      border-top: 1px solid @bor;
      box-sizing: border-box;
    }

    .issuesList:first-child {
      border-top: none;
    }

    .q {
      color: @f_c_e;
      margin-right: 10px;
      font-size: 40px;
      width: 88px;
      flex-shrink: 0;
    }
    .slide {
      padding: 0 40px 0 110px;
      font-size: 32px;
      color: #818080;
      line-height: 48px;
      overflow: hidden;
      max-height: 0;
      transition: max-height 0.5s cubic-bezier(0, 1, 0, 1) -0.1s;
    }
    .title_issues {
      color: #3c2f29;
      font-size: 30px;
      display: flex;
      line-height: 46px;
      p {
        font-size: 34px;
      }
    }
    .animate {
      max-height: 9999px;
      transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
      transition-delay: 0s;
    }
    .weui-cell_access .weui-cell__ft {
      top: -12px;
    }
    .weui-cell_access .weui-cell__ft:after {
      width: 26px;
      height: 26px;
    }
  }
  .car_xinlai {
    width: 100%;
    height: 120px;
    line-height: 120px;
    color: @f_c_3;
    background: white;
    font-size: 48px;
    text-align: center;
    border-top: 1px solid @bor;
    border-bottom: 1px solid @bor;
    span {
      color: @f_c_e;
    }
  }
  .tuo_swiper2 {
    .banner {
      background-color: @bac;
      dl {
        // padding: 22px 22px 0 22px;
        width: 100%;
        padding: 44px 30px;
        box-sizing: border-box;
        dt {
          display: inline-block;
          text-align: center;
          // font-size: 36px;
          color: @f_c_2;
          width:23%;
          vertical-align: top;
          img {
            width: 110px;
            border-radius: 50%;
          }
          .name {
            font-size: 28px;
          }
        }
        dd {
          display: inline-block;
          width: 70%;
          overflow: hidden;
          p {
            font-size: 28px;
            line-height: 60px;
            color: black;
            //只显示4行
            // height: 250px;
            // line-height: 60px;
            // overflow: hidden;
            // display: -webkit-box;
            // text-overflow: ellipsis;
            // -webkit-line-clamp: 4;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      }
    }
  }
  .car_issues {
    height: 120px;
    background-color: @bac;
    line-height: 120px;
    border-top: 1px solid @bor;
    border-bottom: 1px solid @bor;
    margin: 24px auto;
    font-size: 48px;
    color: @f_c_3;
    text-align: center;
    span {
      color: @f_c_e;
    }
  }
  .tuo_footer {
    width: 100%;
    background-color: black;
    background:-webkit-gradient(linear, 0 0, 0 100%, from(rgba(255,255,255, 0)), to(rgba(255,255,255,0.8)));
    background:-moz-linear-gradient(top, rgba(255,255,255, 0),rgba(255,255,255,0.8));
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=rgba(255,255,255, 0),endColorstr=rgba(255,255,255, 0.8),grandientType=0);
    margin-top: 20px;
    text-align: center;
    padding: 24px 10px 0px;
    box-sizing: border-box;
    position: fixed;
    bottom: -14px;
    img {
      width: 100%;
    }
  }
}
</style>
