<template>
  <div>home{{userName}}</div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("user", ['userName'])
  },
  methods: {
    ...mapActions("user", {
      login: "login"
    })
  },
  created() {
    // console.log(this.login);
    this.login('Edward')
  }
};
</script>

<style>
</style>