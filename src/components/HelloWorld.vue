<template>
  <div class="hello">
    <h1>{{ msg }}{{ message }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string
  message = 2
}
</script>

<style scoped lang="less"></style>
