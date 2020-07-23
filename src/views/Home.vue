<template>
  <div>
    {{ userName }}
    <a-button type="primary" @click="jumpAboutPage">
      Primary12
    </a-button>
    <img src="../assets/tes.png" alt="" />
    <img src="../assets/jb.png" alt="" />
  </div>
</template>

<script lang="ts">
import { mapActions, mapState } from 'vuex'
import { Component, Vue } from 'vue-property-decorator'
import '@/apis/index'
@Component({
  computed: {
    ...mapState('user', ['userName'])
  },
  methods: {
    ...mapActions('user', {
      login: 'login'
    })
  }
})
export default class Home extends Vue {
  readonly userName!: string
  readonly login!: (val: any) => void
  created() {
    this.login('Edward')
  }
  jumpAboutPage() {
    this.$router.push('/about')
  }
}
</script>

<style lang="less" scoped></style>
