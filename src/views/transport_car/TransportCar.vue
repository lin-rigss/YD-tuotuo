<template>
  <div class="transportcar">
    <h3>
      快速下单
    </h3>
    <group>
       <van-field
            readonly
            clickable
            label="始发地"
            :value="value"
            v-model="value"
            placeholder="请选择始发地"
            @click="showPicker = true"
       />
    </group>
       <Popup v-show="showPicker" @cancel="showPicker=false" @sure="departurePlace" ref="popup"></Popup>
    
     <group>
       <van-field
            readonly
            clickable
            label="目的地"
            :value="dvalue"
            v-model="dvalue"
            placeholder="请选择目的地"
            @click="dshowPicker = true"
        />
     </group>
        <Popup v-show="dshowPicker" @cancel="dshowPicker=false" @sure="destination" ref="popup"></Popup>

     <group>
       <van-cell-group>
          <van-field
            v-model="extractCount"
            label="车数量"
            placeholder="请输入运车数量"
          />
        </van-cell-group>

      <!-- <x-input
        title="发车联系人"
        value-text-align='right'
        placeholder="请填写发车人姓名"
        v-model='submitParams.trafficContact.value'
      ></x-input>
      <x-input
        value-text-align='right'
        title="手机号"
        placeholder="请填写发车手机号"
        v-model='submitParams.trafficPhone.value'
      ></x-input> -->
       <van-cell-group>
          <van-field
            v-model="contacts"
            label="发车联系人"
            placeholder="请填写发车人姓名"
          />
        </van-cell-group>
  
       <van-cell-group>
          <van-field
            v-model="phoneValue"
            label="手机号"
            placeholder="请填写发车手机号"
          />
        </van-cell-group>
    </group>

    <div
      class="footerBtn"
      @click="submitForm"
      v-transfer-dom
    >
      提交
    </div>
  </div>
</template>
<script>

import Vue from 'vue';
import { Field } from 'vant';
Vue.use(Field);

