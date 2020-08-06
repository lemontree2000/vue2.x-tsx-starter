<template>
  <div class="ss-page-header">
    <span class="page-title">{{ title }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  name: 'ss-page-header'
})
export default class HelloWorld extends Vue {
  @Prop(String) readonly title: string | undefined
  @Prop(Boolean) readonly hasBack: boolean | undefined

  readonly setSollapsed!: (val: boolean) => void
  readonly collapsed!: boolean

  toggleCollapsed() {
    this.setSollapsed(!this.collapsed)
  }
}
</script>
<style lang="less" scoped src="./index.less" />
