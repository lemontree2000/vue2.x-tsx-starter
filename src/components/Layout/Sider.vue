<template>
  <a-layout-sider
    v-model="collapsed"
    :style="{ background: '#262A39' }"
    :trigger="null"
    collapsible
    width="240"
    :class="{ collapsed }"
  >
    <div class="logo">
      <img src="~@/assets/logo.svg" width="25" alt="logo" />
      <span class="stacksweet">STACKSWEET</span>
    </div>
    <a-menu class="ss-menu" mode="inline" theme="dark" :default-selected-keys="['1']">
      <a-menu-item key="1">
        <a-icon type="mail" />
        <span>权限系统</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="calendar" />
        <span>任务系统</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="appstore" /><span>商品系统</span></span>
        <a-menu-item key="3">
          <span> 商品管理</span>
        </a-menu-item>
        <a-menu-item key="4">
          <span> 类目管理</span>
        </a-menu-item>
        <a-sub-menu key="sub1-2" title="订单系统">
          <a-menu-item key="5">
            订单列表
          </a-menu-item>
          <a-menu-item key="6">
            订单管理
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="setting" /><span>Navigation Four</span></span>
        <a-menu-item key="7">
          Option 7
        </a-menu-item>
        <a-menu-item key="8">
          Option 8
        </a-menu-item>
        <a-menu-item key="9">
          Option 9
        </a-menu-item>
        <a-menu-item key="10">
          Option 10
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'

@Component({
  name: 'ss-sider',
  computed: {
    ...mapState(['collapsed'])
  }
})
export default class HelloWorld extends Vue {
  readonly collapsed!: boolean
}
</script>
