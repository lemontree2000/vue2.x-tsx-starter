<template>
  <div>
    <router-view />
    <span>sfds</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      b: "hel2lo"
    };
  }
};
</script>

<style lang="less" scoped>
div {
  background: red;
  display: flex;
  span {
    color: #36f;
  }
}
</style>