<template>
  <a-layout-sider v-model="collapsed" :trigger="null" collapsible width="240">
    <div class="logo" />
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
      <a-menu-item key="1">
        <a-icon type="user" />
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="video-camera" />
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="upload" />
        <span>nav 3</span>
      </a-menu-item>
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