import _ from "lodash";
import { globalData, api } from "api";
import { getCascaderSelectedName } from "utils";
import {
    XInput,
    Group,
    PopupPicker,
    XAddress,
    ChinaAddressData,
    XButton,
    Loading,
    TransferDomDirective as TransferDom
} from "vux";
import Popup from './Popup';
const { getCarStyle } = globalData;
const { submitOrder } = api;
export default {
    name: "TransportCar",
    directives: {
        TransferDom
    },
    components: {
        Group,
        XInput,
        XAddress,
        PopupPicker,
        XButton,
        // Loading
        Popup
    },
    data() {
        return {
             showPicker: false,
             dshowPicker: false,
             value:'',   // 始发地
             valueName:'',
             dvalue:'',  // 目的地
             dvalueName:'',
             extractCount:'', // 运车数量
             phoneValue:'', // 手机号
             contacts:'', // 联系人


            addressList: ChinaAddressData,
            carStyle: [], // 车型列表
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
                trafficContact: {
                    value: "",
                    message: "请输入发车人姓名"
                },
                trafficPhone: {
                    value: "",
                    message: "请输入手机号"
                }
            }
        };
    },
    methods: {
    // 选择始发地
    departurePlace(city) {
      let {name,valueName} = city
      this.showPicker = false;
      this.value = name;
      this.valueName = valueName;
      // console.log(this.value,this.valueName)
    },
    // 选择目的地
    destination(city) {
      let {name,valueName} = city
      this.dshowPicker = false;
      this.dvalue = name;
      this.dvalueName = valueName;
      // console.log(this.dvalue,this.dvalueName)
    },




        submitForm() {
            
            if (!/^1[34578]\d{9}$/.test(this.phoneValue)) {
                this.$vux.alert.show({
                    title: "提示",
                    "button-text": "知道了",
                    content: "请输入正确的手机号",
                    onHide() {}
                });
                return false;
            }
            let that = this;
            this.$vux.confirm.show({
                title: "提示",
                content: "您确定要提交吗？",
                onCancel() {},
                onConfirm() {
                let params = {
                    "extractCount":this.extractCount,
                    "departurePlaceId":this.valueName,
                    "destinationId": this.dvalueName,
                    "trafficContact":this.contacts,
                    "trafficPhone":this.phoneValue,
                 }              
    
                submitOrder(params).then(res => {                
                    if (res.success) {
                        that.$router.push('/ordersuccess')
                    } else {
                        that.$vux.alert.show({
                            title: "提示",
                            "button-text": "知道了",
                            content: "下订单出现错误，请重新下单",
                            onHide() {}
                        });
                    }
                    });
                }
            });















            // let params = _.cloneDeep(this.submitParams);
            //let fields = {};
            // console.log(params.brandId.value)
            //for (let key in params) {
            //     fields[key] = params[key].value;
            //     if (params[key].value.length === 0) {
            //         this.$vux.toast.show({
            //             text: params[key].message,
            //             type: "text",
            //             position: "top",
            //             width: "auto"
            //         });
            //         return;
            //         break;
            //     }
            // }
            // if (!/^1[34578]\d{9}$/.test(fields.trafficPhone)) {
            //     this.$vux.alert.show({
            //         title: "提示",
            //         "button-text": "知道了",
            //         content: "请输入正确的手机号",
            //         onHide() {}
            //     });
            //     return false;
            // }
            // let that = this;
            // this.$vux.confirm.show({
            //     title: "提示",
            //     content: "您确定要提交吗？",
            //     onCancel() {},
            //     onConfirm() {
            //         let {
            //             departurePlace,
            //             destination,
            //             brandId,
            //             ...submitParam
            //         } = fields;
            //         let brand1 = fields.brandId[1].split("-");
            //         if (brand1[1] != "kong") {
            //             fields.brandId[1] = brand1[1];
            //         } else if (brand1[1] == "kong") {
            //             fields.brandId[1] = "";
            //         }
            //         submitParam.taskList = [
            //             {
            //                 brandId: fields.brandId,
            //                 brandName: getCascaderSelectedName(
            //                     that.carStyle,
            //                     that.submitParams.brandId.value,
            //                     "name",
            //                     "value"
            //                 )
            //                 // departurePlaceValue: getCascaderSelectedName(
            //                 //   that.addressList,
            //                 //   departurePlace
            //                 // ),
            //                 // departurePlaceId: departurePlace,
            //                 // destinationId: destination,
            //                 // destinationValue: getCascaderSelectedName(
            //                 //   that.addressList,
            //                 //   destination
            //                 // )
            //             }
            //         ];
            //         submitParam.departurePlaceValue = getCascaderSelectedName(
            //             that.addressList,
            //             departurePlace
            //         );
            //         submitParam.destinationValue = getCascaderSelectedName(
            //             that.addressList,
            //             destination
            //         );
            //         submitParam = {
            //             ...submitParam,
            //             departurePlaceId: departurePlace,
            //             destinationId: destination
            //         };
            //         that.$vux.loading.show({
            //             text: "正在提交..."
            //         });
            //         submitOrder(submitParam).then(res => {
            //             that.$vux.loading.hide();
            //             if (res.success) {
            //                 that.$router.push({ path: "/ordersuccess" });
            //             } else {
            //                 that.$vux.alert.show({
            //                     title: "提示",
            //                     "button-text": "知道了",
            //                     content: "下订单出现错误，请重新下单",
            //                     onHide() {}
            //                 });
            //             }
            //         });
            //     }
            // });
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
.transportcar {
    background-color: @bac;
    margin-top: -60px;
    .weui-cell {
        height: 110px;
        font-size: 28px;
        padding: 0 40px 0 40px;
    }
    .weui-cell_access .weui-cell__ft:after {
        top: -8px;
        height: 24px;
        width: 24px;
    }
    .vux-cell-primary {
        margin-right: 40px;
    }
    .weui-input {
        text-align: right;
    }
    h3 {
        padding-top: 60px;
        color: #aaa;
        font-size: 24px;
        font-family: @f_m_M;
        padding-left: 40px;
    }
}
</style>
