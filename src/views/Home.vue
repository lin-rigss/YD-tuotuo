<template>
    <div>
       <group>
        <x-address title="title" :list='addressList'></x-address>
      </group>
    </div>

</template>

<script>
import { XAddress, ChinaAddressData ,Group} from 'vux'
export default {
    name: "home",
    components:{
      Group,
      XAddress
    },
    data(){
      return {
        addressList: ChinaAddressData
      }
    }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
