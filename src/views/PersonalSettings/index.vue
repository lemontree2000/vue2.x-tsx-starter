<template>
  <div class="personal-settings">
    <layout-content title="个人中心">
      ssdf
    </layout-content>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LayoutContent from '@/components/LayoutContent/index.vue'

@Component({
  name: 'personal-settings',
  components: {
    LayoutContent
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
