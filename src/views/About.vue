<template>
  <div>
    <a-button type="primary" @click="requestBaidu">
      hello
    </a-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import Axios from 'axios'
// import { config } from '@/config/index'

@Component
export default class About extends Vue {
  created() {
    console.log('heell')
  }
  requestBaidu() {
    // Axios.get(config.serverUrl)
    //   .then((res) => {
    //     console.log(res)
    //   })
    //   .catch((err) => console.error(err))
  }
}
</script>

<style lang="less" scoped></style>
