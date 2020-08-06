<template>
  <a-layout-header style="background: #fff; padding: 0;">
    <div class="left-header">
      <a-icon
        class="trigger"
        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="toggleCollapsed"
      />
    </div>
    <div class="right-header">
      <global-actions />
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState, mapActions } from 'vuex'
import GlobalActions from './GlobalActions.vue'

@Component({
  name: 'ss-header',
  components: {
    GlobalActions
  },
  methods: {
    ...mapActions(['setSollapsed'])
  },
  computed: {
    ...mapState(['collapsed'])
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
