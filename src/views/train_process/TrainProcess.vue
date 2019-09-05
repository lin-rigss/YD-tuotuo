<template>
  <div class="train_process">
    <h3>运车流程详解</h3>
    <div class="detail">
      <h4><img
          src="./img/flow01.png"
          alt=""
        >1.快速下单</h4>
      <ul>
        <li>- 网站下单、客服核对信息 </li>
        <li>- 确认交车时间地点（上门提车或自驾来我司均可）；</li>
      </ul>
    </div>
    <div class="detail">
      <h4><img
          src="./img/flow02.png"
          alt=""
        >2.验车提车</h4>
      <ul>
        <li>- 准备随车车辆合法证明（发票、行驶证、机动车辆登记证）复印件及钥匙；</li>
        <li>- 检查车辆以及外观并拍验车照片入系统，双方确认 <p>
            轮眉、轮毂、前后杠、玻璃、倒车镜、车辆四个角、车辆顶部、车门、备胎、说明书、天线、发票合格证、首保卡、保养手册等等。以上事项全部填写至妥妥运车运输合同</p>
        </li>
      </ul>
    </div>
    <div class="detail">
      <h4><img
          src="./img/flow03.png"
          alt=""
        >3.签署协议</h4>
      <ul>
        <li>
          <p>检查车辆以及外观，确认无异议的前提下，双方签订运输协议</p>
        </li>
      </ul>
    </div>
    <div class="detail">
      <h4><img
          src="./img/flow04.png"
          alt=""
        >4.妥妥运车</h4>
      <ul>
        <li>- 运输途中，专人负责 <p>
            车辆从运输开始到运输结束整个过程，我们有专人负责轿车托运进程的查询</p>
        </li>
        <li>- 司机与接车人联系<p>
            车辆将要到达目的地时，我司司机将按您提供的方式和接车人提前取得联系，并且确定接车的详细时间和地点，以便交接车辆的顺利进行</p>
        </li>
      </ul>
    </div>
    <div class="detail">
      <h4><img
          src="./img/flow05.png"
          alt=""
        >5.验车交车</h4>
      <ul>
        <li>- 接车检查，确认状况 <p>
            车主接车时，请携带有效证件以及务必检查车辆以及外观，确保与发车前一致后，再确认接车。</p>
        </li>
        <li>- 支付运费，运输结束 <p>
            轿车托运费用由我司司机代收
          </p>
        </li>
        <li>- 妥妥运车后期服务。</li>
      </ul>
    </div>
    <div class="mark">
      <div>注：</div>
      a、外迁车辆：携带临时号牌或二手车销售统一发票或机动车登记受理凭证复印件与车同行； <br>
      b、新车：携带机动车销售统一发票与车同行；<br>
      c、进口车：进口机动车辆随车检验单或货物进口证明书复印件与车同行；<br>
    </div>
  </div>

</template>
 
<script>
export default {
  name: "trainprocess"
};
</script>
<style lang="less" scoped>
.train_process {
  h3 {
    .text_title();
    margin: 40px 0 40px;
  }
  .detail {
    color: white;
    width: 660px;
    margin: 0 auto;
    h4 {
      .text_title(@font_size:36px, @color: "white");
      background-color: @f_c_2;
      height: 86px;
      border-radius: 43px;
      line-height: 86px;
      position: relative;
      margin: 20px 0;
      img {
        width: 60px;
        position: absolute;
        left: 64px;
        top: 14px;
      }
    }
    ul {
      box-sizing: border-box;
      padding: 0 40px;
      li {
        list-style: none;
        color: @f_c_2;
        font-size: 24px;
        line-height: 40px;
        margin-bottom: 14px;
        text-indent: -20px;
        p {
          color: #777777;
          text-indent: 0;
        }
      }
    }
  }
  .mark {
    background: #ffe9e3;
    color: @f_c_e;
    box-sizing: border-box;
    margin: 60px 40px;
    padding: 30px 30px 40px 30px;
    line-height: 50px;
  }
}
</style>
