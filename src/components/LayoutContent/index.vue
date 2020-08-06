<template>
  <div class="ss-layout-conent">
    <PageHeader v-bind="$attrs" />
    <div class="content-warp">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PageHeader from '../PageHeader/index.vue'

@Component({
  name: 'ss-layout-conent',
  components: {
    PageHeader
  }
})
export default class HelloWorld extends Vue {
  readonly setSollapsed!: (val: boolean) => void
  readonly collapsed!: boolean

  toggleCollapsed() {
    this.setSollapsed(!this.collapsed)
  }
}
</script>

<style lang="less" scoped src="./index.less" />
