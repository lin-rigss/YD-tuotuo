<template>
 <div class="about_us">
    <img src="./img/banner.png" alt="" class="banner">
    <div class="instruction">
        <p>
          安达承运经由北京交通管理局运输管理处审批，成立于2012年。总部位于北京市顺义区，比邻鲜花港，厂区占地面积500亩，就职员工400余人，年营业收入逾2亿元。自有大型整车物流运输车200台，运输线路可覆盖北京、上海、广州、河北、河南、东北、内蒙、山东、山西、陕西、江浙、云贵、川渝、广东、广西、海南、新疆等地，全国多地设有分点办事处，拥有专业的服务、驾驶团队，丰富的轿运物流行业经验。合作企业包括北京现代、北京汽车、一汽大众、华晨宝马、上汽、广汽丰田、郑州日产、奇瑞汽车、吉利汽车、比亚迪、东风汽车、长安汽车，以及国有大型企业长久物流。
        </p>
        <p class="center">
          “妥妥运车”历经一年时间，打通线上、线下渠道，从面向九大汽车厂的运输公司，转型为面向消费者私家车托运的新型企业，深耕业务领域，满足多样化的市场需求：生活、商务、异地用车以及自驾游等。
        </p>
        <p>
          愿成为您真正的伙伴，托运轿车，使命必达。
        </p>
      </div>
    <div class="our_team">
      <h3>我们的团队</h3>
      <img src="./img/team01.png" alt="" class="team0">
      <img src="./img/team02.png" alt="">
    </div>
  </div>
</template>
 
<script>
  export default {
    name:'aboutus'
  }
</script>
<style lang="less" scoped>
.about_us{
  .banner{
    display: inline-block;
    margin-top: -56px;
    width: 100%;
  }
  .instruction{
    background-color: @bac;
    margin-top: -20px;
    padding: 40px 40px 0 40px;
    font-size: 28px;
    color: @f_c_2;
    line-height: 48px;
    p{
      padding-bottom: 40px;
    }
  }
  .our_team{
    padding: 40px 40px 60px;
    h3{
      .text_title(@color:@f_c_e;@font_size:30px);
      line-height: 39px;
      margin: 20px 0 30px;
    }
    img{
      width: 100%;
    }
    .team0{
      display: inline-block;
      margin-bottom: 60px;
    }
  }
}
</style>
