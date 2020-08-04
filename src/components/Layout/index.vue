<template>
  <a-layout class="ss-layout">
    <sider />
    <a-layout>
      <header-bar />
      <a-layout-content>
        <transition name="fade-transform" mode="out-in">
          <router-view />
        </transition>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Sider from './component/Sider.vue'
import HeaderBar from './component/HeaderBar.vue'
@Component({
  components: {
    Sider,
    HeaderBar
  }
})
export default class HelloWorld extends Vue {
  @Prop() private msg!: string
}
</script>

<style lang="less" src="./index.less" />
