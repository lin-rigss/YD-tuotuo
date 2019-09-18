<template>
  <div class="mask" >
    <div class="maskContent">

       <div class="search">
         <input class="inp" type="text" v-model="filterInput"  placeholder="搜索 查询城市">
       </div>


       <div  class="listBox" >
          <ul>
           <li v-for="(item,index) in filterFn(pickerData,filterInput)" :key="index">
              <a @click="picker(item.name,item.value)" :class="{'active': item.name == msg ? true :false }">{{item.name}}</a>
           </li>
         </ul>
       </div>
           
       <!-- <div class="bottom-btn">
           <button class="btn" @click="ok">确认</button>
       </div>       -->
    </div>
  </div>
</template>

<script>
import { Picker } from 'vux'
import city from '../../assets/dictData/city'

// let years = []
// for (var i = 2000; i <= 2030; i++) {
//   years.push({
//     name: i + '年',
//     value: i + ''
//   })
// }


export default {
  data() {
    return {
      msg: "",
      filterInput:'',
      value:[],
      pickerData:city,
      active:false,
      valueName:'',
     
    };
  },
  methods: {
    // ok() {
    //   this.$emit("sure", this.msg);
    //   this.filterInput = ''
    // },
    // onChange(val){
    //   // console.log(val)
    //   let newPick = this.pickerData.filter(item=>item.value == val)
    //   // console.log(newPick)
    //   this.msg = newPick[0].name
    // },

    picker(name,value){
      // console.log(name)
      this.msg = name;
      this.valueName = value;
      let city = {
        name:this.msg,
        valueName:this.valueName
      }
      this.$emit("sure", city);
      this.filterInput = ''
    },

    // 过滤的方法
    filterFn(pickerData,value){
      return pickerData.filter(function(item){
        return item.name.match(value)
        
      })
    }
  },
  components:{
    Picker
  }
};
</script>


<style scoped lang='less'>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
}
.maskContent {
  // margin: 0 auto;
  width: 100%;
  // height: 90%;
  background: #fff;
  border-radius: 0.05rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);

  /* 使用元素居中显示 */
  padding: 0.3rem;
  z-index: 10;
  font-size: 0.25rem;
  li {
    line-height: 0.33rem;
    // margin-left: 0.2rem;
    width: 100%;
    display: flex;
    margin-bottom: -.2rem;
    .field-l {
      width: 20%;
    }
    .field-r {
      width: 80%;
      height: 1.5rem;
      border: 0.01rem solid #e4e4e4;
      font-size: 0.25rem;
      line-height: 0.33rem;
    }
  }
  .search{
    width: 80%;
    display: flex;
    margin: 0 auto;
    .inp{
      width: 100%;
      height: .6rem;
      font-size:.28rem; 
      color: #333;
      border:.01rem solid #cdcdcd;
    }
    // button{
    //   width: 20%;
    //   background-color: #0390f4;
    //   color: #fff;
    //   font-size:.28rem; 
    //   border:.01rem solid #0390f4;
    // }
  }

  .listBox{
    width: 80%;
    height:10rem;
    margin: 0 auto;
    overflow:scroll;
    li{
      height: .8rem;
      line-height: .8rem;
      text-align: center;
      font-size: .28rem;
      color: #333;
      margin: 0 auto;
      a{
        display: block;
        text-align: center;
        margin: 0 auto;
      }
      .active{
        color: #0390f4;
      }
    }
  }
  .bottom-btn{
    width: 100%;

    button{
      display: block;
      width: 2.5rem;
      height: 0.55rem;
      line-height: 0.4rem;
      background-color: #0390f4;
      color: #fff;
      font-size: 0.3rem;
      border: none;
      border-radius: 0.1rem;
      margin: 0 auto;
    }
}
}
.maskBtn {
  width: 2.5rem;
  height: 0.55rem;
  line-height: 0.4rem;
  background-color: #0390f4;
  color: #fff;
  font-size: 0.3rem;
  border: none;
  border-radius: 0.1rem;
}

.active{
  color: #0390f4;
}


</style>