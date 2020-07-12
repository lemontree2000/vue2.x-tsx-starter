<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {}
  },
  created() {
    axios
      .get('/__proxy__/api')
      .then((res) => {
        console.log(res)
      })
      .catch((reason) => {
        console.error(reason)
      })
  }
}
</script>

<style lang="less" scoped></style>
