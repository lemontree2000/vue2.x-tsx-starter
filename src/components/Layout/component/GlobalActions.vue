<template>
  <div class="global-actions">
    <a-dropdown>
      <div class="dropdonw-placeholder">
        <a-avatar icon="user" />
        <span class="user-info">
          <span class="user-name">Edward Guo</span>
          <span class="user-job">程序员</span>
        </span>
      </div>
      <a-menu slot="overlay">
        <a-menu-item>
          <a href="javascript:;">个人中心</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">退出登录</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'ss-global-actions'
})
export default class HelloWorld extends Vue {}
</script>
