<template>
  <div class="transportcar">
    <h3>
      快速下单
    </h3>
    <group>
      <x-address
        title="始发地"
        :list='addressList'
        placeholder="请选择始发地"
        value-text-align='right'
        v-model="submitParams.departurePlace.value"
      ></x-address>
      <x-address
        title="目的地"
        :list='addressList'
        placeholder="请选择目的地"
        value-text-align='right'
        v-model="submitParams.destination.value"
      ></x-address>
      <popup-picker
        title="车&nbsp;&nbsp;&nbsp;型"
        value-text-align='right'
        :data='carStyle'
        placeholder="请选择车型"
        show-name
        :fixed-columns="2"
        :columns=2
        v-model='submitParams.brandId.value'
      ></popup-picker>

    </group>
    <group>
      <x-input
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
      ></x-input>
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
    // Loading,
    TransferDomDirective as TransferDom
} from "vux";
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
        XButton
        // Loading
    },
    data() {
        return {
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
        submitForm() {
            let params = _.cloneDeep(this.submitParams);
            let fields = {};
            // console.log(params.brandId.value)
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
            if (!/^1[34578]\d{9}$/.test(fields.trafficPhone)) {
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
                    let {
                        departurePlace,
                        destination,
                        brandId,
                        ...submitParam
                    } = fields;
                    let brand1 = fields.brandId[1].split("-");
                    if (brand1[1] != "kong") {
                        fields.brandId[1] = brand1[1];
                    } else if (brand1[1] == "kong") {
                        fields.brandId[1] = "";
                    }
                    submitParam.taskList = [
                        {
                            brandId: fields.brandId,
                            brandName: getCascaderSelectedName(
                                that.carStyle,
                                that.submitParams.brandId.value,
                                "name",
                                "value"
                            )
                            // departurePlaceValue: getCascaderSelectedName(
                            //   that.addressList,
                            //   departurePlace
                            // ),
                            // departurePlaceId: departurePlace,
                            // destinationId: destination,
                            // destinationValue: getCascaderSelectedName(
                            //   that.addressList,
                            //   destination
                            // )
                        }
                    ];
                    submitParam.departurePlaceValue = getCascaderSelectedName(
                        that.addressList,
                        departurePlace
                    );
                    submitParam.destinationValue = getCascaderSelectedName(
                        that.addressList,
                        destination
                    );
                    submitParam = {
                        ...submitParam,
                        departurePlaceId: departurePlace,
                        destinationId: destination
                    };
                    that.$vux.loading.show({
                        text: "正在提交..."
                    });
                    submitOrder(submitParam).then(res => {
                        that.$vux.loading.hide();
                        if (res.success) {
                            that.$router.push({ path: "/ordersuccess" });
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
