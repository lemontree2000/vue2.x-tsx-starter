<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data() {
    return {}
  },
  created() {
    console.log(process.env)
    // axios
    //   .get('/__proxy__/api')
    //   .then((res) => {
    //     console.log(res)
    //   })
    //   .catch((reason) => {
    //     console.error(reason)
    //   })
  }
}
</script>

<style lang="less">
body,
html {
  height: 100%;
}
#app {
  height: 100%;
}
</style>
