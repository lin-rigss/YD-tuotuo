<template>
  <div v-transfer-dom>
    <x-dialog
      v-model="visible"
      :dialog-style="{'max-width': '100%','text-align':'center', width: '100%', height: '50%', 'background-color': 'transparent'}"
    >
      <div class="content">
        <div class="top">
          <span class="address">
            {{priceResult.start}}
          </span>
          <span class="detail">
            <span class="style">{{priceResult.style}}</span>
            <img
              :src="require('./img/arrow.png')"
              alt=""
            >
            <span class="car"> 汽车运输</span>
          </span>
          <span class="address">
            {{priceResult.end}}
          </span>
        </div>
        <div class="middle">
          <span>预估报价：</span><span class="price">{{priceResult.fee}}</span><span class="">元</span>
        </div>
        <div class="footer">
          {{priceResult.phone}}的用户，您好<br>
          感谢您的查询，稍后将会有客服为您提供服务。<br>
          <span class="phone">请注意接听来电！</span>
        </div>
        <div class="close" @click="close">
          知道了
        </div>
      </div>

      <!-- <div @click="close" class="close">
          <x-icon type="ios-close-outline" style="fill:#fff;"></x-icon>
        </div> -->
    </x-dialog>
  </div>
</template>
<script>
import { XDialog, TransferDomDirective as TransferDom } from "vux";
export default {
  name: "Dialog",
  props: ["visible", "priceResult"],
  directives: {
    TransferDom
  },
  components: {
    XDialog
  },
  data() {
    return {
      showDialogStyle: true
    };
  },
  methods: {
    close() {
      this.$emit("update:visible", false);
    }
  }
};
</script>
<style lang="less" scoped>
@import "~vux/src/styles/close";
.vux-close {
  font-size: 50px;
  color: white;
}

.content {
  box-sizing: border-box;
  border-radius: 30px;
  color: #989898;
  background-color: white;
  width: 84%;
  margin: auto;
  .close {
    background: #ea5512;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    height: 118px;
    line-height: 118px;
    font-size: 36px;
    color: white;
  }
  .top {
    border-bottom: 1px dashed @bor;
    height: 180px;
    padding-top: 24px;
    box-sizing: border-box;
    .address {
      color: black;
      font-size: 48px;
    }
    .detail {
      display: inline-block;
      position: relative;
      top: 20px;
      span {
        display: block;
      }
      img {
        width: 220px;
      }
      .style {
        margin-bottom: -10px;
        color: #ea5512;
        font-size: 30px;
      }
      .car {
        margin-top: -20px;
        font-size: 30px;
      }
    }
  }
  .middle {
    font-size: 36px;
    padding: 20px 0;
    .price {
      color: #eb6022;
      font-size: 72px;
      margin: 0 20px 0 0;
    }
  }
  .footer {
    line-height: 48px;
    background: @bor;
    font-size: 26px;

    padding: 20px 0;
    .phone {
      color: #eb6022;
    }
  }
}
</style>
