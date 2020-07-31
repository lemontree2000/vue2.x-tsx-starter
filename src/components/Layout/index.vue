<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <sider />
    <a-layout>
      <header-bar />
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Sider from './Sider.vue'
import HeaderBar from './HeaderBar.vue'
@Component({
  components: {
    Sider,
    HeaderBar
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string
  collapsed = false
}
</script>

<style lang="less" src="./index.less" />
