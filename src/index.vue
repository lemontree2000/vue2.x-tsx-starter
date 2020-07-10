<template>
  <div>
    <router-view />
    <span>sfds</span>
  </div>
</template>

<script>
import axios from "axios";

import logo from "@/assets/log.svg"
console.log(logo)
export default {
  data() {
    return {
      b: "hel2lo"
    };
  },
  created() {
    axios.get('/__proxy__/api').then(res => {
      console.log(res)
    }).catch(reason => {
      console.error(reason)
    })
  }
};
</script>

<style lang="less" scoped>
 /** 
@import url("./assets/common.less");

div {
  color: @abc;
  font-size: @f12;
 
  background: rgb(0, 0, 5);
  display: flex;
  flex: 1;
  display: grid;
  border-radius: 1px;
  opacity: 0.4;
  transition: all 0.3s;
   transform: scale(0.5);
}*/
</style>